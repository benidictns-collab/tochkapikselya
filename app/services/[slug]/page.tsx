import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";
import Navbar from "@/components/navbar";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Делаем страницы статическими для скорости
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Ищем услугу по slug из URL
  const service = servicesData.find((s) => s.slug === params.slug);

  // Если нет такой услуги — 404
  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-white/50 hover:text-yellow-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Все услуги
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-400">
              <Icon className="h-8 w-8" />
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400/70 bg-yellow-400/5 px-4 py-2 rounded-full border border-yellow-400/20">
              {service.category}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9] mb-6">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* ═══ FEATURES GRID ═══ */}
      <section className="py-20 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Что <span className="text-yellow-400">входит</span> в услугу
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-yellow-400/30 transition-colors group"
                >
                  <div className="flex items-start gap-5">
                    <div className="h-12 w-12 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                      <FeatureIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Как мы <span className="text-yellow-400">работаем</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.process.map((step) => (
              <div key={step.step} className="relative">
                <span className="text-[6rem] font-black text-white/[0.03] absolute -top-10 -left-2 select-none leading-none">
                  {step.step}
                </span>
                <div className="relative z-10 pt-4">
                  <div className="w-12 h-1 bg-yellow-400 rounded-full mb-6" />
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section className="py-20 px-6 bg-yellow-400 text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
            Почему это работает
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit) => (
              <div key={benefit.label} className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-extrabold mb-2 text-black">
                  {benefit.value}
                </div>
                <div className="text-lg font-medium text-black/60">
                  {benefit.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Готовы начать проект?
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Оставьте заявку, и мы подготовим индивидуальное предложение с оценкой сроков и стоимости.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/#contacts"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-300 transition-colors text-lg"
            >
              Обсудить проект
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/#services"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/5 transition-colors text-lg"
            >
              Смотреть другие услуги
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}