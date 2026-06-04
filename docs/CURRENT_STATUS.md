# Current Status

## Текущий этап
**Этап 2 — Шапка + «Обо мне»** (готово ✅) → далее контент и остальные секции

Шапка (пилюля «Золотарёва Татьяна») и стеклянный блок «Обо мне» полностью отполированы и задеплоены на VDS.

---

## Что сделано (полная история)

### Этап 1 — Фундамент ✅
- Next.js 15, React 19, Tailwind CSS 3, Framer Motion 11
- CSS-переменные палитры, шрифты Playfair Display + Inter
- `npm run build` — успешно

### Этап 2 — Шапка + «Обо мне» ✅ (ГОТОВО)
- **Фото** (`public/photo.jpg`): sticky, mask-gradient снизу
- **Пилюля «Золотарёва Татьяна»** (`IntroSection.jsx`):
  - Режимы: `natural` (scroll=0) → `fixed` (скролл > 0)
  - Прилипание: `top: 16px` над фото
  - **Плавное отлипание** к блоку «Обо мне»: зона `HANDOFF_START` (88px) → интерполяция `top` 1:1 со скроллом; в конце `top = aboutTop` без режима `floating` (нет рывка вёрстки)
  - Типографика iOS: `.glass-ios-text` (SF Pro / system), жирность 700, контраст `.glass-text-contrast`
- **Блок «Обо мне»** (`AboutSection.jsx` → `AboutContent`):
  - iOS frosted glass: `.glass-panel` (`blur(28px) saturate(185%)`, градиентный блик)
  - Заголовок: Playfair italic, крупный (`glass-panel__title`)
  - Текст абзацев: тот же стиль, что пилюля (`.glass-ios-text`)
  - CTA-кнопки убраны (будут позже, другой вид)
- **Стекло:** `backdrop-filter` на отдельном `<div>`, не на `motion.div` с `transform`
- **ScrollToTop** — страница открывается с верха после F5
- Navbar убран; тема в Footer
- Удалены: `HeroSection.jsx`, `IntroHeader.jsx`

### Этап 3 — Services + Skills (полировка) ✅
- `ServiceCard`: Target / TrendingUp / Clapperboard / Palette + hover
- `SkillsSection`: Figma, Adobe-бейджи, CapCut

### Этап 4 — Cases (частично) ✅
- `MetricCounter` + `CasesSection`
- [ ] `public/cases/lightstar-analytics.png`

### Этап 5 — Contact + Деплой (частично) ✅
- `ContactSection`, VDS: http://109.172.94.218/
- [ ] EmailJS ключи, тест формы

---

## Файловая структура (актуальная)

```
src/
├── app/
│   ├── page.jsx
│   ├── layout.jsx        ← ScrollToTop, шрифты
│   └── globals.css       ← .glass-*, .intro-*, iOS glass
├── components/
│   ├── ScrollToTop.jsx
│   ├── sections/
│   │   ├── IntroSection.jsx     ← пилюля + фото + #about
│   │   ├── AboutSection.jsx     ← glass «Обо мне»
│   │   ├── ServicesSection.jsx
│   │   ├── CasesSection.jsx
│   │   ├── SkillsSection.jsx
│   │   └── ContactSection.jsx
│   ├── ui/ …
│   ├── layout/Footer.jsx
│   └── providers/ThemeProviders.jsx
├── lib/ …
└── content/data.js
```

---

## Деплой

| Среда | Адрес |
|-------|-------|
| VDS | http://109.172.94.218/ |
| GitHub | https://github.com/andyluvd/tanya-portfolio |

```bash
export PATH="/Users/andre/ОФЛАЙН/1project/.tools/node/bin:$PATH"
npm run build && rsync -avz --delete out/ vds-portfolio:/var/www/tanya/
```

**Точки отката (git):**
| Хеш | Описание |
|-----|----------|
| `c73200e` | Стекло intro v1, полировка секций |
| *(после коммита)* | ✅ Шапка + «Обо мне» готовы |

---

## Что делать дальше

### Приоритет 1 — Контент
- [ ] `lightstar-analytics.png`
- [ ] EmailJS

### Приоритет 2 — Секции
- [ ] CasesSection: скриншот
- [ ] CTA в «Обо мне» (новый дизайн, позже)

### Приоритет 3 — Полировка
- [ ] Адаптивность на телефоне
- [ ] Vercel (опционально)

---

## Известные решения

- Пилюля: `getFixedTop(aboutTop)` — отлипание без `floating`
- `HANDOFF_START = 88`, `STICK_TOP = 16`
- Стекло: `.intro-header__glass`, `.glass-panel`, `.glass-text-contrast`, `.glass-ios-text`
- `AboutContent` без `<section>` — `#about` в `IntroSection`
- `ScrollToTop` + `history.scrollRestoration = 'manual'`

## Баги и блокеры
- Переключатель темы только в Footer
