export const siteData = {
  name: 'Татьяна Золотарева',
  role: 'SMM-специалист',
  niche: 'Освещение и интерьер',
  contacts: {
    phone: '+7 995 300-67-27',
    telegram: 'https://t.me/tanyaaaa1111',
    telegramHandle: '@tanyaaaa1111',
    email: 'zolotarevatana85@gmail.com',
  },
}

export const heroData = {
  title: 'Татьяна Золотарева',
  subtitle: 'SMM-специалист в нише освещения и интерьера',
  description:
    'Создаю контент-стратегии, которые привлекают B2B-клиентов. Работаю с производителями светильников, дизайн-студиями и интерьерными брендами.',
  ctaPrimary: {
    label: 'Написать в Telegram',
    href: 'https://t.me/tanyaaaa1111',
  },
  ctaSecondary: {
    label: 'Посмотреть кейсы',
    href: '#cases',
  },
}

export const aboutData = {
  paragraphs: [
    'Каждый проект — это творческий поиск. Я глубоко погружаюсь в эстетику бренда, изучаю аудиторию и создаю контент, который вызывает эмоциональный отклик. Не шаблоны — живые истории.',
    'Слежу за трендами в нише освещения и интерьера постоянно. Pinterest, Behance, европейские бренды — я знаю, что работает сегодня и что будет работать завтра. Это даёт клиентам конкурентное преимущество.',
    'Берусь за проект — довожу до результата. Цифры, дедлайны, прозрачная коммуникация. Кейс Pinterest Lightstar: с нуля до 11 800 показов в месяц за первый квартал работы.',
    'Постоянно развиваюсь: Midjourney, Runway, ChatGPT — использую ИИ-инструменты для ускорения работы без потери качества. Ваш контент всегда будет актуальным и технологичным.',
  ],
}

export const servicesData = [
  {
    icon: 'strategy',
    title: 'Стратегия и контент-план',
    desc: 'Цели, форматы, рубрики, тексты — полный план на месяц вперёд.',
  },
  {
    icon: 'analytics',
    title: 'Аналитика и рост',
    desc: 'Метрики, оптимизация, A/B-тестирование. Результат в цифрах.',
  },
  {
    icon: 'video',
    title: 'Видео и Reels',
    desc: 'Монтаж коротких видео под бизнес-задачи бренда.',
  },
  {
    icon: 'visual',
    title: 'Визуал и оформление',
    desc: 'Единая лента, сторис, рилсы — эстетика премиум-бренда.',
  },
]

export const casesData = {
  title: 'Кейс: Pinterest Lightstar',
  description:
    'Производитель светильников Lightstar — ведение Pinterest с нуля. За первый квартал работы достигнуты следующие показатели:',
  metrics: [
    { value: 11800, label: 'показов в месяц', suffix: '' },
    { value: 363, label: 'вовлечений', suffix: '' },
    { value: 37, label: 'сохранений', suffix: '' },
    { value: 7500, label: 'общая аудитория', suffix: '' },
  ],
  image: {
    src: '/cases/lightstar-analytics.png',
    alt: 'Аналитика Pinterest Lightstar',
  },
}

export const skillsData = {
  tools: [
    { name: 'Figma', category: 'design' },
    { name: 'Adobe Illustrator', category: 'design' },
    { name: 'Photoshop', category: 'design' },
    { name: 'Premiere Pro', category: 'video' },
    { name: 'CapCut', category: 'video' },
  ],
  ai: [
    { name: 'Midjourney', desc: 'Генерация визуалов' },
    { name: 'ChatGPT', desc: 'Копирайтинг и брейнсторм' },
    { name: 'Runway', desc: 'Видео из изображений' },
  ],
  platforms: [
    'Instagram',
    'Pinterest',
    'ВКонтакте',
    'Telegram',
  ],
}
