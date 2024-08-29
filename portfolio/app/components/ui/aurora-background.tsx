

"use client";
import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-blue-900 text-slate-200 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--dark-blue-gradient:repeating-linear-gradient(100deg,rgba(10,30,60,0.8)_0%,rgba(10,30,60,0.8)_7%,rgba(10,30,60,0.5)_10%,rgba(10,30,60,0.5)_12%,rgba(10,30,60,0.8)_16%)]
            [--aurora:repeating-linear-gradient(100deg,rgba(30,64,110,0.5)_10%,rgba(72,100,150,0.5)_15%,rgba(50,90,140,0.5)_20%,rgba(80,110,160,0.5)_25%,rgba(40,80,130,0.5)_30%)]
            [background-image:var(--dark-blue-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[20px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-blue-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-soft-light
            pointer-events-none
            absolute -inset-[10px] opacity-70 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};