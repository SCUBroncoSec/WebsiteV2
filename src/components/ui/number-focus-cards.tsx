"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type Item = {
  title: string;
  number: number;
  icon?: string;
  desc?: string;
};

const NumberCard = React.memo(
  ({
    item,
    index,
    hovered,
    setHovered,
  }: {
    item: Item;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState(0);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              obs.disconnect();
            }
          });
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, []);

    useEffect(() => {
      if (!visible) return;
      let rafId: number;
      let start: number | null = null;
      const duration = 1000;
      const target = Math.max(0, Math.floor(Number(item.number) || 0));

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setValue(Math.floor(progress * target));
        if (progress < 1) rafId = requestAnimationFrame(step);
        else setValue(target);
      };

      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    }, [visible, item.number]);

    const rows = 10;
    const cols = 10;

    return (
      <div
        ref={ref}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "number-card rounded-lg relative bg-neutral-900 overflow-hidden h-80 md:h-70 w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "" /*"blur-sm scale-[0.95]" NO BLUR HERE.*/,
          hovered === index && "hovering"
        )}
      >
        {/* Large icon (fills card) */}
        {item.icon && (
          <img
            src={item.icon}
            alt={item.title}
            className="large-icon absolute inset-0 w-full h-full object-cover z-0 p-10"
            style={{
              transition: "opacity 1000ms ease",
              opacity: hovered === index ? 0 : 1,
            }}
          />
        )}

        {/* Grid of small icons (fills card) */}
        {item.icon && hovered === index && (
          <div className="icon-grid absolute inset-0 pointer-events-none">
            {Array.from({ length: rows * cols }).map((_, i) => {
              const r = Math.floor(i / cols);
              const c = i % cols;
              const delay = (r * cols + c) * 0; // decision: SET TO 0
              return (
                <div
                  key={i}
                  className="grid-cell"
                  style={{
                    width: `${200 / cols}%`,
                    height: `${200 / rows}%`,
                    left: `${(c * 200) / cols}%`,
                    top: `${(r * 200) / rows}%`,
                    position: "absolute",
                    padding: "2%",
                    boxSizing: "border-box",
                    animationDelay: `${delay}ms`,
                  }}
                >
                  <img
                    src={item.icon}
                    alt={`${item.title}-mini-${i}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Number centered */}
        <div className="flex items-center justify-center w-full h-full">
          <div className={cn("font-bold bg-clip-text text-transparent bg-linear-to-b from-stone-50 to-stone-400 z-99", hovered === index ? "text-6xl" : "text-6xl")} style={{transition: "font-size 100ms ease",}}>{value}</div>
        </div>

        {/* Title label shown on hover */}
        <div
          className={cn(
            "absolute inset-0 flex items-end py-8 px-4 transition-opacity duration-1000 z-20",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-200">
            {item.title}
          </div>
        </div>

        {/* Inline CSS for grid animation */}
        <style>{`
          .number-card .icon-grid { display: block; }
          .number-card .grid-cell { opacity: 0.9; display: flex; align-items: center; justify-content: center; }
          .number-card .grid-cell img { transform-origin: center; transition: transform 400ms ease, opacity 1000ms ease; }

          /* keyframes move towards top-right and rotate 45deg */
          @keyframes moveTR {
            0% { transform: translate3d(-250%,0%,0) rotate(-10deg); }
            100% { transform: translate3d(0%,-250%,0) rotate(-10deg); }
          }

          /* When hovering, animate each cell to move to top-right in an alternating loop */
          .number-card.hovering .grid-cell img {
            animation: moveTR 10s linear infinite;
          }

          /* Slight stagger by using animation-delay on the cell element */
          .number-card .grid-cell { will-change: transform, opacity; }
        `}</style>
      </div>
    );
  }
);

NumberCard.displayName = "NumberCard";

export function NumberFocusCards({ items }: { items: Item[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {items.map((item, index) => (
        <div key={item.title} className="w-full overflow-visible">
          <NumberCard item={item} index={index} hovered={hovered} setHovered={setHovered} />
          {item.desc && (
            <div
              className={cn(
                "mt-3 text-md text-white transition-all duration-300 ease-out transform origin-top",
                hovered === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              )}
            >
              {item.desc}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
