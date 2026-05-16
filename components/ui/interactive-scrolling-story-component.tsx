"use client";

import React, { useState, useEffect, useRef } from "react";

const slidesData = [
  {
    title: "Веб-дизайн",
    description: "Создаём сайты, которые не просто красиво выглядят, но и решают бизнес-задачи.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#000000",
    textColor: "#FFFFFF",
  },
  {
    title: "UI/UX Дизайн",
    description: "Проектируем интерфейсы, в которых каждый элемент продуман.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#FFD600",
    textColor: "#000000",
  },
  {
    title: "Брендинг",
    description: "Строим визуальную идентичность, которая выделяет вас среди конкурентов.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#000000",
    textColor: "#FFFFFF",
  },
  {
    title: "Разработка",
    description: "Превращаем дизайн в быстрый и надёжный продукт.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#FFD600",
    textColor: "#000000",
  },
];

export function ScrollingFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollableHeight = container.scrollHeight - container.clientHeight;
      if (scrollableHeight <= 0) return;
      const stepHeight = scrollableHeight / slidesData.length;
      const newActiveIndex = Math.min(
        slidesData.length - 1,
        Math.floor(container.scrollTop / stepHeight)
      );
      setActiveIndex(newActiveIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = slidesData[activeIndex].bgColor === "#000000";

  const dynamicStyles: React.CSSProperties = {
    backgroundColor: slidesData[activeIndex].bgColor,
    color: slidesData[activeIndex].textColor,
    transition: "background-color 0.7s ease, color 0.7s ease",
  };

  const gridPatternStyle: React.CSSProperties = {
    backgroundImage: isDark
      ? `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`
      : `linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)`,
    backgroundSize: "3.5rem 3.5rem",
  };

  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollableHeight = container.scrollHeight - container.clientHeight;
    const stepHeight = scrollableHeight / slidesData.length;
    container.scrollTo({ top: stepHeight * index, behavior: "smooth" });
  };

  return (
    <div
      ref={scrollContainerRef}
      className="h-[100dvh] w-full overflow-y-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div style={{ height: `${slidesData.length * 100}vh` }}>
        <div
          className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-center"
          style={dynamicStyles}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">
            
            {/* Левая колонка (Адаптивная) */}
            <div
              className={`relative flex flex-col justify-between md:justify-center p-8 pb-12 md:p-16 border-r-0 md:border-r ${
                isDark ? "md:border-white/10" : "md:border-black/10"
              }`}
            >
              {/* Верхняя часть: Пагинация + Текст */}
              <div className="flex flex-col pt-8 md:pt-0">
                {/* Пагинация */}
                <div className="flex space-x-2 mb-8 md:mb-0 md:absolute md:top-16 md:left-16">
                  {slidesData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSlide(index)}
                      className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                        index === activeIndex
                          ? isDark
                            ? "w-8 md:w-12 bg-yellow-400"
                            : "w-8 md:w-12 bg-black"
                          : isDark
                          ? "w-4 md:w-6 bg-white/20"
                          : "w-4 md:w-6 bg-black/20"
                      }`}
                      aria-label={`Перейти к слайду ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Текст слайда (min-h для мобильных, чтобы не прыгал) */}
                <div className="w-full min-h-[160px] md:min-h-0 md:relative md:h-72">
                  {slidesData.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === activeIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }`}
                    >
                      <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                        {slide.title}
                      </h2>
                      <p className="mt-4 md:mt-6 text-base md:text-xl max-w-md opacity-80">
                        {slide.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Нижняя часть: Кнопка CTA (На мобильных в потоке, на десктопе absolute) */}
              <div className="w-full md:absolute md:bottom-16 md:left-16">
                <a
                  href="#contacts"
                  className={`inline-block px-8 py-3 md:px-10 md:py-4 font-semibold rounded-full uppercase tracking-wider transition-colors text-sm md:text-base ${
                    isDark
                      ? "bg-yellow-400 text-black hover:bg-yellow-300"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Начать проект
                </a>
              </div>
            </div>

            {/* Правая колонка (скрыта на мобильных) */}
            <div
              className="hidden md:flex items-center justify-center p-8"
              style={gridPatternStyle}
            >
              <div
                className={`relative w-[50%] h-[80vh] rounded-2xl overflow-hidden shadow-2xl border-4 ${
                  isDark ? "border-white/5" : "border-black/5"
                }`}
              >
                <div
                  className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateY(-${activeIndex * 100}%)`,
                  }}
                >
                  {slidesData.map((slide, index) => (
                    <div key={index} className="w-full h-full">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}