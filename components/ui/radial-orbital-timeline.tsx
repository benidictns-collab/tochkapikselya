"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

// ──────────────────────────────────────────────
// МОБИЛЬНАЯ ВЕРСИЯ (Отдельный компонент со своими хуками)
// ──────────────────────────────────────────────
function MobileTimeline({ timelineData }: { timelineData: TimelineItem[] }) {
  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-md mx-auto space-y-6">
        {timelineData.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-12 w-12 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-white/40">{item.date}</p>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{item.content}</p>
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="flex items-center text-white/50">
                    <Zap size={12} className="mr-1 text-yellow-400" /> Энергия
                  </span>
                  <span className="font-mono">{item.energy}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                    style={{ width: `${item.energy}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// ДЕСКТОПНАЯ ВЕРСИЯ (Отдельный компонент со своими хуками)
// ──────────────────────────────────────────────
function DesktopTimeline({ timelineData }: { timelineData: TimelineItem[] }) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({}); setActiveNodeId(null); setPulseEffect({}); setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => { if (parseInt(key) !== id) newState[parseInt(key)] = false; });
      newState[id] = !prev[id];
      if (!prev[id]) {
        setActiveNodeId(id); setAutoRotate(false);
        const relatedItems = getRelatedItems(id); const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => { newPulseEffect[relId] = true; }); setPulseEffect(newPulseEffect); centerViewOnNode(id);
      } else { setActiveNodeId(null); setAutoRotate(true); setPulseEffect({}); }
      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;
    if (autoRotate) { rotationTimer = setInterval(() => { setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3))); }, 50); }
    return () => { if (rotationTimer) clearInterval(rotationTimer); };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    setRotationAngle(270 - (nodeIndex / timelineData.length) * 360);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 560; const radian = (angle * Math.PI) / 180;
    return { x: radius * Math.cos(radian) + centerOffset.x, y: radius * Math.sin(radian) + centerOffset.y, angle, zIndex: Math.round(100 + 50 * Math.cos(radian)), opacity: Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))) };
  };

  const getRelatedItems = (itemId: number): number[] => { const currentItem = timelineData.find((item) => item.id === itemId); return currentItem ? currentItem.relatedIds : []; };
  const isRelatedToActive = (itemId: number): boolean => { if (!activeNodeId) return false; return getRelatedItems(activeNodeId).includes(itemId); };
  const getStatusStyles = (status: TimelineItem["status"]): string => { switch (status) { case "completed": return "text-black bg-yellow-400 border-yellow-400"; case "in-progress": return "text-black bg-white border-black"; case "pending": return "text-white bg-black/40 border-white/50"; default: return "text-white bg-black/40 border-white/50"; } };

  const expandedItemId = Object.entries(expandedItems).find(([, v]) => v)?.[0];
  const expandedItem = expandedItemId ? timelineData.find((i) => i.id === parseInt(expandedItemId)) : null;

  return (
    <div className="w-full flex flex-col items-center bg-black overflow-visible relative" ref={containerRef} onClick={handleContainerClick} style={{ minHeight: "1400px" }}>
      <div className="relative w-full max-w-[1400px] flex items-center justify-center pt-24" ref={orbitRef} style={{ height: "1300px" }}>
        <div className="absolute w-full h-full flex items-center justify-center" style={{ perspective: "2000px", transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)` }}>
          <div className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-36 h-36 rounded-full border border-yellow-400/30 animate-ping opacity-70" />
            <div className="absolute w-44 h-44 rounded-full border border-yellow-400/20 animate-ping opacity-50" style={{ animationDelay: "0.5s" }} />
            <div className="w-14 h-14 rounded-full bg-black/80 backdrop-blur-md" />
          </div>
          <div className="absolute rounded-full border border-yellow-400/15" style={{ width: "1120px", height: "1120px" }} />
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id]; const isRelated = isRelatedToActive(item.id); const isPulsing = pulseEffect[item.id]; const Icon = item.icon; const hasAnyExpanded = !!activeNodeId;
            const nodeStyle = { transform: `translate(${position.x}px, ${position.y}px)`, zIndex: isExpanded ? 200 : position.zIndex, opacity: isExpanded ? 1 : hasAnyExpanded && !isRelated ? 0.2 : position.opacity };
            return (
              <div key={item.id} ref={(el) => { if (el) nodeRefs.current[item.id] = el; }} className="absolute transition-all duration-700 cursor-pointer" style={nodeStyle} onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}>
                <div className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""}`} style={{ background: `radial-gradient(circle, rgba(255,214,0,0.25) 0%, rgba(255,214,0,0) 70%)`, width: `${item.energy * 1 + 80}px`, height: `${item.energy * 1 + 80}px`, left: `-${(item.energy * 1 + 80 - 80) / 2}px`, top: `-${(item.energy * 1 + 80 - 80) / 2}px` }} />
                <div className={`w-20 h-20 rounded-full flex items-center justify-center ${isExpanded ? "bg-yellow-400 text-black scale-[1.8]" : isRelated ? "bg-yellow-400/50 text-black scale-110" : "bg-black text-yellow-400"} border-2 ${isExpanded ? "border-yellow-400 shadow-lg shadow-yellow-400/30" : isRelated ? "border-yellow-400 animate-pulse" : "border-yellow-400/40"} transition-all duration-300`}><Icon size={36} /></div>
                <div className={`absolute top-24 left-1/2 -translate-x-1/2 whitespace-nowrap text-lg font-semibold tracking-wider text-center transition-all duration-300 ${isExpanded ? "text-yellow-400 opacity-100" : isRelated ? "text-yellow-400/80 opacity-100" : hasAnyExpanded ? "opacity-0" : "text-white/70 opacity-100"}`}>{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      {expandedItem && (
        <div className="w-full max-w-[640px] mx-auto px-6 -mt-24 mb-16" onClick={(e) => e.stopPropagation()}>
          <Card className="w-full bg-black/90 backdrop-blur-lg border-yellow-400/30 shadow-2xl shadow-yellow-400/10">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <Badge className={`px-4 py-1 text-sm ${getStatusStyles(expandedItem.status)}`}>{expandedItem.status === "completed" ? "ВЫПОЛНЕНО" : expandedItem.status === "in-progress" ? "В ПРОЦЕССЕ" : "ОЖИДАНИЕ"}</Badge>
                <span className="text-base font-mono text-white/50">{expandedItem.date}</span>
              </div>
              <CardTitle className="text-3xl mt-4 text-yellow-400">{expandedItem.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-white/80">
              <p>{expandedItem.content}</p>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center text-base mb-3">
                  <span className="flex items-center"><Zap size={20} className="mr-2 text-yellow-400" />Энергия</span>
                  <span className="font-mono text-xl">{expandedItem.energy}%</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" style={{ width: `${expandedItem.energy}%` }} />
                </div>
              </div>
              {expandedItem.relatedIds.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center mb-4"><Link size={20} className="text-yellow-400/70 mr-2" /><h4 className="text-base uppercase tracking-wider font-medium text-yellow-400/70">Связанные этапы</h4></div>
                  <div className="flex flex-wrap gap-3">
                    {expandedItem.relatedIds.map((relatedId) => { const relatedItem = timelineData.find((i) => i.id === relatedId); return (
                      <Button key={relatedId} variant="outline" className="flex items-center h-12 px-5 text-base rounded-none border-yellow-400/20 bg-transparent hover:bg-yellow-400/10 text-white/80 hover:text-yellow-400 transition-all" onClick={(e) => { e.stopPropagation(); toggleItem(relatedId); }}>{relatedItem?.title}<ArrowRight size={16} className="ml-2 text-yellow-400/60" /></Button>
                    ); })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────
// ГЛАВНЫЙ ЭКСПОРТ (Переключатель)
// ──────────────────────────────────────────────
export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <MobileTimeline timelineData={timelineData} />;
  }

  return <DesktopTimeline timelineData={timelineData} />;
}