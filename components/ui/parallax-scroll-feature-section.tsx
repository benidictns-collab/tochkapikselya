"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ParallaxSectionItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export interface ParallaxScrollFeatureSectionProps {
  items: ParallaxSectionItem[];
  title?: string;
  subtitle?: string;
  endText?: string;
}

// Вынесли секцию в отдельный компонент, чтобы правильно использовать хуки (правила React)
const SectionItem = ({ item }: { item: ParallaxSectionItem }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacityContent = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const clipProgress = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const translateContent = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div
      ref={ref}
      className={cn(
        "min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-20",
        item.reverse ? "md:flex-row-reverse" : ""
      )}
    >
      <motion.div
        style={{ y: translateContent }}
        className="max-w-md text-center md:text-left"
      >
        <div className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          {item.title}
        </div>
        <motion.p
          style={{ y: translateContent }}
          className="text-white/70 text-base md:text-lg leading-relaxed"
        >
          {item.description}
        </motion.p>
      </motion.div>
      <motion.div
        style={{
          opacity: opacityContent,
          clipPath: clipProgress,
        }}
        className="relative shrink-0"
      >
        <img
          src={item.imageUrl}
          className="w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-white/10"
          alt={item.title}
        />
      </motion.div>
    </div>
  );
};

export function ParallaxScrollFeatureSection({
  items,
  title = "Как мы работаем",
  subtitle = "СКРОЛЛ",
  endText = "Готовы начать?",
}: ParallaxScrollFeatureSectionProps) {
  return (
    <div className="bg-black">
      <div className="min-h-[60vh] md:min-h-screen w-full flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl md:text-6xl max-w-3xl font-bold tracking-tighter text-white">
          {title}
        </h2>
        <p className="mt-8 flex items-center gap-1.5 text-sm text-white/40 uppercase tracking-widest">
          {subtitle} <ArrowDown size={15} className="text-yellow-400" />
        </p>
      </div>

      <div className="flex flex-col pb-20">
        {items.map((item) => (
          <SectionItem key={item.id} item={item} />
        ))}
      </div>

      <div className="min-h-[50vh] md:min-h-screen w-full flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-yellow-400">
          {endText}
        </h2>
      </div>
    </div>
  );
}