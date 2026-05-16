import { 
  Monitor, Palette, Layers, Smartphone, 
  Code, Shield, Globe, 
  BarChart3, PenTool, Lightbulb, Headphones,
  type LucideIcon 
} from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  icon: LucideIcon;
  features: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  benefits: {
    value: string;
    label: string;
  }[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "web-design",
    title: "Веб-дизайн",
    category: "Дизайн",
    categorySlug: "design",
    description: "Профессиональный веб-дизайн в Ростове-на-Дону. Создаём сайты, которые не только выглядят современно, но и решают задачи бизнеса: привлекают трафик, конвертируют посетителей в клиентов и увеличивают средний чек.",
    icon: Monitor,
    features: [
      { title: "Лендинги", description: "Продающие одностраничные сайты с чёткой структурой и мощным оффером для Яндекс.Директ.", icon: Layers },
      { title: "Корпоративные сайты", description: "Многостраничные порталы с удобной навигацией, каталогами и интеграцией 1С/CRM.", icon: Globe },
      { title: "Адаптивный дизайн", description: "Идеальное отображение на мобильных, планшетах и десктопах. Mobile-first подход.", icon: Smartphone },
      { title: "Дизайн-системы", description: "Масштабируемые UI-киты и гайдлайны для быстрого развития продукта.", icon: Palette },
    ],
    process: [
      { step: "01", title: "Исследование", description: "Изучаем бизнес, целевую аудиторию и конкурентов в вашей нише." },
      { step: "02", title: "Прототипирование", description: "Создаём структуру страниц (wireframes) для безупречной навигации." },
      { step: "03", title: "Визуальный дизайн", description: "Разрабатываем макеты в фирменном стиле с акцентом на конверсию." },
    ],
    benefits: [
      { value: "47%", label: "Средний рост конверсии" },
      { value: "2 сек", label: "Среднее время оценки дизайна" },
      { value: "100%", label: "Адаптивность под все экраны" },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Дизайн",
    category: "Дизайн",
    categorySlug: "design",
    description: "Проектирование интерфейсов (UI/UX) в Ростове-на-Дону. Делаем сложные продукты простыми для пользователя. Каждый клик продуман, каждый экран ведёт к целевому действию.",
    icon: Palette,
    features: [
      { title: "CJM и User Flow", description: "Картируем путь пользователя от первого контакта до покупки.", icon: Layers },
      { title: "Wireframing", description: "Низко- и высокодетальные прототипы для тестирования бизнес-логики.", icon: PenTool },
      { title: "Юзабилити-аудит", description: "Находим барьеры в текущем интерфейсе, из-за которых вы теряете клиентов.", icon: Lightbulb },
      { title: "Интерактивные прототипы", description: "Кликабельные модели для тестирования до того, как написана первая строчка кода.", icon: Smartphone },
    ],
    process: [
      { step: "01", title: "Аналитика", description: "Формируем портрет пользователя и определяем pain points." },
      { step: "02", title: "UX Проектирование", description: "Выстраиваем логику, структуру и сценарии взаимодействия." },
      { step: "03", title: "UI Дизайн", description: "Одеваем логику в эстетичную визуальную оболочку." },
    ],
    benefits: [
      { value: "3x", label: "Рост скорости взаимодействия" },
      { value: "60%", label: "Снижение процента отказов" },
      { value: "NPS +40", label: "Рост лояльности пользователей" },
    ],
  },
  {
    slug: "branding",
    title: "Брендинг",
    category: "Дизайн",
    categorySlug: "design",
    description: "Разработка фирменного стиля и брендинг в Ростове-на-Дону. Создаём визуальную идентичность, которая выделяет вас среди конкурентов и делает бренд запоминающимся.",
    icon: Layers,
    features: [
      { title: "Логотип и фирменный знак", description: "Уникальный символ, который становится лицом компании на рынке.", icon: Palette },
      { title: "Брендбук", description: "Полное руководство по использованию фирменного стиля для маркетологов и дизайнеров.", icon: Globe },
      { title: "Айдентика", description: "Дизайн деловых носителей: визитки, пакеты, мерч, сувениры.", icon: Monitor },
      { title: "Нейминг и слоган", description: "Подбираем название и фразу, отражающие суть бренда.", icon: PenTool },
    ],
    process: [
      { step: "01", title: "Бриф и интервью", description: "Погружаемся в ценности, миссию и характер компании." },
      { step: "02", title: "Концепция", description: "Разрабатываем 2-3 визуальных направления для выбора." },
      { step: "03", title: "Гайдлайны", description: "Упаковываем выбранную концепцию в правила бренда." },
    ],
    benefits: [
      { value: "Top-of-mind", label: "Узнаваемость без контекста" },
      { value: "+35%", label: "Рост премиальности восприятия" },
      { value: "Навсегда", label: "Срок службы качественного бренда" },
    ],
  },
  {
    slug: "mobile-design",
    title: "Мобильный дизайн",
    category: "Дизайн",
    categorySlug: "design",
    description: "Дизайн мобильных приложений для iOS и Android в Ростове-на-Дону. Учитываем платформенные гайдлайны Apple и Google, проектируем под пальцы, а не под мышку.",
    icon: Smartphone,
    features: [
      { title: "iOS (Human Interface)", description: "Нативный дизайн под экосистему Apple с фокусом на минимализм.", icon: Smartphone },
      { title: "Android (Material)", description: "Дизайн по гайдлайнам Google с привычными паттернами.", icon: Smartphone },
      { title: "Кросс-платформенный", description: "Единый интерфейс на базе React Native или Flutter.", icon: Layers },
      { title: "Микровзаимодействия", description: "Анимации и тактильная обратная связь, создающие вау-эффект.", icon: Lightbulb },
    ],
    process: [
      { step: "01", title: "User Stories", description: "Описываем сценарии использования в формате «Как пользователь, я хочу...»." },
      { step: "02", title: "Макеты экранов", description: "Проектируем все состояния: от пустого экрана до ошибки загрузки." },
      { step: "03", title: "Прототип", description: "Связываем экраны в кликабельный прототип для тестирования." },
    ],
    benefits: [
      { value: "0.1 сек", label: "Время отклика интерфейса" },
      { value: "44pt", label: "Минимальный размер зоны нажатия" },
      { value: "5 звезд", label: "Рейтинг в App Store за UX" },
    ],
  },
  {
    slug: "frontend",
    title: "Фронтенд-разработка",
    category: "Разработка",
    categorySlug: "development",
    description: "Фронтенд-разработка на React и Next.js в Ростове-на-Дону. Превращаем дизайн в быстрый, отзывчивый и живой интерфейс с молниеносной загрузкой (Core Web Vitals 90+).",
    icon: Code,
    features: [
      { title: "React / Next.js", description: "Современные фреймворки для сложных SPA и SSR приложений.", icon: Code },
      { title: "Анимации (GSAP, Framer)", description: "Плавные и сложные анимации, которые не тормозят сайт.", icon: Palette },
      { title: "Адаптивная вёрстка", description: "Пиксель-перфект на всех разрешениях экрана.", icon: Monitor },
      { title: "Оптимизация скорости", description: "Настройка Core Web Vitals для высоких позиций в Google.", icon: BarChart3 },
    ],
    process: [
      { step: "01", title: "Настройка окружения", description: "Инициализация проекта, CI/CD, линтеры и форматтеры." },
      { step: "02", title: "Вёрстка и компоненты", description: "Разбиение макетов на переиспользуемые компоненты." },
      { step: "03", title: "Интеграция и логика", description: "Подключение API, стейт-менеджмент, тестирование." },
    ],
    benefits: [
      { value: "90+", label: "Оценка Google PageSpeed" },
      { value: "< 1 сек", label: "Время загрузки контента" },
      { value: "0", label: "Кроссбраузерных багов" },
    ],
  },
  {
    slug: "backend",
    title: "Бэкенд-разработка",
    category: "Разработка",
    categorySlug: "development",
    description: "Надёжная бэкенд-разработка в Ростове-на-Дону. Создаём серверный фундамент: API, базы данных, интеграции с CRM. Ваш продукт выдержит любую нагрузку.",
    icon: Shield,
    features: [
      { title: "Node.js / Python", description: "Выбираем язык под задачу: высоконагруженные системы или AI-интеграции.", icon: Code },
      { title: "REST / GraphQL API", description: "Проектируем чистый и быстрый интерфейс обмена данными.", icon: Globe },
      { title: "Базы данных", description: "PostgreSQL, MongoDB, Redis. Проектирование архитектуры данных.", icon: Layers },
      { title: "Безопасность", description: "Защита от SQL-инъекций, XSS, CSRF. Шифрование и аутентификация.", icon: Shield },
    ],
    process: [
      { step: "01", title: "Архитектура", description: "Проектируем структуру сервера, БД и потоки данных." },
      { step: "02", title: "Разработка API", description: "Пишем эндпоинты, покрываем логику автотестами." },
      { step: "03", title: "Деплой и нагрузка", description: "Настраиваем сервера, балансировщики и мониторинг." },
    ],
    benefits: [
      { value: "99.9%", label: "Uptime доступности" },
      { value: "10K+", label: "RPS (запросов в секунду)" },
      { value: "ISO", label: "Стандарт безопасности данных" },
    ],
  },
  {
    slug: "cms",
    title: "CMS-разработка",
    category: "Разработка",
    categorySlug: "development",
    description: "Разработка сайтов на CMS в Ростове-на-Дону. Упаковываем сайты в удобные системы управления (WordPress, Tilda, Custom). Вы сами сможете менять тексты и публиковать статьи без программиста.",
    icon: Globe,
    features: [
      { title: "WordPress", description: "Крупные порталы, блоги и корпоративные сайты на самой популярной CMS.", icon: Globe },
      { title: "Tilda", description: "Быстрый запуск лендингов с уникальным дизайном и анимациями.", icon: Layers },
      { title: "Custom CMS", description: "Разработка админ-панели с нуля под специфические бизнес-процессы.", icon: Code },
      { title: "Headless CMS", description: "Strapi, Sanity. Фронтенд отдельно, бэкенд отдельно — максимум скорости.", icon: Smartphone },
    ],
    process: [
      { step: "01", title: "Выбор платформы", description: "Определяем CMS на основе бюджета, сроков и функционала." },
      { step: "02", title: "Интеграция дизайна", description: "Натягиваем вёрстку, настраиваем шаблоны и типы записей." },
      { step: "03", title: "Обучение", description: "Пишем инструкции и проводим обучение по управлению сайтом." },
    ],
    benefits: [
      { value: "0 руб.", label: "Стоимость внесения правок" },
      { value: "15 мин", label: "Время на публикацию статьи" },
      { value: "SEO+", label: "Встроенные инструменты продвижения" },
    ],
  },
  {
    slug: "seo",
    title: "SEO-продвижение",
    category: "Маркетинг",
    categorySlug: "marketing",
    description: "SEO-продвижение сайтов в Ростове-на-Дону и по всей России. Выводим сайты в топ Яндекса и Google по целевым запросам. Работаем белыми методами, обеспечивая стабильный поток клиентов.",
    icon: BarChart3,
    features: [
      { title: "Семантическое ядро", description: "Собираем запросы, которые реально ищут ваши потенциальные клиенты.", icon: Lightbulb },
      { title: "Технический аудит", description: "Исправляем ошибки в коде, скорости и структуре, мешающие индексации.", icon: Code },
      { title: "Оптимизация контента", description: "Пишем и структурируем тексты по требованиям поисковиков.", icon: PenTool },
      { title: "Ссылочная масса", description: "Наращиваем авторитет сайта через качественные внешние ссылки.", icon: Globe },
    ],
    process: [
      { step: "01", title: "Аудит", description: "Полная диагностика текущего состояния сайта и конкурентов." },
      { step: "02", title: "Стратегия", description: "Формируем план работ: что исправить, что добавить, что ускорить." },
      { step: "03", title: "Реализация и рост", description: "Ежемесячные работы, мониторинг позиций и корректировки." },
    ],
    benefits: [
      { value: "Топ-10", label: "Целевые позиции в Яндексе" },
      { value: "+300%", label: "Органический трафик за год" },
      { value: "0 руб.", label: "Стоимость каждого нового клика" },
    ],
  },
  {
    slug: "content-strategy",
    title: "Контент-стратегия",
    category: "Маркетинг",
    categorySlug: "marketing",
    description: "Разработка контент-стратегии для бизнеса. Тексты, которые продают, и статьи, которые приводят SEO-трафик. Формируем экспертность и доверие к вашему бренду.",
    icon: PenTool,
    features: [
      { title: "Продающие тексты", description: "Тексты для лендингов, email-рассылок и соцсетей по формулам AIDA, PAS.", icon: PenTool },
      { title: "Блог и экспертность", description: "Статьи, демонстрирующие вашу компетенцию и привлекающие SEO-трафик.", icon: Lightbulb },
      { title: "Контент-планы", description: "Рубрикатор и график публикаций на месяцы вперёд.", icon: BarChart3 },
      { title: "Редактура и аудит", description: "Улучшение текущих текстов, исправление логических и стилистических ошибок.", icon: Palette },
    ],
    process: [
      { step: "01", title: "Анализ аудитории", description: "Определяем боли, страхи и язык вашей целевой аудитории." },
      { step: "02", title: "Позиционирование", description: "Формулируем ключевые сообщения и Tone of Voice." },
      { step: "03", title: "Производство", description: "Пишем, оформляем, публикуем и анализируем эффективность." },
    ],
    benefits: [
      { value: "2x", label: "Рост конверсии текста" },
      { value: "+45%", label: "Время нахождения на странице" },
      { value: "100%", label: "Соответствие бренду" },
    ],
  },
  {
    slug: "analytics",
    title: "Веб-аналитика",
    category: "Маркетинг",
    categorySlug: "marketing",
    description: "Настройка веб-аналитики в Ростове-на-Дону. Превращаем данные в решения. Настраиваем сквозную аналитику, чтобы вы точно знали, какой канал приносит деньги, а какой сжигает бюджет.",
    icon: Lightbulb,
    features: [
      { title: "Яндекс Метрика / GA4", description: "Настройка целей, событий и электронной коммерции.", icon: BarChart3 },
      { title: "Сквозная аналитика", description: "Отслеживание пути клиента от клика по рекламе до оплаты.", icon: Layers },
      { title: "Дашборды", description: "Удобные графики и таблицы для быстрого принятия решений.", icon: Monitor },
      { title: "A/B тестирование", description: "Проверяем гипотезы, чтобы выбрать самый эффективный вариант.", icon: Lightbulb },
    ],
    process: [
      { step: "01", title: "Аудит текущих данных", description: "Проверяем корректность сбора статистики и находим дыры." },
      { step: "02", title: "Настройка", description: "Размечаем события, связываем рекламные кабинеты." },
      { step: "03", title: "Инсайты", description: "Формируем отчёты с конкретными рекомендациями по улучшению." },
    ],
    benefits: [
      { value: "100%", label: "Прозрачность маркетинга" },
      { value: "x2", label: "ROI рекламных кампаний" },
      { value: "24/7", label: "Доступ к данным в реальном времени" },
    ],
  },
  {
    slug: "support",
    title: "Техническая поддержка",
    category: "Маркетинг",
    categorySlug: "marketing",
    description: "Техническая поддержка сайтов в Ростове-на-Дону 24/7. Регулярные обновления, защита от взломов, резервное копирование и оперативное решение любых проблем.",
    icon: Headphones,
    features: [
      { title: "Мониторинг 24/7", description: "Следим за доступностью сайта и мгновенно реагируем на сбои.", icon: Shield },
      { title: "Обновления", description: "Обновляем CMS, плагины и сертификаты SSL.", icon: Code },
      { title: "Бэкапы", description: "Ежедневное резервное копирование с возможностью отката.", icon: Layers },
      { title: "Модерация контента", description: "Добавление товаров, статей и баннеров по вашему запросу.", icon: PenTool },
    ],
    process: [
      { step: "01", title: "Аудит уязвимостей", description: "Проверяем сайт на вирусы, спам и устаревшее ПО." },
      { step: "02", title: "Абонентское обслуживание", description: "Фиксированная цена за пакет часов или задач в месяц." },
      { step: "03", title: "Слежение и отчётность", description: "Ежемесячные отчёты о проделанной работе и состоянии сайта." },
    ],
    benefits: [
      { value: "15 мин", label: "Время реакции на сбой" },
      { value: "0", label: "Взломов и утечек данных" },
      { value: "99.9%", label: "Аптайм вашего ресурса" },
    ],
  },
];

export const servicesByCategory = {
  design: {
    title: "Дизайн",
    services: servicesData.filter((s) => s.categorySlug === "design"),
  },
  development: {
    title: "Разработка",
    services: servicesData.filter((s) => s.categorySlug === "development"),
  },
  marketing: {
    title: "Маркетинг",
    services: servicesData.filter((s) => s.categorySlug === "marketing"),
  },
};