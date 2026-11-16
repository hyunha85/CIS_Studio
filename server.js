// 웹 서버를 실행하기 위한 라이브러리
const express = require("express");

// 파일과 폴더 경로를 안전하게 처리하는 라이브러리
const path = require("path");

// 결과물 폴더 생성 및 삭제에 사용하는 라이브러리
const fs = require("fs/promises");

// 여러 PPT의 슬라이드를 병합하는 핵심 라이브러리
const automizerModule = require("pptx-automizer");

const Automizer = automizerModule.default || automizerModule;
const app = express();
const PORT = process.env.PORT || 3000;

// 웹페이지에서 전달한 JSON 데이터를 읽도록 설정
app.use(express.json({ limit: "10kb" }));

// public 폴더의 HTML, JavaScript, 썸네일을 웹페이지에 제공
app.use(express.static(path.join(__dirname, "public")));

/*
 * 화면의 슬라이드 ID와 원본 PPT를 연결합니다.
 *
 * source: pptx-automizer에서 원본 PPT를 구분하는 이름
 * count: 해당 원본 PPT에 들어 있는 슬라이드 장수
 */
const slides = [
  // 기존 테스트 자료
  { source: "company", count: 3 },
  { source: "education", count: 3 },

  // 인생설계카운슬러 자료
  { source: "career", count: 40 },
  { source: "newcomer", count: 46 },

  // 인트로 자료
  { source: "intro-career", count: 5 },
  { source: "intro-new", count: 5 },
  { source: "intro-sidejob", count: 5 },
  { source: "intro-customer", count: 5 },
].flatMap(({ source, count }) =>
  Array.from({ length: count }, (_, index) => ({
    /*
     * 예시:
     * intro-career-01
     * intro-career-02
     * intro-new-01
     */
    id: `${source}-${String(index + 1).padStart(2, "0")}`,

    // 슬라이드가 들어 있는 원본 PPT 구분값
    source,

    // 원본 PPT에서 가져올 슬라이드 번호
    number: index + 1,
  }))
);

// 슬라이드 ID만으로 슬라이드 정보를 빠르게 찾기 위한 목록
const slideById = new Map(
  slides.map((slide) => [slide.id, slide])
);

// 로딩 페이지에서 Render 서버의 준비 상태를 확인하는 주소
app.get("/api/health", (req, res) => {
  // 별도로 배포된 로딩 페이지에서 상태를 확인할 수 있도록 허용
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-store",
  });

  res.json({
    ready: true,
    message: "CIS 서버가 정상 작동합니다.",
  });
});

// 사용자가 다운로드 버튼을 눌렀을 때 실행
app.post("/api/download", async (req, res) => {
  // 웹페이지에서 전달한 슬라이드 ID 목록
  const ids = req.body?.ids;

  /*
   * 전달받은 데이터가 올바른지 확인합니다.
   *
   * 1. 배열인지 확인
   * 2. 한 장 이상 선택했는지 확인
   * 3. 등록된 전체 슬라이드 수보다 많지 않은지 확인
   * 4. 서버에 등록된 슬라이드 ID인지 확인
   */
  if (
    !Array.isArray(ids) ||
    ids.length === 0 ||
    ids.length > slides.length ||
    ids.some((id) => !slideById.has(id))
  ) {
    return res.status(400).json({
      message: "슬라이드를 1개 이상 올바르게 선택해 주세요.",
    });
  }

  /*
   * 웹페이지에서 전달받은 순서를 그대로 유지합니다.
   *
   * 예:
   * intro-career-03 → company-01 → intro-new-02
   * 순서로 전달되면 PPT도 같은 순서로 병합됩니다.
   */
  const selected = ids.map((id) => slideById.get(id));

  // 이번 다운로드 요청에 사용할 임시 폴더
  let jobDir;

  try {
    // 완성된 PPT를 임시로 저장할 output 폴더
    const outputDir = path.join(__dirname, "output");

    // output 폴더가 없으면 새로 생성
    await fs.mkdir(outputDir, { recursive: true });

    /*
     * 여러 사람이 동시에 다운로드하더라도
     * 파일이 서로 섞이지 않도록 요청마다 별도 폴더를 생성합니다.
     */
    jobDir = await fs.mkdtemp(
      path.join(outputDir, "download-")
    );

    /*
     * PPT 병합 기능을 설정합니다.
     */
    const automizer = new Automizer({
      // 원본 PPT 파일이 들어 있는 폴더
      templateDir: path.join(__dirname, "templates"),

      // 완성된 PPT가 임시 저장될 폴더
      outputDir: jobDir,

      // 기준 PPT에 있던 기존 슬라이드는 결과물에서 제거
      removeExistingSlides: true,

      /*
       * 매우 중요한 설정입니다.
       *
       * 각 원본 PPT가 사용하고 있는
       * 슬라이드 마스터와 레이아웃을 함께 가져옵니다.
       *
       * 이 설정이 없으면 원본 PPT의 배경 이미지,
       * 로고, 도형 등이 사라질 수 있습니다.
       */
      autoImportSlideMasters: true,

      /*
       * 사용하지 않는 PPT 내부 파일을 자동으로 삭제하는 기능입니다.
       *
       * 현재 테스트에서는 정리 과정에서 마스터에 연결된
       * 배경 이미지가 삭제될 가능성이 있어 false로 설정합니다.
       *
       * 결과 PPT 용량은 조금 커질 수 있습니다.
       */
      cleanup: false,
    });

    /*
     * templates 폴더에 있는 원본 PPT를 등록합니다.
     *
     * loadRoot:
     * 결과 PPT의 기본 크기와 구조가 되는 기준 파일
     *
     * load:
     * 실제로 슬라이드를 가져올 원본 PPT 등록
     */
    const presentation = automizer
      // 결과 PPT의 기준 파일
      .loadRoot("인트로_01_경력.pptx")

      // 기존 테스트 자료
      .load("회사소개.pptx", "company")
      .load("교육.pptx", "education")

      // 인생설계카운슬러 자료
      .load(
        "2026CIS_인생설계카운슬러_경력.pptx",
        "career"
      )
      .load(
        "2026CIS_인생설계카운슬러_무경력.pptx",
        "newcomer"
      )

      // 인트로 자료
      .load(
        "인트로_01_경력.pptx",
        "intro-career"
      )
      .load(
        "인트로_02_순수신인.pptx",
        "intro-new"
      )
      .load(
        "인트로_03_N잡러.pptx",
        "intro-sidejob"
      )
      .load(
        "인트로_04_고객.pptx",
        "intro-customer"
      );

    /*
     * 웹페이지의 오른쪽 선택 목록에 표시된 순서대로
     * 슬라이드를 결과 PPT에 추가합니다.
     */
    for (const slide of selected) {
      presentation.addSlide(
        slide.source,
        slide.number
      );
    }

    // 선택한 슬라이드를 CIS.pptx 파일로 생성
    await presentation.write("CIS.pptx");

    // 만들어진 PPT의 전체 경로
    const filePath = path.join(
      jobDir,
      "CIS.pptx"
    );

    // VS Code 터미널에서 실제 병합 순서를 확인
    console.log(
      "선택한 슬라이드와 병합 순서:",
      selected.map((slide) => slide.id)
    );

    /*
     * 생성된 PPT를 사용자 컴퓨터로 전송합니다.
     * 브라우저에서는 '나만의_CIS.pptx'라는 이름으로 다운로드됩니다.
     */
    res.download(
      filePath,
      "나만의_CIS.pptx",
      (error) => {
        /*
         * 다운로드가 끝나면 이번 요청에서 만든
         * 임시 작업 폴더를 삭제합니다.
         */
        fs.rm(jobDir, {
          recursive: true,
          force: true,
        }).catch(console.error);

        if (error) {
          console.error("PPT 전송 오류:", error);

          if (!res.headersSent) {
            res.status(500).json({
              message: "PPT 전송에 실패했습니다.",
            });
          }
        }
      }
    );
  } catch (error) {
    // PPT 생성 과정에서 발생한 오류를 터미널에 표시
    console.error("PPT 생성 오류:", error);

    // 오류가 발생했더라도 임시 폴더는 삭제
    if (jobDir) {
      await fs
        .rm(jobDir, {
          recursive: true,
          force: true,
        })
        .catch(console.error);
    }

    if (!res.headersSent) {
      res.status(500).json({
        message:
          "PPT 생성에 실패했습니다. VS Code 터미널을 확인해 주세요.",
      });
    }
  }
});

// 내 컴퓨터의 3000번 포트에서 서버 실행
app.listen(PORT, "0.0.0.0", () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
});