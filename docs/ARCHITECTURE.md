# Architecture — компоненты и структура

## Файловая структура

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.jsx
│   │   ├── layout.jsx
│   │   └── globals.css       ← glass, section-*, service-card
│   ├── components/
│   │   ├── ScrollToTop.jsx
│   │   ├── sections/
│   │   │   ├── IntroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── CasesSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   └── ContactSection.jsx
│   │   ├── ui/
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── MetricCounter.jsx
│   │   │   ├── AnimatedSection.jsx
│   │   │   └── ThemeToggle.jsx
│   │   └── layout/
│   │       ├── Footer.jsx
│   │       └── FooterThemeToggle.jsx
│   ├── lib/
│   │   ├── servicesScrollProgress.js  ← glow от центра viewport
│   │   ├── utils.js
│   │   └── emailjs.js
│   └── content/
│       └── data.js
├── docs/
├── public/
│   ├── photo.jpg
│   └── cases/lightstar-analytics.png  ← TODO
└── …
```

## Компоненты — подробное описание

### `IntroSection.jsx` (client) — шапка ✅
Пилюля `natural` → `fixed`, `getFixedTop(aboutTop)`, sticky-фото с fade/noise по скроллу.

### `AboutSection.jsx` → `AboutContent` ✅
Glass-карточка «Обо мне»; fade только `opacity` на обёртке.

### Стили стекла (`globals.css`)
| Класс | Назначение |
|-------|------------|
| `.intro-header__glass` | Пилюля (на фото) |
| `.glass-panel` | Базовое стекло: blur, блик `::before` |
| `.glass-card` / `.glass-pill` / `.glass-field` | Секции ниже intro |
| `.glass-card` / `.glass-pill` | Только скругление и layout; blur/тени из `.glass-panel` |
| `.glass-ios-text` | SF Pro / system |
| `.section-title` / `.section-eyebrow` | Заголовки секций (Playfair italic) |
| Параметры | `blur(12px)`, лёгкая прозрачная заливка |

### `ServicesSection.jsx` ✅
**Ответственность:** сетка 4 услуг, **подсветка привязана к скроллу**.
**Поток:**
1. `gridRef` → `children[i].getBoundingClientRect()`
2. `getCardGlowFromViewportCenter(rect, vh)` → `glows[i]` ∈ [0, 1]
3. `requestAnimationFrame` на `scroll` / `resize`
**Нет:** hover, таймеров, `whileInView` stagger для glow.

### `servicesScrollProgress.js`
```js
// Центр карточки совпадает с центром экрана → glow = 1
// Дальше от центра (вверх или вниз) → smoothstep к 0
getCardGlowFromViewportCenter(rect, vh)
```

### `ServiceCard.jsx` ✅
**Props:** `{ icon, title, desc, glow?: number }` — `glow` 0…1.
**Визуал:** `bg-surface`, serif title, accent hover-цвета через интерполяцию `glow`.
**Анимация:** `motion.div` + `style={…}` (без `transition` delay — 1:1 со скроллом).
**Эффекты при glow=1:** border accent, shadow, top line, icon fill, `y: -6px`.

### `SectionHeading.jsx`
Eyebrow + Playfair title + optional subtitle; fade при `whileInView`.

### `CasesSection.jsx` / `SkillsSection.jsx` / `ContactSection.jsx`
Glass-карточки, `SectionHeading`, stagger opacity (без transform на glass).

### `MetricCounter.jsx`
Счётчик 0→value при `useInView`; стили `.glass-metric__*`.

### `Footer.jsx`
Имя курсивом, контакты в `glass-pill`.

### `ScrollToTop.jsx`
`scrollRestoration = manual`, scroll to top on load.

## Поток данных
Тексты в `src/content/data.js`. Секции импортируют данные сами.

## Анимации — правила
- **Услуги:** scroll progress = `glow`, не Framer `animate` с duration
- **Секции:** Framer fade/stagger по opacity где нет `backdrop-filter` на том же node
- **Intro glass:** не вешать `transform` на элемент с `backdrop-filter`
- `prefers-reduced-motion`: учитывать при расширении (услуги пока без отдельной ветки)
