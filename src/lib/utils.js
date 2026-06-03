/**
 * Объединяет CSS-классы, отфильтровывая falsy-значения
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Форматирует число с разделителями тысяч
 */
export function formatNumber(num) {
  return num.toLocaleString('ru-RU')
}

/**
 * Интерполяция easeOut от 0 до 1
 */
export function easeOut(t) {
  return 1 - Math.pow(1 - t, 3)
}
