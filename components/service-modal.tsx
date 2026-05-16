"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GlowingShadow } from "@/components/ui/glowing-shadow";
import { ServiceData } from "@/lib/services-data";
import { X, ArrowRight } from "lucide-react";

interface ServiceModalProps {
  service: ServiceData | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{ '--modal-width': 'min(800px, 90vw)' } as React.CSSProperties}
            className="relative"
          >
            <GlowingShadow>
              <div className="relative z-10 flex flex-col gap-6 p-8 md:p-12 max-h-[80vh] overflow-y-auto text-white">
                {/* Кнопка закрытия */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }} 
                  className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-20 w-8 h-8 flex items-center justify-center"
                >
                  <X size={24} />
                </button>
                
                {/* Заголовок и категория */}
                <div className="flex items-center gap-4">
                   <service.icon className="h-10 w-10 text-yellow-400 shrink-0" />
                   <span className="text-xs uppercase tracking-wider text-yellow-400/70 border border-yellow-400/20 px-3 py-1 rounded-full">
                     {service.category}
                   </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight pr-8">
                  {service.title}
                </h2>
                
                <p className="text-white/70 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                {/* Сетка преимуществ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                   {service.features.map(f => {
                     const FIcon = f.icon;
                     return (
                       <div key={f.title} className="bg-white/5 p-4 rounded-lg border border-white/10">
                         <div className="flex items-center gap-2 mb-2">
                            <FIcon className="h-5 w-5 text-yellow-400" />
                            <h4 className="font-semibold text-sm">{f.title}</h4>
                         </div>
                         <p className="text-xs text-white/50">{f.description}</p>
                       </div>
                     )
                   })}
                </div>
                
                {/* Кнопка перехода к форме заявки */}
                <a 
                  href="/#contacts" 
                  onClick={() => setTimeout(onClose, 100)} 
                  className="mt-auto inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition-colors w-fit"
                >
                   Связаться с нами <ArrowRight size={18} />
                </a>
              </div>
            </GlowingShadow>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}