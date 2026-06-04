const clamp = (v, min, max) => Math.min(max, Math.max(min, v))

/** Плавное 0→1→0 от расстояния до центра экрана */
function smoothstep(t) {
  const x = clamp(t, 0, 1)
  return x * x * (3 - 2 * x)
}

/**
 * Подсветка карточки по положению относительно центра viewport.
 * 100% — центр карточки в середине экрана; 0% — далеко вверх/вниз или вне экрана.
 */
export function getCardGlowFromViewportCenter(rect, vh) {
  if (!rect || rect.height <= 0) return 0
  if (rect.bottom <= 0 || rect.top >= vh) return 0

  const cardCenterY = rect.top + rect.height / 2
  const viewportCenterY = vh / 2
  const distance = Math.abs(cardCenterY - viewportCenterY)

  const falloff = vh * 0.44
  return smoothstep(1 - distance / falloff)
}
