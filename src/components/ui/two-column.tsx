"use client";

import React from "react";
import { cn } from "@/lib/utils";


export function TwoColumn({
  img,
  imgAlt,
  children,
}: {
  img: string;
  imgAlt?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full")}>
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={img}
          alt={imgAlt ?? ""}
          className="w-full h-auto object-contain block"
        />
      </div>

      <div className="flex flex-col justify-center h-full">
        <div className="prose prose-invert max-w-none text-white">{children}</div>
      </div>
    </div>
  );
}

export default React.memo(TwoColumn);

TwoColumn.displayName = "TwoColumn";
