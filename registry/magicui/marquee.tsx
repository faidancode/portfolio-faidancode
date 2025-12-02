"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";

export type MarqueeProps = React.HTMLAttributes<HTMLDivElement> & {
  reverse?: boolean;
  pauseOnHover?: boolean;
};

export const Marquee = forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      children,
      className,
      reverse = false,
      pauseOnHover = false,
      style,
      ...props
    },
    ref
  ) => {
    const [isPaused, setIsPaused] = useState(false);

    return (
      <div
        ref={ref}
        className={cn(
          "flex min-w-full items-center gap-8 whitespace-nowrap",
          className
        )}
        style={{
          ...style,
          animationName: reverse ? "marqueeReverse" : "marquee",
          animationDuration: "var(--duration, 30s)",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: pauseOnHover && isPaused ? "paused" : "running",
        }}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Marquee.displayName = "Marquee";
