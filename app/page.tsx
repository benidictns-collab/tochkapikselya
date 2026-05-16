"use client";

import React from "react";
import Navbar from "@/components/navbar";
import { ScrollingFeatureShowcase } from "@/components/ui/interactive-scrolling-story-component";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";
import { ParallaxScrollFeatureSection } from "@/components/ui/parallax-scroll-feature-section";
import {
  Search,
  Palette,
  Code,
  TestTube,
  Rocket,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const portfolioItems: CardStackItem[] = [
  {
    id: 1,
    title: "EcoShop — Маркетплейс",
    description: "Редизайн e-commerce платформы с увеличением конверсии на 47%",
    imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    tag: "E-commerce",
  },
  {
    id: 2,
    title: "ShelfAI PRO — Дашборд",
    description: "Платформа с 40+ AI-агентами для автоматизации маркетплейсов Ozon и Wildberries",
    imageSrc: "https://z-cdn-media.chatglm.cn/files/958698c7-7c0e-4c83-935d-4436dbe302cb.png?auth_key=1878943058-3740fefa705541e98b6fb7380397ec05-0-1604a5f70da42297f7d3c3b5fd6cd627",
    tag: "SaaS",
  },
  {
    id: 3,
    title: "FoodieApp — Мобильное приложение",
    description: "Дизайн и разработка приложения доставки еды для iOS и Android",
    imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    tag: "Mobile",
  },
  {
    id: 4,
    title: "ГК XELON",
    description: "Корпоративный сайт группы компаний: 6 дочерних компаний, 9 направлений деятельности.",
    imageSrc: "https://z-cdn-media.chatglm.cn/files/2a8e9b65-d861-4a4b-9e93-494a7ff5cfa0.png?auth_key=1878943841-2e596f6a1ee949e8b27471bbcbb3dd29-0-b5de3c790b90b592e92c60747328608f",
    tag: "Холдинг",
  },
  {
    id: 5,
    title: 'ООО "КСЕЛОН" — Производство ППД и Дисплеев',
    description: "Корпоративный сайт производителя: от детекторов до дисплеев и AI-модулей.",
    imageSrc: "https://z-cdn-media.chatglm.cn/files/91afdb59-ec51-41a2-81bc-8fecadf1ff4f.png?auth_key=1878943683-c74c85d0a29349599cff2a66e74fa6e1-0-15d9f1c9a52d9a7851a6f06ade250a3b",
    tag: "Производство",
  },
];

const servicesSteps = [
  {
    id: 1,
    title: "Аналитика и исследование",
    description: "Проводим глубокий анализ бизнеса, целевой аудитории и конкурентной среды в Ростове-на-Дону. Изучаем спрос, поисковые запросы, поведение пользователей и текущие позиции сайта в поисковых системах. На основе полученных данных формируем эффективную SEO-стратегию, которая помогает увеличить видимость сайта, привлечь целевой трафик и создать стабильный фундамент для роста продаж и заявок.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    reverse: false,
  },
  {
    id: 2,
    title: "Проектирование (UX)",
    description: "Проектируем удобные пользовательские сценарии (CJM) и создаём продуманные прототипы интерфейсов. Анализируем поведение целевой аудитории, чтобы сделать навигацию простой и понятной, а путь клиента — максимально коротким до заявки или покупки. Каждый экран сайта прорабатывается до пикселя для высокой конверсии, удобства пользователей и эффективного взаимодействия с бизнесом.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2070&auto=format&fit=crop",
    reverse: true,
  },
  {
    id: 3,
    title: "Веб-дизайн (UI)",
    description: "Создаём современный веб-дизайн, адаптивные макеты и удобные дизайн-системы для сайтов любого масштаба. Продумываем визуальную концепцию, которая подчёркивает стиль бренда, повышает доверие пользователей и помогает выделиться среди конкурентов в Ростове-на-Дону и на рынке Юга России. Превращаем логику интерфейсов в эстетичный и эффективный дизайн, ориентированный на удобство, узнаваемость и конверсию.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop",
    reverse: false,
  },
  {
    id: 4,
    title: "Разработка сайтов",
    description: "Разрабатываем современные сайты на React, Next.js и TypeScript с упором на производительность, стабильность и масштабируемость. Используем чистый и оптимизированный код, чтобы обеспечить высокую скорость загрузки, корректную работу на всех устройствах и хорошую SEO-оптимизацию. Создаём быстрые корпоративные сайты, лендинги и веб-приложения, которые эффективно работают на привлечение клиентов и развитие бизнеса.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    reverse: true,
  },
  {
    id: 5,
    title: "Тестирование, SEO и запуск",
    description: "Проводим комплексное тестирование сайта перед запуском: проверяем корректную работу на всех устройствах и в популярных браузерах. Оптимизируем Core Web Vitals, скорость загрузки и техническое SEO для лучшего ранжирования в поисковых системах. Выполняем деплой на сервер, настраиваем Яндекс.Метрику, аналитику и обеспечиваем техническую поддержку 24/7 для стабильной и безопасной работы сайта.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    reverse: false,
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-black">
      <Navbar />
      
      {/* HERO */}
      <section id="hero" aria-label="Главная секция">
        <ScrollingFeatureShowcase />
      </section>

      {/* ABOUT */}
      <section id="about" aria-label="О студии веб-дизайна Точка пикселя">
        <FlowArt aria-label="О студии Точка пикселя">
          
          {/* ═══ БЛОК 01 — КТО МЫ ═══ */}
          <FlowSection aria-label="Кто мы" style={{ backgroundColor: "#FFD600", color: "#000000" }}>
            <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto text-center md:text-left gap-6 md:gap-10 px-4 md:px-8">
              
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em]">01 — Кто мы</p>
              
              <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-bold leading-[0.85] uppercase tracking-tight w-full">
                Точка<br />пикселя
              </h1>
              
              <p className="text-xl md:text-2xl font-semibold tracking-tight">
                Студия веб-дизайна и разработки в Ростове-на-Дону
              </p>

              <div className="w-full border-t border-black/20 my-2 md:my-4"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full text-base md:text-lg leading-relaxed">
                <div className="space-y-4">
                  <p>
                    Мы создаём цифровые продукты, которые не просто выглядят современно, но и решают реальные бизнес-задачи. От привлечения целевого трафика до увеличения конверсии и среднего чека — каждый элемент сайта работает на вашу прибыль.
                  </p>
                  <p>
                    За 1 год работы мы реализовали более 150 проектов для компаний по всему Югу России, помогая бизнесу выходить в онлайн, автоматизировать процессы и масштабироваться.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    В нашей команде — 12 профильных специалистов: UI/UX дизайнеры, разработчики на React и Next.js, SEO-оптимизаторы и проектные менеджеры. Мы не отдаем задачи на аутсорс — весь цикл работ проходит внутри студии.
                  </p>
                  <p>
                    Мы не просто рисуем макеты и пишем код. Мы проектируем инструменты продаж, которые выделяют вас среди конкурентов и создают лучший пользовательский опыт (UX).
                  </p>
                </div>
              </div>
            </div>
          </FlowSection>

          {/* ═══ БЛОК 02 — НАШ ПОДХОД ═══ */}
          <FlowSection aria-label="Наш подход" style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
            <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto text-center md:text-left gap-6 md:gap-10 px-4 md:px-8">
              
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">02 — Наш подход</p>
              
              <h2 className="text-5xl md:text-8xl lg:text-[11rem] font-bold leading-[0.85] uppercase tracking-tight w-full">
                Дизайн,<br />который<br />продаёт
              </h2>

              <div className="w-full border-t border-white/20 my-2 md:my-4"></div>

              <p className="text-base md:text-lg leading-relaxed max-w-3xl">
                Мы не просто рисуем красивые макеты. Каждый элемент интерфейса подчинён бизнес-логике. Наш дизайн снижает процент отказов и увеличивает средний чек. Работаем с бизнесом по всему Югу России, знаём специфику рынка Ростова-на-Дону.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-base leading-relaxed mt-4">
                <div>
                  <p className="mb-2 text-lg font-bold uppercase tracking-wider text-yellow-400">Стратегия</p>
                  <p className="opacity-75">Анализируем нишу, конкурентов и потребности целевой аудитории до начала проектирования. Данные, а не догадки.</p>
                </div>
                <div>
                  <p className="mb-2 text-lg font-bold uppercase tracking-wider text-yellow-400">Юзабилити</p>
                  <p className="opacity-75">Удобство для пользователя — прибыль для владельца. Создаём бесшовный опыт взаимодействия (UX), ведущий к покупке.</p>
                </div>
                <div>
                  <p className="mb-2 text-lg font-bold uppercase tracking-wider text-yellow-400">Результат</p>
                  <p className="opacity-75">Рост конверсии в 2-3 раза, снижение стоимости привлечения лида и измеримый возврат инвестиций (ROI).</p>
                </div>
              </div>
            </div>
          </FlowSection>

          {/* ═══ БЛОК 03 — ЦИФРЫ ═══ */}
          <FlowSection aria-label="Цифры и факты" style={{ backgroundColor: "#FFFFFF", color: "#000000" }}>
            <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto text-center gap-6 md:gap-10 px-4 md:px-8">
              
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-yellow-600">03 — Цифры и факты</p>
              
              <h2 className="text-5xl md:text-8xl lg:text-[11rem] font-bold leading-[0.85] uppercase tracking-tight w-full">
                1 год <br />веб - <br />дизайна
              </h2>

              <div className="w-full border-t border-black/20 my-2 md:my-4"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full text-base leading-relaxed">
                <div>
                  <p className="text-5xl md:text-7xl font-extrabold mb-2 text-yellow-600">150+</p>
                  <p className="font-semibold text-lg mb-2">Проектов</p>
                  <p className="opacity-75">Интернет-магазины, лендинги, корпоративные порталы и SaaS-платформы, успешно запущенные в эксплуатацию.</p>
                </div>
                <div>
                  <p className="text-5xl md:text-7xl font-extrabold mb-2 text-yellow-600">47%</p>
                  <p className="font-semibold text-lg mb-2">Рост конверсии</p>
                  <p className="opacity-75">Средний прирост конверсии после нашего редизайна и внедрения аналитики на сайтах клиентов.</p>
                </div>
                <div>
                  <p className="text-5xl md:text-7xl font-extrabold mb-2 text-yellow-600">12</p>
                  <p className="font-semibold text-lg mb-2">Специалистов</p>
                  <p className="opacity-75">Слаженная команда дизайнеров, фронтенд/бэкенд разработчиков, SEO-специалистов и менеджеров.</p>
                </div>
              </div>
            </div>
          </FlowSection>

        </FlowArt>
      </section>

      {/* SERVICES */}
      <section id="services" aria-label="Услуги по созданию сайтов">
        <ParallaxScrollFeatureSection 
          items={servicesSteps}
          title="Создание сайтов под ключ: от идеи до запуска"
          endText="Обсудим ваш проект?"
        />
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-black" aria-label="Портфолио веб-дизайна">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 mb-2">Портфолио</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Наши работы</h2>
            <p className="mt-4 text-white/60 max-w-lg mx-auto">Посмотрите примеры сайтов, которые мы спроектировали, разработали и вывели в топ поисковых систем.</p>
          </div>
          <CardStack items={portfolioItems} initialIndex={0} autoAdvance intervalMs={3000} pauseOnHover showDots />
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-[#0A0A0A]" aria-label="Контакты студии веб-дизайна в Ростове-на-Дону">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 mb-2">Свяжитесь с нами</p>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.95]">
                Закажите<br />сайт<br /><span className="text-yellow-400">в Ростове</span>
              </h2>
              <p className="mt-6 text-white/60 max-w-md text-lg">Оставьте заявку — мы подготовим индивидуальное коммерческое предложение с оценкой сроков и стоимости разработки за 24 часа.</p>
              <div className="mt-10 space-y-4">
                <a href="tel:+78632001020" className="flex items-center gap-3 text-white/80 hover:text-yellow-400 transition-colors group">
                  <div className="h-10 w-10 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors shrink-0">
                    <Phone className="h-4 w-4 text-yellow-400" />
                  </div>
                  <span>+7 928 459 38 00</span>
                </a>
                <a href="mailto:hello@tochkapikselya.ru" className="flex items-center gap-3 text-white/80 hover:text-yellow-400 transition-colors group">
                  <div className="h-10 w-10 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors shrink-0">
                    <Mail className="h-4 w-4 text-yellow-400" />
                  </div>
                  <span>hello@tochkapikselya.ru</span>
                </a>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="h-10 w-10 rounded-full bg-yellow-400/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-yellow-400" />
                  </div>
                  <span>г. Ростов-на-Дону, ул. Обороны 49</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1.5">Ваше имя</label>
                  <input id="name" type="text" placeholder="Иван Петров" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1.5">Email или телефон</label>
                  <input id="email" type="text" placeholder="ivan@company.ru" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 transition-colors" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1.5">О проекте</label>
                  <textarea id="message" rows={4} placeholder="Опишите вашу задачу: например, нужен сайт для автосервиса в Ростове..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition-colors">Заказать разработку сайта</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded bg-yellow-400 flex items-center justify-center">
              <span className="text-black font-extrabold text-xs">TP</span>
            </div>
            <span className="text-white/60 text-sm">© 2026 Точка пикселя — создание сайтов в Ростове-на-Дону</span>
          </div>
          <p className="text-white/40 text-sm">Студия веб-дизайна и разработки</p>
        </div>
      </footer>
    </div>
  );
}