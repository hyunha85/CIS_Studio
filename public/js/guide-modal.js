(() => {
  // 문구와 강조 위치만 고치면 네 장에 바로 반영됩니다.
  // 위치는 실제 화면 이미지(516 × 645)의 픽셀 좌표입니다.
  const steps = [
    { title: "원하는 주제를 선택하세요", label: "소주제 선택", description: "대주제를 펼친 뒤\n필요한 소주제를 누릅니다.", note: "ⓘ 파란색 표시가 된 부분은\n이미 선택한 소주제입니다.", box: [147,172,188,192] },
    { title: "슬라이드를 크게 보세요", label: "슬라이드 클릭", description: "슬라이드를 클릭하면\n내용을 크게 볼 수 있습니다.", note: "ⓘ 좌우 버튼이나 키보드로\n다른 슬라이드도 볼 수 있습니다.", box: [21,211,88,261] },
    { title: "최종 CIS를 확인하세요", label: "최종본 미리보기", description: "선택한 슬라이드는\n최종본에 바로 반영됩니다.", note: "ⓘ 오른쪽 위에서 전체 장수도\n함께 확인할 수 있습니다.", box: [11,465,505,640] },
    { title: "PPT를 다운로드하세요", label: "최종 CIS 파일(PPT) 다운로드", description: "다운로드 버튼을 눌러\nPPT 파일을 저장합니다.", note: "ⓘ 다운로드한 PPT에서\n글꼴과 내용을 수정할 수 있습니다.", box: [437,607,499,631] }
  ];
  const $ = (id) => document.getElementById(id);
  const modal = $('guide-modal');
  let current = 0;
  let returnFocus = null;
  function render() {
    const item = steps[current];
    $('guide-step').textContent = `${String(current + 1).padStart(2,'0')} / ${String(steps.length).padStart(2,'0')}`;
    $('guide-heading').textContent = item.title;
    $('guide-label').textContent = item.label;
    $('guide-description').textContent = item.description;
    $('guide-note').textContent = item.note;
    const [x1,y1,x2,y2] = item.box;
    const spot = $('guide-spot');
    spot.style.left = `${x1 / 516 * 100}%`;
    spot.style.top = `${y1 / 645 * 100}%`;
    spot.style.width = `${(x2 - x1) / 516 * 100}%`;
    spot.style.height = `${(y2 - y1) / 645 * 100}%`;
    spot.dataset.step = String(current + 1).padStart(2,'0');
    $('guide-prev').disabled = current === 0;
    $('guide-next').textContent = current === steps.length - 1 ? '닫기' : '다음';
  }
  function close() {
    modal.hidden = true;
    document.body.classList.remove('guide-open');
    returnFocus?.focus();
  }
  $('how-to-trigger').addEventListener('click', () => {
    returnFocus = document.activeElement;
    current = 0;
    render();
    modal.hidden = false;
    document.body.classList.add('guide-open');
    $('guide-close').focus();
  });
  $('guide-close').addEventListener('click', close);
  $('guide-prev').addEventListener('click', () => { if (current > 0) { current--; render(); } });
  $('guide-next').addEventListener('click', () => { if (current < steps.length - 1) { current++; render(); } else close(); });
  modal.addEventListener('click', (event) => { if (event.target === modal) close(); });
  document.addEventListener('keydown', (event) => {
    if (modal.hidden) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft' && current > 0) { current--; render(); event.preventDefault(); }
    if (event.key === 'ArrowRight' && current < steps.length - 1) { current++; render(); event.preventDefault(); }
  });
})();
