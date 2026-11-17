/* 카드 가로 마우스 드래그. 터치는 브라우저 기본 스크롤을 사용합니다. */
(() => {
  let drag = null;
  document.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    const track = e.target.closest('.topic-options, .category-preview-track, .final-cis-track');
    if (!track || track.scrollWidth <= track.clientWidth) return;
    drag = { track, startX:e.clientX, scrollLeft:track.scrollLeft, moved:false };
  });
  document.addEventListener('pointermove', e => {
    if (!drag || !(e.buttons & 1)) return;
    const delta = e.clientX - drag.startX;
    if (Math.abs(delta) > 6) drag.moved = true;
    if (!drag.moved) return;
    drag.track.scrollLeft = drag.scrollLeft - delta;
    drag.track.classList.add('cis-dragging');
    e.preventDefault();
  }, { passive:false });
  const end = () => {
    if (!drag) return;
    const moved = drag.moved;
    drag.track.classList.remove('cis-dragging');
    drag = null;
    if (moved) {
      suppressClick = true;
      // 일부 브라우저에서 드래그 후 click이 발생하지 않는 경우를 대비
      setTimeout(() => { suppressClick = false; }, 80);
    }
  };
  let suppressClick = false;
  document.addEventListener('pointerup', end);
  document.addEventListener('pointercancel', end);
  document.addEventListener('click', e => {
    if (!suppressClick) return;
    if (e.target.closest('.topic-options, .category-preview-track, .final-cis-track')) {
      e.preventDefault(); e.stopImmediatePropagation();
    }
    suppressClick = false;
  }, true);
})();
