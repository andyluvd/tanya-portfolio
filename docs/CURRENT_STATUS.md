# Current Status

## Текущий этап
**Этап 3 — Секции ниже intro + услуги по скроллу** (готово ✅) → далее контент (кейс, EmailJS)

Готовы: стеклянный стиль секций, карточки услуг с **scroll-linked** подсветкой (пик в центре экрана). Шапка и «Обо мне» без изменений по UX.

---

## Что сделано (полная история)

### Этап 1 — Фундамент ✅
- Next.js 15, React 19, Tailwind CSS 3, Framer Motion 11
- CSS-переменные палитры, шрифты Playfair Display + Inter
- `npm run build` — успешно

### Этап 2 — Шапка + «Обо мне» ✅
- **Фото** (`public/photo.jpg`): sticky, mask-gradient, fade + noise по скроллу (`IntroSection`)
- **Пилюля «Золотарёва Татьяна»**: `natural` → `fixed`, `getFixedTop(aboutTop)`, `HANDOFF_START = 88`, `STICK_TOP = 16`
- **«Обо мне»**: `.glass-panel`, Playfair italic, `.glass-ios-text`, без CTA
- Стекло: `backdrop-filter` не на `motion` с `transform`
- **ScrollToTop**, Navbar убран, тема в Footer
- Удалены: `HeroSection.jsx`, `IntroHeader.jsx`
- Стекло intro: `blur(12px)`, прозрачная заливка (см. `globals.css`)

### Этап 3 — Секции + услуги по скроллу ✅ (ГОТОВО)
- **Единый стиль** (как пилюля + «Обо мне»): `SectionHeading`, `.glass-panel`, `.glass-card`, `.glass-pill`, `.glass-on-solid`
- **Services, Skills, Cases, Contact, Footer** — стекло / типографика intro
- **Услуги — подсветка от скролла** (не hover, не таймер):
  - `src/lib/servicesScrollProgress.js` — `getCardGlowFromViewportCenter()`
  - **100% glow**, когда **центр карточки** в **центре viewport**
  - Затухание симметрично при скролле вверх/вниз (smoothstep, falloff ~44% vh)
  - `ServiceCard`: prop `glow` 0…1, стили через `style` (без lag transition)
  - Визуал карточки: `surface` + accent (как до стекла), цвета подсветки прежние
- **Skills**: glass-pill теги, glass-карточки ИИ
- **Cases / Contact**: glass-карточки, форма в glass-panel

### Этап 4 — Cases (частично) ✅
- `MetricCounter` + `CasesSection` (glass-метрики)
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
│   ├── layout.jsx
│   └── globals.css       ← .glass-*, .section-*, .service-card
├── components/
│   ├── ScrollToTop.jsx
│   ├── sections/
│   │   ├── IntroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx   ← scroll → glows[]
│   │   ├── CasesSection.jsx
│   │   ├── SkillsSection.jsx
│   │   └── ContactSection.jsx
│   ├── ui/
│   │   ├── ServiceCard.jsx       ← glow 0…1
│   │   ├── SectionHeading.jsx
│   │   ├── MetricCounter.jsx
│   │   └── …
│   └── layout/Footer.jsx
├── lib/
│   ├── servicesScrollProgress.js ← триггер подсветки услуг
│   └── …
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
| `2249558` | Шапка + «Обо мне» готовы |
| `24dc784` | ✅ Секции в стекле + услуги scroll-glow |

---

## Что делать дальше

### Приоритет 1 — Контент
- [ ] `lightstar-analytics.png`
- [ ] EmailJS

### Приоритет 2
- [ ] CTA в «Обо мне» (новый дизайн)
- [ ] Адаптивность на телефоне

### Приоритет 3
- [ ] Vercel (опционально)

---

## Известные решения

- **Услуги:** `glow = smoothstep(1 - |cardCenter - vh/2| / falloff)`; rAF на `scroll` + `resize`
- **Пилюля:** `getFixedTop(aboutTop)`, без `floating`
- **Стекло:** `.intro-header__glass`, `.glass-panel`, `blur(12px)`, `.glass-on-solid` для секций на фоне
- **ScrollToTop** + `history.scrollRestoration = 'manual'`

## Баги и блокеры
- Переключатель темы только в Footer
