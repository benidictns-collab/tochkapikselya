"use client";

import React, { useState, useEffect, useRef } from "react";

const slidesData = [
  {
    title: "Веб-дизайн",
    description:
      "Создаём сайты, которые не просто красиво выглядят, но и решают бизнес-задачи. Каждый пиксель на своём месте.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#000000",
    textColor: "#FFFFFF",
  },
  {
    title: "UI/UX Дизайн",
    description:
      "Проектируем интерфейсы, в которых каждый элемент продуман. Пользователь находит то, что нужно, за секунды.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#FFD600",
    textColor: "#000000",
  },
  {
    title: "Брендинг",
    description:
      "Строим визуальную идентичность, которая выделяет вас среди конкурентов и запоминается с первого взгляда.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#000000",
    textColor: "#FFFFFF",
  },
  {
    title: "Разработка",
    description:
      "Превращаем дизайн в быстрый и надёжный продукт. React, Next.js, современный стек технологий.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#FFD600",
    textColor: "#000000",
  },
];

export function ScrollingFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollProgress = -rect.top;
      const totalScroll = section.offsetHeight - window.innerHeight;

      if (totalScroll <= 0) return;

      const stepHeight = totalScroll / slidesData.length;
      const newActiveIndex = Math.min(
        slidesData.length - 1,
        Math.max(0, Math.floor(scrollProgress / stepHeight))
      );
      setActiveIndex(newActiveIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = slidesData[activeIndex].bgColor === "#000000";

  const dynamicStyles: React.CSSProperties = {
    backgroundColor: slidesData[activeIndex].bgColor,
    color: slidesData[activeIndex].textColor,
    transition: "background-color 0.7s ease, color 0.7s ease",
  };

  const gridPatternStyle: React.CSSProperties = {
    backgroundImage: isDark
      ? `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
         linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`
      : `linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
         linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)`,
    backgroundSize: "3.5rem 3.5rem",
  };

  const scrollToSlide = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const totalScroll = section.offsetHeight - window.innerHeight;
    const stepHeight = totalScroll / slidesData.length;
    const targetScroll = section.offsetTop + stepHeight * index;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <div
      ref={sectionRef}
      id="hero"
      style={{ height: `${slidesData.length * 100}vh` }}
    >
      <div
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center"
        style={dynamicStyles}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">
          {/* Left Column */}
          <div
            className={`relative flex flex-col justify-center p-8 md:p-16 border-r ${
              isDark ? "border-white/10" : "border-black/10"
            }`}
          >
            {/* Pagination */}
            <div className="absolute top-20 left-16 flex space-x-2">
              {slidesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                    index === activeIndex
                      ? isDark
                        ? "w-12 bg-yellow-400"
                        : "w-12 bg-black"
                      : isDark
                      ? "w-6 bg-white/20"
                      : "w-6 bg-black/20"
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>

            <div className="relative h-72 w-full">
              {slidesData.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                    {slide.title}
                  </h2>
                  <p className="mt-6 text-lg md:text-xl max-w-md opacity-80">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="absolute bottom-16 left-16">
              <a
                href="#contacts"
                className={`px-10 py-4 font-semibold rounded-full uppercase tracking-wider transition-colors inline-block ${
                  isDark
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                Начать проект
              </a>
            </div>
          </div>

          {/* Right Column */}
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
  );
}