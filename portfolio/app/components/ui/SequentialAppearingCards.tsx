"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

export const SequentialAppearingCards = ({
  items,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  className?: string;
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % items.length);
        setIsVisible(true);
      }, 1000); // Wait for 1 second after fade out before showing next card
    }, 7000); // 6 seconds visible + 1 second transition

    return () => clearInterval(intervalId);
  }, [items.length]);

  const currentItem = items[currentCardIndex];

  return (
    <div className={cn("relative z-20 w-full overflow-hidden", className)}>
      <div
        className={cn(
          "w-full md:w-[80vw] lg:w-[60vw] mx-auto transition-opacity duration-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div
          className="relative rounded-2xl border border-slate-800 p-5 md:p-8"
          style={{
            background: 'rgb(2,0,36)',
            backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%)'
          }}
        >
          <blockquote className="flex flex-col justify-between h-full">
            <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-gray-200 font-normal mb-4">
              {currentItem.quote}
            </span>
            <div className="relative z-20 flex flex-row items-center">
              <span className="flex items-center gap-4">
                <div className="w-10 h-10">
                  <img src="/c.svg" alt="" className="w-full h-full object-contain"/>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl leading-[1.6] text-white font-bold">
                    {currentItem.name}
                  </span>
                  <span className="text-sm md:text-base leading-[1.6] text-gray-400 font-medium">
                    {currentItem.title}
                  </span>
                </div>
              </span>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};