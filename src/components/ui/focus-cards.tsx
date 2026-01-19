"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    desc,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    desc?: string;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-neutral-900 overflow-hidden h-80 md:h-70 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.95]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/0 flex items-end py-8 px-4 transition-opacity duration-300", /* decision: bg-black/0 for no darkness */
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-100">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  desc?: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <div key={card.title} className="w-full overflow-visible">
          <Card
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            desc={card.desc}
          />
          {/* Desc logic goes here so it can render outside the card */}
          {card.desc && (
            <div
              className={cn(
                "mt-3 text-lg text-white transition-all duration-300 ease-out transform origin-top",
                hovered === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              )}
            >
              {card.desc}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
