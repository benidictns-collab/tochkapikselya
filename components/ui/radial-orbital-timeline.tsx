"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<
    Record<number, boolean>
  >({});
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<
    Record<number, boolean>
  >({});
  const [centerOffset, setCenterOffset] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (
      e.target === containerRef.current ||
      e.target === orbitRef.current
    ) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex(
      (item) => item.id === nodeId
    );
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle =
      ((index / total) * 360 + rotationAngle) % 360;
    // Увеличен радиус с 200 до 400
    const radius = 400;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find(
      (item) => item.id === itemId
    );
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (
    status: TimelineItem["status"]
  ): string => {
    switch (status) {
      case "completed":
        return "text-black bg-yellow-400 border-yellow-400";
      case "in-progress":
        return "text-black bg-white border-black";
      case "pending":
        return "text-white bg-black/40 border-white/50";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Увеличен max-w контейнера, чтобы вмещать двойные размеры */}
      <div className="relative w-full max-w-[1400px] h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "2000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Center orb - увеличен с w-16 до w-32 */}
          <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-40 h-40 rounded-full border border-yellow-400/30 animate-ping opacity-70" />
            <div
              className="absolute w-48 h-48 rounded-full border border-yellow-400/20 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            />
            <div className="w-16 h-16 rounded-full bg-black/80 backdrop-blur-md" />
          </div>

          {/* Orbit ring - увеличен с w-96 до w-[768px] */}
          <div className="absolute w-[768px] h-[768px] rounded-full border border-yellow-400/15" />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(
              index,
              timelineData.length
            );
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  if (el) nodeRefs.current[item.id] = el;
                }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Pulse aura - размеры увеличены */}
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing
                      ? "animate-pulse duration-1000"
                      : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,214,0,0.25) 0%, rgba(255,214,0,0) 70%)`,
                    width: `${item.energy * 1 + 80}px`,
                    height: `${item.energy * 1 + 80}px`,
                    left: `-${
                      (item.energy * 1 + 80 - 80) / 2
                    }px`,
                    top: `-${
                      (item.energy * 1 + 80 - 80) / 2
                    }px`,
                  }}
                />

                {/* Icon container - увеличен с w-10 h-10 до w-20 h-20 */}
                <div
                  className={`
                  w-20 h-20 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-yellow-400 text-black"
                      : isRelated
                      ? "bg-yellow-400/50 text-black"
                      : "bg-black text-yellow-400"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-yellow-400 shadow-lg shadow-yellow-400/30"
                      : isRelated
                      ? "border-yellow-400 animate-pulse"
                      : "border-yellow-400/40"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-[2]" : ""}
                `}
                >
                  <Icon size={32} />
                </div>

                {/* Label - увеличен отступ и размер текста */}
                <div
                  className={`
                  absolute top-24 whitespace-nowrap
                  text-xl font-semibold tracking-wider
                  transition-all duration-300
                  ${
                    isExpanded
                      ? "text-yellow-400 scale-150"
                      : "text-white/70"
                  }
                `}
                >
                  {item.title}
                </div>

                {/* Expanded Card - увеличена ширина и шрифты */}
                {isExpanded && (
                  <Card className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] bg-black/90 backdrop-blur-lg border-yellow-400/30 shadow-xl shadow-yellow-400/10 overflow-visible">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-yellow-400/50" />
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-4 text-base ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "ВЫПОЛНЕНО"
                            : item.status === "in-progress"
                            ? "В ПРОЦЕССЕ"
                            : "ОЖИДАНИЕ"}
                        </Badge>
                        <span className="text-base font-mono text-white/50">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-2xl mt-4 text-yellow-400">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-lg text-white/80">
                      <p>{item.content}</p>

                      <div className="mt-8 pt-6 border-t border-white/10">
                        <div className="flex justify-between items-center text-base mb-2">
                          <span className="flex items-center">
                            <Zap
                              size={20}
                              className="mr-2 text-yellow-400"
                            />
                            Энергия
                          </span>
                          <span className="font-mono text-lg">
                            {item.energy}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-white/10">
                          <div className="flex items-center mb-4">
                            <Link
                              size={20}
                              className="text-yellow-400/70 mr-2"
                            />
                            <h4 className="text-base uppercase tracking-wider font-medium text-yellow-400/70">
                              Связанные этапы
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem =
                                timelineData.find(
                                  (i) => i.id === relatedId
                                );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-12 px-4 py-2 text-base rounded-none border-yellow-400/20 bg-transparent hover:bg-yellow-400/10 text-white/80 hover:text-yellow-400 transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={16}
                                    className="ml-2 text-yellow-400/60"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}