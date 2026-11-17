function startApp() {
    const sourceCategories = window.CIS_CATEGORIES;
    const slides = window.CIS_SLIDES;
    // 원본 자료가 바뀌면 검색 본문도 갱신하세요. slides.js의 searchText/ocrText/text/keywords 필드를 우선 사용합니다.
    const embeddedSearchText = {"company-01": "회사소개 1", "company-02": "회사소개 2", "company-03": "회사소개 3", "education-01": "교육 1", "education-02": "교육 2", "education-03": "교육 3", "intro-career-01": "INCAR INTRO · 경력 FA 쌓아온 커리어, 더 크게 완성하다 경력 설계자를 위한 인카금융서비스", "intro-career-02": "WHY NOW 지금, 다시 인생을 설계해야 할 때 1 커리어의 정점에서 던지는 질문 지금의 조직에서 10년 후 내 모습이 선명하게 그려지시나요? 2 소득의 한계, 성장의 한계 정해진 틀 안에서는 노력한 만큼의 보상을 받기 어렵습니다. 3 전문성을 온전히 인정받는 무대 쌓아온 경험과 네트워크가 그대로 자산이 되는 곳이 필요합니다.", "intro-career-03": "REAL CONCERNS 이미 GA에 계신 분들의 솔직한 고민 기존의 고민 1,200 Rule의 압박 정착지원금 규제로 이직 시점마다 반복되는 조건 비교와 불확실성 인카의 접근 장기적 관점의 정착 지원 규정 안에서도 합리적이고 안정적인 정착 지원 체계를 설계합니다 기존의 고민 분급제로 인한 수수료 불안 분급 구조 때문에 수수료 지급 시점과 규모를 예측하기 어렵다는 목소리 인카의 접근 투명하고 예측 가능한 수수료 체계 실시간 조회·예측이 가능한 영업관리 시스템으로 흐름을 투명하게 확인", "intro-career-04": "WHY INCAR 경력 FA에게 인카가 다른 이유 1 안정성 코스닥 상장사로서의 재무 안정성과 투명한 지배구조를 바탕으로 합니다. 2 성장 인프라 체계적인 교육과 디지털 영업지원 시스템으로 전문성을 확장합니다. 3 네트워크 다양한 산업 출신 경력 FA들과 함께 시너지를 만들어갑니다.", "intro-career-05": "경력은 멈추지 않습니다, 무대만 바뀔 뿐입니다 인카금융서비스에서 새로운 항해를 시작하세요 담당자 상담 신청하기  →", "intro-new-01": "INCAR INTRO · 순수 신인 처음이지만, 제대로 시작하다 신입 FA를 위한 커리어 가이드", "intro-new-02": "WHY FA 사회초년생, 왜 FA를 선택해야 할까요? 1 노력이 그대로 보상이 되는 구조 정해진 연봉이 아닌, 내가 만든 성과가 곧 내 소득이 됩니다. 2 가장 빠르게 배우는 전문성 금융·보험 지식을 실전에서 가장 빠르게 익힐 수 있는 현장입니다. 3 나이와 상관없는 성장 속도 경력이 없어도 실력과 태도로 빠르게 인정받을 수 있습니다.", "intro-new-03": "CAREER PATH 보험을 넘어, Total 금융 전문가로 1 보험 전문가 생명·손해보험 전반의 기본기를 탄탄히 다지는 단계입니다. 2 자산관리 전문가 은퇴·상속증여 등 자산관리 영역으로 전문성을 확장합니다. 3 Total 금융 전문가 금융·세무·법률을 아우르며 고객의 전 생애를 함께합니다.", "intro-new-04": "GROWTH SYSTEM 인카의 체계적인 육성 시스템 1 단계별 교육과정 세일즈캠퍼스 등 성장 단계에 맞춘 체계적인 커리큘럼을 제공합니다. 2 1:1 멘토링 선배 FA와 함께하는 실전 코칭으로 시행착오를 줄입니다. 3 디지털 영업지원 데이터 기반의 스마트한 영업 도구로 성장 속도를 높입니다.", "intro-new-05": "당신의 첫 커리어, 인카에서 완성하세요 지금 바로 상담을 신청해보세요 신입 FA 상담 신청하기  →", "intro-sidejob-01": "INCAR INTRO · N잡러 본업은 지키고, 가능성은 더하다 투잡·N잡러를 위한 유연한 커리어", "intro-sidejob-02": "WHY N-JOB 왜 지금, N잡으로 FA일까요? 1 시간은 내가 정합니다 정해진 출퇴근 없이 본업 이후의 시간을 온전히 활용할 수 있습니다. 2 낮은 진입장벽, 높은 확장성 특별한 자격 없이 시작해 나만의 전문성을 쌓아갈 수 있는 구조입니다. 3 일한 만큼 쌓이는 두 번째 소득 고정비 부담 없이 순수하게 성과에 비례하는 추가 수입을 만듭니다.", "intro-sidejob-03": "REAL CONCERNS 본업과 병행, 정말 가능할까요? 기존의 걱정 출근해야만 일할 수 있지 않을까? 본업과 시간이 겹치면 활동이 어려울 것 같다는 걱정 인카의 답 언제 어디서든 가능한 디지털 영업 비대면 상담과 디지털 영업지원 시스템으로 시간과 장소의 제약을 줄입니다 기존의 걱정 혼자서는 막막하지 않을까? 체계 없이 혼자 시작하는 것에 대한 부담 인카의 답 실시간으로 확인하는 관리 시스템 계약·실적을 언제든 조회할 수 있는 영업관리 시스템과 지원 조직이 함께합니다", "intro-sidejob-04": "NEXT STEP 가볍게 시작해, 단계적으로 성장하다 1 가볍게 시작 부담 없이, 지금 가능한 만큼의 활동으로 시작합니다. 2 단계적으로 확장 성과에 따라 활동 범위와 소득이 자연스럽게 넓어집니다. 3 전업으로의 전환 준비가 되었을 때, 완전한 전문 FA로 전환할 수 있습니다.", "intro-sidejob-05": "지금의 삶은 그대로, 가능성만 더하세요 N잡러를 위한 인카금융서비스 상담 신청 N잡 시작 상담 신청하기  →", "intro-customer-01": "INCAR INTRO · 고객 나에게 꼭 맞는 보장을 찾다 고객을 위한 비교·상담 가이드", "intro-customer-02": "WHY COMPARE 보험, 왜 비교가 필요할까요? 1 수많은 상품, 하나의 정답은 없다 보험사마다, 상품마다 보장 범위와 조건이 모두 다릅니다. 2 정보의 비대칭 혼자 힘으로 모든 상품을 비교·분석하기엔 한계가 있습니다. 3 한 번의 선택이 오래 가는 결정 제대로 비교하지 않으면 후회는 훨씬 나중에 찾아옵니다.", "intro-customer-03": "OUR APPROACH 고객 중심의 상품 선택이란 일반적인 설계 한 회사의 상품 안에서만 고민 선택지가 제한적이라 최선의 조건인지 확인하기 어렵습니다 고객 중심 설계 다수 보험사 상품을 폭넓게 비교 여러 보험사의 상품을 한 자리에서 객관적으로 비교합니다 일반적인 설계 판매자 관점의 추천 특정 상품 판매를 전제로 한 상담이 될 수 있습니다 고객 중심 설계 고객 상황에 맞춘 객관적 제안 고객의 상황과 필요에 맞춘 맞춤형 제안을 제공합니다", "intro-customer-04": "OUR VALUE 인카의 비교·상담 가치 1 객관적인 비교 다양한 보험사의 상품을 한 자리에서 투명하게 비교합니다. 2 전문 FA의 상담 전문성을 갖춘 FA와의 1:1 맞춤 상담을 제공합니다. 3 가입 이후의 관리 계약 이후에도 이어지는 세심한 사후관리를 약속합니다.", "intro-customer-05": "나에게 맞는 보장, 지금 확인해보세요 인카금융서비스와 함께하는 보험 상담 보험 비교 상담 신청하기  →"};
    const extraSlideIds = [];
    let searchQuery = "";
    let searchMatches = [];


    const menu =
      document.querySelector("#topic-menu");

    const grid =
      document.querySelector("#slide-grid");

    const slideBrowser =
      document.querySelector("#slide-browser");

    const status =
      document.querySelector("#status");

    const downloadButton =
      document.querySelector("#download");

    const clearButton =
      document.querySelector("#clear-selection");

    const finalCisTrack =
      document.querySelector("#final-cis-track");

    const finalCisCount =
      document.querySelector("#final-cis-count");

    const finalCisEmpty =
      document.querySelector("#final-cis-empty");

    const finalCisSummary =
      document.querySelector("#final-cis-summary");

    const slidePreviewModal =
      document.querySelector("#slide-preview-modal");

    const slidePreviewImage =
      document.querySelector("#slide-preview-image");

    const slidePreviewTitle =
      document.querySelector("#slide-preview-title");

    const slidePreviewClose =
      document.querySelector("#slide-preview-close");

    const slidePreviewPosition =
      document.querySelector("#slide-preview-position");

    const slidePreviewPrev =
      document.querySelector("#slide-preview-prev");

    const slidePreviewNext =
      document.querySelector("#slide-preview-next");

    let slidePreviewReturnFocus = null;
    let slidePreviewSlides = [];
    let slidePreviewIndex = 0;
    let slidePreviewIsFinal = false;

    if (
      !Array.isArray(sourceCategories) ||
      !Array.isArray(slides)
    ) {
      status.textContent =
        "categories.js 또는 slides.js를 읽지 못했습니다.";

      return;
    }

    /*
     * 화면의 대주제와 소주제 이름·순서를 관리한다.
     * 첫 대주제는 categories.js의 기존 구성을 그대로 사용한다.
     * 기존 항목의 ID는 유지하고, 새 항목은 slides.js의 topicIds로 연결한다.
     * FA·GA 통합 자료는 개별 항목에 임의로 중복 연결하지 않는다.
     */
    const sourceCategoryById = new Map(
      sourceCategories.map(category => [category.id, category])
    );

    function childrenOf(...categoryIds) {
      return categoryIds.flatMap(categoryId =>
        sourceCategoryById.get(categoryId)?.children || []
      );
    }

    const categories = [
      {
        id: "audience",
        name: "누구에게 전달하시나요?",
        children: childrenOf("intro"),
      },
      {
        id: "company-story",
        name: "보험과 FA를 어떻게 소개할까요?",
        children: [
          { id: "understand-insurance", name: "보험업이란" },
          { id: "understand-fa", name: "FA란" },
          { id: "understand-ga", name: "GA란" },
          { id: "understand-history", name: "회사 소개" },
        ],
      },
      {
        id: "competitive-edge",
        name: "인카의 어떤 경쟁력을 강조할까요?",
        children: [
          { id: "strength-growth", name: "규모" },
          { id: "strength-trust", name: "대외 신뢰" },
          { id: "strength-subsidiary", name: "자회사" },
        ],
      },
      {
        id: "fa-support",
        name: "인카의 어떤 지원을 소개할까요?",
        children: [
          { id: "support-training", name: "교육" },
          { id: "support-product-strategy", name: "상품 전략" },
          { id: "support-db", name: "DB지원" },
          { id: "support-system", name: "영업관리 시스템" },
          { id: "support-promotion", name: "프로모션" },
        ],
      },
      {
        id: "additional-content",
        name: "어떤 내용을 더할까요?",
        children: [
          { id: "additional-key-message", name: "핵심 메시지" },
          { id: "outro-profile", name: "사업부장 소개" },
          { id: "stories-fa", name: "우수FA사례" },
        ],
      },
    ];

    function escapeHtml(value) {
      return String(value).replace(
        /[&<>"']/g,
        character => ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[character]
      );
    }

    /*
     * 선택된 소주제 ID 목록
     *
     * 배열 순서가 최종 PPT 묶음 순서가 된다.
     */
    const selectedTopicOrder = [];
    const finalGroupOrder = [];
    let finalGroupPointerMoved = false;
    let finalRemoveIntentId = null;
    let finalRemovePointer = null;

    /*
     * 최초 진입 시 모바일(700px 이하)은 모두 접고, 그 외에는 01번만 펼친다.
     * 이후 화면 크기가 바뀌어도 사용자가 변경한 펼침 상태를 유지한다.
     * 접기/펼치기는 선택 상태에 영향을 주지 않는다.
     */
    const expandedCategoryIds = new Set(
      window.matchMedia("(max-width: 700px)").matches ? [] : ["audience"]
    );

    /*
     * 현재 미리보기로 펼쳐진 소주제
     */
    let previewTopicId = categories[0]?.children[0]?.id || null;
    let initialPreviewOnly = true;

    /*
     * 드래그 중인 소주제
     */
    let draggedTopicId = null;

    let isDownloading = false;

    /*
     * 소주제 ID로 소주제 정보를 찾기 위한 목록
     */
    const topicById = new Map();

    categories.forEach(category => {
      category.children.forEach(topic => {
        topicById.set(topic.id, {
          ...topic,
          parentName: category.name,
        });
      });
    });

    /*
     * 특정 소주제에 연결된 전체 슬라이드 반환
     */
    function getTopicSlides(topicId) {
      return slides.filter(slide =>
        slide.topicIds.includes(topicId)
      );
    }

    /*
     * 현재 선택된 소주제인지 확인
     */
    function isTopicSelected(topicId) {
      return selectedTopicOrder.includes(
        topicId
      );
    }

    /*
     * 선택한 소주제의 슬라이드를
     * 묶음 순서대로 펼친다.
     *
     * 임시 데이터에서 같은 PPT가 여러 소주제에
     * 연결된 경우 동일 슬라이드는 한 번만 포함한다.
     */
    function getSelectedSlides() {
      const usedSlideIds = new Set();
      const result = [];

      selectedTopicOrder.forEach(topicId => {
        getTopicSlides(topicId).forEach(slide => {
          if (usedSlideIds.has(slide.id)) {
            return;
          }

          usedSlideIds.add(slide.id);
          result.push(slide);
        });
      });

      extraSlideIds.forEach(id => {
        const slide = slides.find(item => item.id === id);
        if (slide && !usedSlideIds.has(id)) { usedSlideIds.add(id); result.push(slide); }
      });
      return result;
    }

    /*
     * 카테고리 메뉴 생성
     */
    // Selection IDs are independent; a fresh selection always joins the end.
    let pendingTopicFeedback = null;
    function setTopicSelected(topicId, selected) {
      const index = selectedTopicOrder.indexOf(topicId);
      if (selected) {
        if (index >= 0) return;
        pendingTopicFeedback = { id: topicId, x: window.scrollX, y: window.scrollY };
        selectedTopicOrder.push(topicId);
        const previousGroupIndex = finalGroupOrder.indexOf(topicId);
        if (previousGroupIndex >= 0) finalGroupOrder.splice(previousGroupIndex, 1);
        finalGroupOrder.push(topicId);
      } else if (index >= 0) {
        if (pendingTopicFeedback?.id === topicId) pendingTopicFeedback = null;
        selectedTopicOrder.splice(index, 1);
      }
      setFinalRemoveIntent(null);
    }

    // Derived from the same allocated groups used by final preview and download.
    // No exclusion flags or ownership cache survive a selection change.
    function getTopicInclusion(topicId, groups) {
      const ownedCount = groups.find(group => group.id === topicId)?.slides.length || 0;
      const owners = isTopicSelected(topicId) ? groups
        .filter(group => group.id !== topicId)
        .map(group => ({ id: group.id, name: group.name,
          count: group.slides.filter(slide => slide.topicIds.includes(topicId)).length }))
        .filter(owner => owner.count > 0) : [];
      const sharedCount = owners.reduce((sum, owner) => sum + owner.count, 0);
      const name = topicById.get(topicId)?.name || topicId;
      const ownerNames = owners.map(owner => `“${owner.name}”(${owner.count}장)`).join(', ');
      const message = sharedCount === 0 ? '' : ownedCount === 0
        ? `선택된 “${name}”의 ${sharedCount}장은 모두 ${ownerNames} 그룹에 이미 포함되어 별도 카드는 만들지 않습니다. PPT에는 한 번만 포함됩니다.`
        : `“${name}”의 ${sharedCount}장은 ${ownerNames} 그룹에 이미 포함되어 있습니다. 최종본에는 나머지 ${ownedCount}장만 별도 카드로 표시합니다.`;
      return { ownedCount, sharedCount, owners, message };
    }
    function renderMenu(finalGroups = getSelectedFinalGroups()) {
      menu.innerHTML = categories
        .map((category, categoryIndex) => `
          <section
            class="topic-group ${
              expandedCategoryIds.has(category.id)
                ? "expanded"
                : ""
            }"
            data-category-id="${escapeHtml(category.id)}"
          >
            <div class="topic-row">
              <button
                type="button"
                class="main-topic-title"
                data-toggle-category-id="${escapeHtml(category.id)}"
                aria-expanded="${expandedCategoryIds.has(category.id)}"
                aria-label="${escapeHtml(category.name)} ${
                  expandedCategoryIds.has(category.id) ? "접기" : "펼치기"
                }"
              >
                <span class="main-topic-text"><span class="main-topic-number">${String(categoryIndex + 1).padStart(2, "0")}.</span><span class="main-topic-name">${escapeHtml(category.name)}</span></span>
                <span class="accordion-indicator" aria-hidden="true">${expandedCategoryIds.has(category.id) ? "− 접기" : "+ 펼쳐보기"}</span>
              </button>

              <div class="topic-options">
                ${category.children
                  .map(topic => {
                    const topicSlides =
                      getTopicSlides(topic.id);

                    const selected =
                      isTopicSelected(topic.id);
                    const initialActive = initialPreviewOnly && topic.id === previewTopicId;
                    const inclusion = getTopicInclusion(topic.id, finalGroups);

                    return `
                      <button
                        type="button"
                        class="topic-option ${
                          selected
                            ? "selected"
                            : ""
                        } ${
                          selected || initialActive
                            ? "previewing"
                            : ""
                        }"
                        data-topic-id="${escapeHtml(
                          topic.id
                        )}"
                        aria-pressed="${
                          selected
                        }"
                        ${inclusion.message ? `aria-describedby="topic-inclusion-${escapeHtml(topic.id)}" title="${escapeHtml(inclusion.message)}"` : ''}
                      >
                        <span class="topic-option-label">${escapeHtml(topic.name)}<small>(${topicSlides.length}장)</small></span>

                        <span
                          class="mobile-select-button"
                          data-mobile-select-topic-id="${escapeHtml(
                            topic.id
                          )}"
                        >
                          ${selected ? "선택됨" : "+ 선택"}
                        </span>
                      </button>
                    `;
                  })
                  .join("")}
              </div>
            </div>

            <div
              class="category-preview"
              data-category-preview-id="${escapeHtml(category.id)}"
            ></div>
          </section>
        `)
        .join("");
    }

    /*
     * 선택한 소주제의 슬라이드 미리보기
     *
     * 슬라이드별 체크박스는 표시하지 않는다.
     */
    function renderPreview(finalGroups = getSelectedFinalGroups()) {
      slideBrowser.hidden = true;
      grid.innerHTML = "";

      categories.forEach(category => {
        const preview = menu.querySelector(
          `[data-category-preview-id="${CSS.escape(category.id)}"]`
        );

        if (!preview) {
          return;
        }

        // Reverse a display-only copy; allocation and PPT ordering stay unchanged.
        const selectedTopics = [...selectedTopicOrder].reverse()
          .filter(topicId =>
            category.children.some(topic => topic.id === topicId)
          )
          .map(topicId => topicById.get(topicId))
          .filter(Boolean);

        if (initialPreviewOnly && previewTopicId && category.children.some(topic => topic.id === previewTopicId)) {
          const topic = topicById.get(previewTopicId);
          if (topic) selectedTopics.push(topic);
        }

        if (selectedTopics.length === 0) {
          preview.innerHTML = `<p class="category-preview-empty">소주제를 선택하면 해당 슬라이드가 이곳에 표시됩니다.</p>`;
          return;
        }

        const inclusionNotes = selectedTopics.map(topic => ({ topic,
          inclusion: getTopicInclusion(topic.id, finalGroups) })).filter(item => item.inclusion.message);
        const notices = inclusionNotes.length ? `<div class="topic-inclusion-notices" role="status">
          ${inclusionNotes.map(({ topic, inclusion }) => `<p class="topic-inclusion-note"
            id="topic-inclusion-${escapeHtml(topic.id)}" data-topic-inclusion="${escapeHtml(topic.id)}"
            data-owned-count="${inclusion.ownedCount}" data-shared-count="${inclusion.sharedCount}">${escapeHtml(inclusion.message)}</p>`).join('')}
        </div>` : '';
        preview.innerHTML = notices + selectedTopics
          .map(topic => {
            const topicSlides = getTopicSlides(topic.id);

            return `
              <section class="category-preview-group${pendingTopicFeedback?.id === topic.id ? ' is-new-selection' : ''}" data-selected-topic-id="${escapeHtml(topic.id)}">
                <div class="category-preview-head">
                  <strong>${escapeHtml(topic.name)}</strong>
                  <span class="slide-click-hint">*각 슬라이드를 클릭하면 크게 볼 수 있습니다</span>
                </div>

                <div
                  class="category-preview-track"
                  tabindex="0"
                  role="region"
                  aria-label="${escapeHtml(topic.name)} 슬라이드 미리보기"
                >
                  ${topicSlides
                    .map(slide => `
                      <article class="category-slide-card">
                        <img
                          class="slide-preview-trigger"
                          src="${escapeHtml(slide.thumbnail)}"
                          alt="${escapeHtml(slide.title)}"
                          loading="lazy"
                          tabindex="0"
                          role="button"
                          aria-label="${escapeHtml(slide.title)} 크게 보기"
                          data-slide-preview-src="${escapeHtml(slide.thumbnail)}"
                          data-slide-preview-title="${escapeHtml(slide.title)}"
                          data-slide-preview-slide-id="${escapeHtml(slide.id)}"
                          data-slide-preview-topic-id="${escapeHtml(topic.id)}"
                        >
                        <span>${escapeHtml(slide.title)}</span>
                      </article>
                    `)
                    .join("")}
                </div>
              </section>
            `;
          })
          .join("");
      });
      if (pendingTopicFeedback) {
        const { id, x, y } = pendingTopicFeedback;
        const item = menu.querySelector(`[data-selected-topic-id="${CSS.escape(id)}"]`);
        // Only scroll an actual vertical list scroller, never scrollIntoView.
        for (let parent = item?.parentElement; parent && parent !== document.body; parent = parent.parentElement) {
          if (parent.scrollHeight > parent.clientHeight && /^(auto|scroll)$/.test(getComputedStyle(parent).overflowY)) {
            parent.scrollTop = 0;
            break;
          }
        }
        if (window.scrollX !== x || window.scrollY !== y) window.scrollTo({ left: x, top: y, behavior: 'instant' });
        pendingTopicFeedback = null;
      }
    }

    /* 선택 상태에 맞춰 다운로드 버튼을 갱신한다. */
    function renderSelection() {
      const selectedSlides = getSelectedSlides();
      downloadButton.disabled = isDownloading || selectedSlides.length === 0;
      clearButton.disabled = isDownloading || selectedSlides.length === 0;
    }

    /*
     * 실제 병합 결과와 동일한 순서로
     * 최종 CIS 전체 슬라이드를 표시한다.
     */
    // Each selected slide belongs to one real subtopic; shared slides stay unique.
    function getSelectedFinalGroups() {
      const groups = new Map();
      getSelectedSlides().forEach(slide => {
        const topicId = selectedTopicOrder.find(id => slide.topicIds.includes(id))
          || slide.topicIds.find(id => topicById.has(id))
          || slide.topicIds[0] || "unclassified";
        if (!groups.has(topicId)) {
          const topic = topicById.get(topicId)
            || sourceCategories.flatMap(category => category.children).find(item => item.id === topicId);
          groups.set(topicId, { id: topicId, name: topic?.name || "미분류", slides: [] });
        }
        groups.get(topicId).slides.push(slide);
      });
      const order = finalGroupOrder.filter(id => groups.has(id));
      for (const id of groups.keys()) if (!order.includes(id)) order.push(id);
      finalGroupOrder.splice(0, finalGroupOrder.length, ...order);
      return order.map(id => groups.get(id));
    }

    function getFinalOrderedSlides() {
      return getSelectedFinalGroups().flatMap(group => group.slides);
    }

    function renderFinalCisGroups(groups = getSelectedFinalGroups()) {
      setFinalRemoveIntent(null);
      const count = groups.reduce((sum, group) => sum + group.slides.length, 0);
      finalCisCount.textContent = String(count);
      finalCisEmpty.hidden = count > 0;
      finalCisTrack.hidden = count === 0;
      finalCisSummary.hidden = count === 0;
      finalCisTrack.innerHTML = groups.map((group, index) => {
        const slide = group.slides[0];
        return `
          <article class="final-cis-slide final-group-card${group.slides.length > 1 ? ' has-multiple' : ''}${group.slides.length > 2 ? ' has-many' : ''}"
            data-final-group-id="${escapeHtml(group.id)}" aria-label="${escapeHtml(group.name)} ${group.slides.length}장">
            <div class="final-group-stack">
              <div class="final-cis-slide-image">
                <img class="slide-preview-trigger" src="${escapeHtml(slide.thumbnail)}"
                  alt="${escapeHtml(slide.title)}" loading="lazy" draggable="false" tabindex="0" role="button"
                  aria-label="${escapeHtml(group.name)} 선택 슬라이드 크게 보기"
                  data-slide-preview-src="${escapeHtml(slide.thumbnail)}"
                  data-slide-preview-title="${escapeHtml(slide.title)}"
                  data-slide-preview-slide-id="${escapeHtml(slide.id)}"
                  data-final-group-preview="${escapeHtml(group.id)}">
                <button type="button" class="final-group-remove" data-final-remove="${escapeHtml(group.id)}"
                  aria-label="${escapeHtml(group.name)} 그룹 선택 해제" title="그룹 선택 해제" ${isDownloading ? 'disabled' : ''}></button>
              </div>
            </div>
            <div class="final-cis-slide-copy">
              <strong title="${escapeHtml(group.name)} (${group.slides.length}장)">${escapeHtml(group.name)} (${group.slides.length}장)</strong>
            </div>
            <div class="final-group-actions">
              <button type="button" class="final-group-move" data-final-move="left"
                aria-label="${escapeHtml(group.name)} 앞으로 이동" ${index === 0 || isDownloading ? 'disabled' : ''}>←</button>
              <button type="button" class="final-group-handle" data-final-drag
                aria-label="${escapeHtml(group.name)} 첫 슬라이드 보기. 드래그, 좌우 방향키 또는 Home, End 키로 순서 변경" aria-haspopup="dialog"
                title="클릭: 첫 슬라이드 보기 / 드래그 또는 방향키: 순서 변경" ${isDownloading ? 'disabled' : ''}>⠿ 이동</button>
              <button type="button" class="final-group-move" data-final-move="right"
                aria-label="${escapeHtml(group.name)} 뒤로 이동" ${index === groups.length - 1 || isDownloading ? 'disabled' : ''}>→</button>
            </div>
          </article>`;
      }).join("");
      finalCisSummary.textContent = `선택한 슬라이드 총 ${count}장`;
    }

    function announceFinalGroup(message) {
      document.querySelector('#final-group-status').textContent = message;
    }

    function moveFinalGroup(id, targetIndex) {
      if (isDownloading) return;
      const groups = getSelectedFinalGroups();
      const fromIndex = finalGroupOrder.indexOf(id);
      if (fromIndex < 0 || targetIndex < 0 || targetIndex >= groups.length || fromIndex === targetIndex) return;
      finalGroupOrder.splice(fromIndex, 1);
      finalGroupOrder.splice(targetIndex, 0, id);
      renderFinalCisGroups();
      const handle = finalCisTrack.querySelector(`[data-final-group-id="${CSS.escape(id)}"] [data-final-drag]`);
      handle?.focus({ preventScroll: true });
      handle?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      announceFinalGroup(`${groups[fromIndex].name}, ${targetIndex + 1}번째로 이동했습니다.`);
    }

    /*
     * 전체 화면 갱신
     */
    function renderAll() {
      const finalGroups = getSelectedFinalGroups();
      renderMenu(finalGroups);
      renderPreview(finalGroups);
      renderSelection();
      renderFinalCisGroups(finalGroups);
      renderSearch();
    }

    function renderCurrentSlidePreview() {
      const slide = slidePreviewSlides[slidePreviewIndex];

      if (!slide) {
        return;
      }

      slidePreviewImage.src = slide.thumbnail;
      slidePreviewImage.alt = slide.title || "슬라이드 미리보기";
      slidePreviewTitle.textContent = slide.title || "슬라이드 미리보기";
      slidePreviewPosition.textContent =
        `${slidePreviewIndex + 1} / ${slidePreviewSlides.length}`;

      const hasMultipleSlides = slidePreviewSlides.length > 1;
      slidePreviewPrev.hidden = !hasMultipleSlides;
      slidePreviewNext.hidden = !hasMultipleSlides;
      slidePreviewPosition.hidden = !hasMultipleSlides;
      slidePreviewPrev.disabled = slidePreviewIsFinal && slidePreviewIndex === 0;
      slidePreviewNext.disabled = slidePreviewIsFinal && slidePreviewIndex === slidePreviewSlides.length - 1;
    }

    function moveSlidePreview(direction) {
      if (slidePreviewSlides.length <= 1) {
        return;
      }

      const nextIndex = slidePreviewIndex + direction;
      if (slidePreviewIsFinal && (nextIndex < 0 || nextIndex >= slidePreviewSlides.length)) return;
      slidePreviewIndex = (nextIndex + slidePreviewSlides.length) % slidePreviewSlides.length;

      renderCurrentSlidePreview();
    }

    function openSlidePreview(trigger, returnFocus = trigger) {
      const imageSource = trigger.dataset.slidePreviewSrc;
      const imageTitle = trigger.dataset.slidePreviewTitle || "슬라이드 미리보기";
      const slideId = trigger.dataset.slidePreviewSlideId;
      const topicId = trigger.dataset.slidePreviewTopicId;

      if (!imageSource) {
        return;
      }

      slidePreviewReturnFocus = returnFocus;
      slidePreviewIsFinal = Boolean(trigger.dataset.finalGroupPreview);
      slidePreviewSlides = slidePreviewIsFinal
        ? getFinalOrderedSlides()
        : trigger.dataset.searchPreview === "true"
        ? searchMatches
        : (topicId ? getTopicSlides(topicId) : []);

      if (slidePreviewSlides.length === 0) {
        slidePreviewSlides = [{
          id: slideId || "preview-slide",
          thumbnail: imageSource,
          title: imageTitle,
        }];
      }

      const requestedIndex = slidePreviewSlides.findIndex(
        slide => slide.id === slideId
      );

      slidePreviewIndex = requestedIndex >= 0 ? requestedIndex : 0;
      renderCurrentSlidePreview();
      slidePreviewModal.hidden = false;
      document.body.classList.add("slide-preview-open");
      slidePreviewClose.focus();
    }

    function closeSlidePreview() {
      if (slidePreviewModal.hidden) {
        return;
      }

      slidePreviewModal.hidden = true;
      slidePreviewImage.src = "";
      slidePreviewImage.alt = "";
      slidePreviewSlides = [];
      slidePreviewIndex = 0;
      slidePreviewIsFinal = false;
      document.body.classList.remove("slide-preview-open");

      if (slidePreviewReturnFocus?.isConnected) {
        slidePreviewReturnFocus.focus();
      }

      slidePreviewReturnFocus = null;
    }

    document.addEventListener("click", event => {
      const trigger = event.target.closest("[data-slide-preview-src]");

      if (trigger) {
        event.preventDefault();
        event.stopPropagation();
        openSlidePreview(trigger);
        return;
      }

      if (event.target === slidePreviewModal) {
        closeSlidePreview();
      }
    }, true);

    document.addEventListener("keydown", event => {
      if (
        (event.key === "Enter" || event.key === " ") &&
        event.target.matches("[data-slide-preview-src]")
      ) {
        event.preventDefault();
        openSlidePreview(event.target);
        return;
      }

      if (event.key === "Escape" && !slidePreviewModal.hidden) {
        closeSlidePreview();
        return;
      }

      if (event.key === "ArrowLeft" && !slidePreviewModal.hidden) {
        event.preventDefault();
        moveSlidePreview(-1);
        return;
      }

      if (event.key === "ArrowRight" && !slidePreviewModal.hidden) {
        event.preventDefault();
        moveSlidePreview(1);
      }
    });

    slidePreviewClose.addEventListener("click", closeSlidePreview);
    slidePreviewPrev.addEventListener("click", () => moveSlidePreview(-1));
    slidePreviewNext.addEventListener("click", () => moveSlidePreview(1));

    function showPreview(topicId) {
      if (!topicById.has(topicId)) {
        return;
      }

      previewTopicId = topicId;
      menu.querySelectorAll("[data-topic-id]").forEach(item => {
        item.classList.toggle(
          "previewing",
          item.dataset.topicId === topicId
        );
      });
      renderPreview();
    }

    /* PC: 마지막으로 가리킨 소주제의 미리보기를 계속 유지 */
    // 탭 전환은 클릭으로만 처리합니다. 마우스 이동으로 탭이 바뀌지 않습니다.

    /* 미리보기 좌우 버튼 */
    grid.addEventListener("click", event => {
      const removeButton = event.target.closest(
        "[data-summary-remove-topic-id]"
      );

      if (removeButton) {
        const topicId = removeButton.dataset.summaryRemoveTopicId;
        const index = selectedTopicOrder.indexOf(topicId);

        if (index !== -1) {
          setTopicSelected(topicId, false);
        }

        if (previewTopicId === topicId) {
          previewTopicId =
            selectedTopicOrder[Math.min(index, selectedTopicOrder.length - 1)] || null;
        }

        renderAll();
        return;
      }

      const moveButton = event.target.closest(
        "[data-summary-move-topic-id]"
      );

      if (moveButton) {
        const topicId = moveButton.dataset.summaryMoveTopicId;
        const currentIndex = selectedTopicOrder.indexOf(topicId);
        const nextIndex = moveButton.dataset.direction === "left"
          ? currentIndex - 1
          : currentIndex + 1;

        if (
          currentIndex >= 0 &&
          nextIndex >= 0 &&
          nextIndex < selectedTopicOrder.length
        ) {
          [selectedTopicOrder[currentIndex], selectedTopicOrder[nextIndex]] =
            [selectedTopicOrder[nextIndex], selectedTopicOrder[currentIndex]];
          renderAll();
        }
        return;
      }

      const summaryCard = event.target.closest(
        "[data-preview-summary-topic-id]"
      );

      if (summaryCard) {
        showPreview(
          summaryCard.dataset.previewSummaryTopicId
        );
        return;
      }

      const control = event.target.closest("[data-preview-scroll]");
      if (!control) {
        return;
      }

      const track = grid.querySelector(".topic-slides");
      if (!track) {
        return;
      }

      const direction = control.dataset.previewScroll === "left" ? -1 : 1;
      track.scrollBy({
        left: direction * Math.max(280, track.clientWidth * 0.8),
        behavior: "smooth",
      });
    });

    grid.addEventListener("keydown", event => {
      const summaryCard = event.target.closest("[data-preview-summary-topic-id]");
      if (!summaryCard || !["Enter", " "].includes(event.key)) {
        return;
      }

      event.preventDefault();
      showPreview(summaryCard.dataset.previewSummaryTopicId);
    });

    /* PC에서는 요약 카드를 끌어서도 묶음 순서를 변경할 수 있다. */
    grid.addEventListener("dragstart", event => {
      const card = event.target.closest("[data-summary-topic-id]");
      if (!card) {
        return;
      }

      draggedTopicId = card.dataset.summaryTopicId;
      card.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggedTopicId);
    });

    grid.addEventListener("dragover", event => {
      const card = event.target.closest("[data-summary-topic-id]");
      if (!card || !draggedTopicId) {
        return;
      }

      event.preventDefault();
      grid.querySelectorAll(".preview-summary-card.drag-over").forEach(item => {
        item.classList.remove("drag-over");
      });
      card.classList.add("drag-over");
    });

    grid.addEventListener("drop", event => {
      const target = event.target.closest("[data-summary-topic-id]");
      if (!target || !draggedTopicId) {
        return;
      }

      event.preventDefault();
      const targetTopicId = target.dataset.summaryTopicId;
      const fromIndex = selectedTopicOrder.indexOf(draggedTopicId);
      const targetIndex = selectedTopicOrder.indexOf(targetTopicId);

      if (fromIndex !== -1 && targetIndex !== -1 && fromIndex !== targetIndex) {
        selectedTopicOrder.splice(fromIndex, 1);
        selectedTopicOrder.splice(targetIndex, 0, draggedTopicId);
      }

      draggedTopicId = null;
      renderAll();
    });

    grid.addEventListener("dragend", () => {
      draggedTopicId = null;
      renderAll();
    });

    /*
     * 소주제 선택 및 해제
     */
    menu.addEventListener(
      "click",
      event => {
        const toggleButton =
          event.target.closest(
            "[data-toggle-category-id]"
          );

        if (toggleButton) {
          const categoryId =
            toggleButton.dataset
              .toggleCategoryId;

          if (
            expandedCategoryIds.has(
              categoryId
            )
          ) {
            expandedCategoryIds.delete(
              categoryId
            );
          } else {
            expandedCategoryIds.add(
              categoryId
            );
          }

          renderAll();
          return;
        }

        const button =
          event.target.closest(
            "[data-topic-id]"
          );

        if (!button) {
          return;
        }

        const topicId = button.dataset.topicId;
        initialPreviewOnly = false;
        const currentIndex =
          selectedTopicOrder.indexOf(
            topicId
          );

        setTopicSelected(topicId, currentIndex === -1);
        previewTopicId = selectedTopicOrder[selectedTopicOrder.length - 1] || null;
        renderAll();
      }
    );

    /*
     * 전체 선택 해제
     */
    clearButton.addEventListener(
      "click",
      () => {
        selectedTopicOrder.length = 0;
        extraSlideIds.length = 0;
        previewTopicId = null;
        status.textContent = "";

        renderAll();
      }
    );

    /*
     * 선택한 묶음을 PPT로 다운로드
     */
    downloadButton.addEventListener(
      "click",
      async () => {
        if (isDownloading) {
          return;
        }

        const ids =
          getFinalOrderedSlides().map(
            slide => slide.id
          );

        if (ids.length === 0) {
          return;
        }

        isDownloading = true;
        renderSelection();

        status.textContent =
          `${ids.length}장의 PPT를 만들고 있습니다…`;

        try {
          const response =
            await fetch(
              "/api/download",
              {
                method: "POST",

                headers: {
                  "Content-Type":
                    "application/json",
                },

                body: JSON.stringify({
                  ids,
                }),
              }
            );

          if (!response.ok) {
            const error =
              await response
                .json()
                .catch(() => ({}));

            throw new Error(
              error.message ||
              "다운로드에 실패했습니다."
            );
          }

          const blob =
            await response.blob();

          const url =
            URL.createObjectURL(blob);

          const link =
            document.createElement("a");

          link.href = url;
          link.download =
            "나만의_CIS.pptx";

          document.body.appendChild(link);
          link.click();
          link.remove();

          setTimeout(
            () =>
              URL.revokeObjectURL(url),
            60000
          );

          status.textContent =
            `${ids.length}장으로 만든 ` +
            "PPT를 다운로드했습니다.";

        } catch (error) {
          status.textContent =
            error.message;

        } finally {
          isDownloading = false;
          renderSelection();
        }
      }
    );

    /*
     * 기존 홈 버튼은 선택 초기화 기능으로 사용
     */
    const homeButton =
      document.querySelector(
        "#home-button"
      );

    if (homeButton) {
      homeButton.textContent =
        "선택 초기화";

      homeButton.addEventListener(
        "click",
        () => {
          selectedTopicOrder.length = 0;
        extraSlideIds.length = 0;
          previewTopicId = null;
          status.textContent = "";

          renderAll();
        }
      );
    }


    // 검색은 이미지에서 매번 인식하지 않고 미리 준비한 텍스트를 조회한다.
    const searchInput = document.querySelector('#cis-search-input');
    const searchResults = document.querySelector('#cis-search-results');
    const searchGrid = document.querySelector('#cis-search-grid');
    function normalizeSearch(value) {
      return String(value || '').normalize('NFKC').toLocaleLowerCase('ko').replace(/\s+/g, '');
    }
    function slideBody(slide) {
      return [slide.searchText ?? slide.ocrText ?? slide.text ?? embeddedSearchText[slide.id] ?? '',
        Array.isArray(slide.keywords) ? slide.keywords.join(' ') : (slide.keywords || '')].join(' ');
    }
    function slideTopicNames(slide) {
      return (slide.topicIds || []).map(id => topicById.get(id)?.name || '').filter(Boolean).join(' · ');
    }
    function renderSearch() {
      const active = !!searchQuery.trim();
      searchResults.hidden = !active;
      menu.hidden = active;
      document.querySelector('#home-button').hidden = active;
      if (!active) { searchMatches = []; searchGrid.innerHTML = ''; return; }
      const terms = searchQuery.trim().split(/\s+/).map(normalizeSearch).filter(Boolean);
      searchMatches = slides.filter(slide => {
        const haystack = normalizeSearch([slide.title, slideTopicNames(slide), slideBody(slide)].join(' '));
        return terms.every(term => haystack.includes(term));
      });
      document.querySelector('#cis-search-count').textContent = `검색 결과 ${searchMatches.length}장`;
      document.querySelector('#cis-search-empty').hidden = searchMatches.length > 0;
      const selectedIds = new Set(getSelectedSlides().map(slide => slide.id));
      searchGrid.innerHTML = searchMatches.map(slide => {
        const inTopic = selectedTopicOrder.some(id => (slide.topicIds || []).includes(id));
        const selected = selectedIds.has(slide.id);
        const matchedTopics = (slide.topicIds || []).map(id => topicById.get(id)).filter(Boolean);
        const parentNames = [...new Set(matchedTopics.map(topic => topic.parentName).filter(Boolean))].join(' · ');
        return `<article class="cis-result-card">
          <img src="${escapeHtml(slide.thumbnail)}" alt="${escapeHtml(slide.title)}" loading="lazy" tabindex="0" role="button"
            aria-label="${escapeHtml(slide.title)} 크게 보기" data-search-preview="true"
            data-slide-preview-src="${escapeHtml(slide.thumbnail)}" data-slide-preview-title="${escapeHtml(slide.title)}" data-slide-preview-slide-id="${escapeHtml(slide.id)}">
          <div class="cis-result-topic">
            ${parentNames ? `<span class="cis-result-parent">${escapeHtml(parentNames)}</span>` : ''}
            <span class="cis-result-subtopic">${escapeHtml(slideTopicNames(slide) || '전체 자료')}</span>
          </div>
          <strong>${escapeHtml(slide.title)}</strong>
          <span class="cis-result-hint">*각 슬라이드를 클릭하면 크게 볼 수 있습니다</span>
          <button type="button" class="cis-result-action" data-search-add="${escapeHtml(slide.id)}" aria-pressed="${selected}" ${inTopic ? 'disabled' : ''}>
            ${inTopic ? '✓ 선택한 소주제에 포함' : selected ? '✓ 추가됨 · 선택 해제' : '+ 이 슬라이드 추가'}
          </button>
        </article>`;
      }).join('');
    }
    document.querySelector('#cis-search-form').addEventListener('submit', event => {
      event.preventDefault(); searchQuery = searchInput.value; renderSearch();
      if (searchQuery.trim()) searchResults.scrollIntoView({ block: 'start', behavior: 'auto' });
    });
    searchInput.addEventListener('input', () => {
      if (!searchInput.value.trim()) { searchQuery = ''; renderSearch(); }
    });
    document.querySelector('#cis-search-clear').addEventListener('click', () => {
      searchQuery = ''; searchInput.value = ''; renderSearch(); searchInput.focus();
    });
    searchGrid.addEventListener('click', event => {
      const button = event.target.closest('[data-search-add]');
      if (!button || button.disabled || isDownloading) return;
      const id = button.dataset.searchAdd;
      const index = extraSlideIds.indexOf(id);
      if (index < 0) extraSlideIds.push(id); else extraSlideIds.splice(index, 1);
      renderAll();
      searchGrid.querySelector(`[data-search-add="${CSS.escape(id)}"]`)?.focus();
    });
    // Removal intent is keyed by topic ID, independently of selected slide data.
    function setFinalRemoveIntent(id) {
      finalRemoveIntentId = id;
      finalCisTrack.querySelectorAll('[data-final-remove]').forEach(button => {
        button.classList.toggle('is-removal-intent', button.dataset.finalRemove === id);
      });
    }

    finalCisTrack.addEventListener('pointermove', event => {
      if (event.pointerType === 'touch' || isDownloading) return;
      const previous = finalRemovePointer;
      finalRemovePointer = { x: event.clientX, y: event.clientY };
      // A rerender may put another button under a stationary pointer.
      if (previous && previous.x === event.clientX && previous.y === event.clientY) return;
      const button = event.target.closest('[data-final-remove]');
      setFinalRemoveIntent(button && !button.disabled ? button.dataset.finalRemove : null);
    });
    finalCisTrack.addEventListener('pointerdown', event => {
      finalRemovePointer = { x: event.clientX, y: event.clientY };
      const button = event.target.closest('[data-final-remove]');
      if (!isDownloading) setFinalRemoveIntent(button && !button.disabled ? button.dataset.finalRemove : null);
    });
    finalCisTrack.addEventListener('pointerleave', () => {
      if (!finalCisTrack.querySelector('[data-final-remove]:focus-visible')) setFinalRemoveIntent(null);
    });
    finalCisTrack.addEventListener('pointercancel', () => setFinalRemoveIntent(null));
    finalCisTrack.addEventListener('focusin', event => {
      const button = event.target.closest('[data-final-remove]');
      if (button?.matches(':focus-visible') && !isDownloading) setFinalRemoveIntent(button.dataset.finalRemove);
      else if (!button) setFinalRemoveIntent(null);
    });
    finalCisTrack.addEventListener('focusout', event => {
      const button = event.target.closest('[data-final-remove]');
      if (button?.dataset.finalRemove === finalRemoveIntentId) setFinalRemoveIntent(null);
    });
    finalCisTrack.addEventListener('click', event => {
      if (isDownloading) return;
      const card = event.target.closest('[data-final-group-id]');
      if (!card) return;
      const id = card.dataset.finalGroupId;
      const remove = event.target.closest('[data-final-remove]');
      if (remove) {
        const groups = getSelectedFinalGroups();
        const index = groups.findIndex(group => group.id === id);
        const group = groups[index];
        if (!group) return;
        const focusGroupId = groups[index + 1]?.id || groups[index - 1]?.id;
        setTopicSelected(id, false);
        const removedIds = new Set(group.slides.map(slide => slide.id));
        for (let i = extraSlideIds.length - 1; i >= 0; i--) {
          if (removedIds.has(extraSlideIds[i])) extraSlideIds.splice(i, 1);
        }
        if (previewTopicId === id) previewTopicId = selectedTopicOrder.at(-1) || null;
        initialPreviewOnly = false;
        renderAll();
        const focusHandle = focusGroupId
          ? finalCisTrack.querySelector(`[data-final-group-id="${CSS.escape(focusGroupId)}"] [data-final-drag]`)
          : null;
        (focusHandle || finalCisTrack.querySelector('[data-final-drag]')
          || menu.querySelector(`[data-topic-id="${CSS.escape(id)}"]`))?.focus({ preventScroll: true });
        announceFinalGroup(`${group.name} 그룹 선택을 해제했습니다.`);
        return;
      }
      const move = event.target.closest('[data-final-move]');
      if (move) {
        moveFinalGroup(id, finalGroupOrder.indexOf(id) + (move.dataset.finalMove === 'left' ? -1 : 1));
        return;
      }
      const jump = event.target.closest('[data-final-drag]');
      if (jump) {
        if (event.detail > 0 && finalGroupPointerMoved) {
          finalGroupPointerMoved = false;
          return;
        }
        finalGroupPointerMoved = false;
        const firstSlide = card.querySelector('[data-final-group-preview]');
        if (firstSlide) openSlidePreview(firstSlide, jump);
      }
    });

    finalCisTrack.addEventListener('keydown', event => {
      const handle = event.target.closest('[data-final-drag]');
      if (!handle || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const id = handle.closest('[data-final-group-id]').dataset.finalGroupId;
      const index = finalGroupOrder.indexOf(id);
      const target = event.key === 'Home' ? 0 : event.key === 'End' ? finalGroupOrder.length - 1
        : index + (event.key === 'ArrowLeft' ? -1 : 1);
      moveFinalGroup(id, target);
    });

    // Dedicated pointer handle keeps normal thumbnail swiping/track scrolling intact.
    let finalDrag = null;
    let finalDragFrame = 0;
    function updateFinalDrag() {
      if (!finalDrag) return;
      const state = finalDrag;
      if (state.moved) {
        const rect = finalCisTrack.getBoundingClientRect();
        const left = Math.max(0, rect.left), right = Math.min(innerWidth, rect.right);
        if (state.x < left + 36) finalCisTrack.scrollLeft -= 12;
        else if (state.x > right - 36) finalCisTrack.scrollLeft += 12;
        if (state.y >= rect.top - 40 && state.y <= rect.bottom + 40) {
          const cards = [...finalCisTrack.querySelectorAll('[data-final-group-id]')];
          const nearest = cards.reduce((best, card) => {
            const box = card.getBoundingClientRect();
            const distance = Math.abs(state.x - (box.left + box.width / 2));
            return !best || distance < best.distance ? { card, distance } : best;
          }, null);
          if (nearest) state.target = nearest.card.dataset.finalGroupId;
          cards.forEach(card => card.classList.toggle('is-drop-target', card.dataset.finalGroupId === state.target && state.target !== state.id));
        }
      }
      finalDragFrame = requestAnimationFrame(updateFinalDrag);
    }
    finalCisTrack.addEventListener('pointerdown', event => {
      const handle = event.target.closest('[data-final-drag]');
      if (!handle || isDownloading || event.button !== 0) return;
      finalGroupPointerMoved = false;
      event.stopPropagation();
      event.preventDefault();
      handle.focus({ preventScroll: true });
      finalDrag = { id: handle.closest('[data-final-group-id]').dataset.finalGroupId,
        target: handle.closest('[data-final-group-id]').dataset.finalGroupId,
        handle, pointerId: event.pointerId, startX: event.clientX, startY: event.clientY,
        x: event.clientX, y: event.clientY, moved: false };
      handle.setPointerCapture(event.pointerId);
      finalDragFrame = requestAnimationFrame(updateFinalDrag);
    });
    finalCisTrack.addEventListener('pointermove', event => {
      if (!finalDrag || event.pointerId !== finalDrag.pointerId) return;
      finalDrag.x = event.clientX;
      finalDrag.y = event.clientY;
      if (Math.hypot(event.clientX - finalDrag.startX, event.clientY - finalDrag.startY) > 6) {
        finalDrag.moved = true;
        finalGroupPointerMoved = true;
      }
      if (finalDrag.moved) {
        finalDrag.handle.closest('[data-final-group-id]').classList.add('is-reordering');
        event.preventDefault();
      }
    }, { passive: false });
    function finishFinalDrag(event, commit) {
      if (!finalDrag || event.pointerId !== finalDrag.pointerId) return;
      cancelAnimationFrame(finalDragFrame);
      if (commit && finalDrag.moved) {
        finalDrag.x = event.clientX;
        finalDrag.y = event.clientY;
        updateFinalDrag();
      }
      const state = finalDrag;
      finalDrag = null;
      cancelAnimationFrame(finalDragFrame);
      if (state.handle.hasPointerCapture(state.pointerId)) state.handle.releasePointerCapture(state.pointerId);
      finalCisTrack.querySelectorAll('.is-reordering,.is-drop-target').forEach(card => card.classList.remove('is-reordering', 'is-drop-target'));
      if (commit && state.moved) moveFinalGroup(state.id, finalGroupOrder.indexOf(state.target));
    }
    finalCisTrack.addEventListener('pointerup', event => finishFinalDrag(event, true));
    finalCisTrack.addEventListener('pointercancel', event => finishFinalDrag(event, false));
    finalCisTrack.addEventListener('lostpointercapture', event => finishFinalDrag(event, false));

    renderAll();
  }

  startApp();
