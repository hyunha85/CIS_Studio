/**
 * 파일명: public/slides.js
 *
 * 현재는 기능 확인용 임시 설정입니다.
 * 아직 카테고리별 최종 PPT가 없으므로 기존 PPT를 소주제에 임시 연결합니다.
 *
 * 중요:
 * 하나의 PPT를 슬라이드별로 카테고리에 쪼개는 구조가 아닙니다.
 * 소주제 하나를 선택하면 연결된 PPT의 전체 슬라이드가 선택됩니다.
 */

const CIS_SOURCE_CONFIG = [
  {
    prefix: "company",
    name: "회사소개",
    folder: "",
    count: 3,

    // 회사소개 PPT 전체를 임시 연결
    topicIds: [
      "understand-fa-ga",
      "understand-company",
      "outro-message",
    ],
  },
  {
    prefix: "education",
    name: "교육",
    folder: "",
    count: 3,

    // 교육 PPT 전체를 임시 연결
    topicIds: [
      "support-training",
      "support-system",
      "support-digital",
    ],
  },
  {
    prefix: "career",
    name: "경력",
    folder: "2026CIS_인생설계카운슬러_경력",
    count: 40,

    // 경력 PPT 전체를 임시 연결
    topicIds: [
      "understand-history",
      "strength-scale",
      "strength-trust",
      "outro-fa",
    ],
  },
  {
    prefix: "newcomer",
    name: "무경력",
    folder: "2026CIS_인생설계카운슬러_무경력",
    count: 46,

    // 무경력 PPT 전체를 임시 연결
    topicIds: [
      "strength-services",
      "support-db",
      "support-promotion",
      "outro-manager",
    ],
  },
];

/*
 * 기존 PPT 네 개의 슬라이드 정보를 생성합니다.
 *
 * 같은 원본에 연결된 소주제를 선택하면
 * 해당 원본 PPT의 슬라이드 전체가 하나의 묶음으로 사용됩니다.
 */
window.CIS_SLIDES = CIS_SOURCE_CONFIG.flatMap(source =>
  Array.from({ length: source.count }, (_, index) => {
    const number = index + 1;

    const id =
      `${source.prefix}-${String(number).padStart(2, "0")}`;

    const thumbnail = source.folder
      ? `/thumbnails/${source.folder}/슬라이드${number}.PNG`
      : `/thumbnails/${id}.PNG`;

    return {
      id,
      title: `${source.name} 슬라이드 ${number}`,
      thumbnail,
      topicIds: [...source.topicIds],
    };
  })
);

/*
 * 인트로 PPT 설정
 *
 * 각 소주제마다 기존 인트로 PPT 한 개 전체가 연결됩니다.
 */
const CIS_INTRO_CONFIG = [
  {
    prefix: "intro-career",
    name: "인트로 · 경력",
    folder: "인트로_01_경력",
    count: 5,
    topicId: "intro-career",
  },
  {
    prefix: "intro-new",
    name: "인트로 · 순수신인",
    folder: "인트로_02_순수신인",
    count: 5,
    topicId: "intro-new",
  },
  {
    prefix: "intro-sidejob",
    name: "인트로 · N잡러",
    folder: "인트로_03_N잡러",
    count: 5,
    topicId: "intro-sidejob",
  },
];

/*
 * 인트로 슬라이드를 기존 목록 뒤에 추가합니다.
 */
window.CIS_SLIDES.push(
  ...CIS_INTRO_CONFIG.flatMap(source =>
    Array.from({ length: source.count }, (_, index) => {
      const number = index + 1;

      return {
        id:
          `${source.prefix}-${String(number).padStart(2, "0")}`,

        title: `${source.name} ${number}`,

        thumbnail:
          `/thumbnails/${source.folder}/슬라이드${number}.PNG`,

        topicIds: [source.topicId],
      };
    })
  )
);