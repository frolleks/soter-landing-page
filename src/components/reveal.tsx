"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "cn";

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // ponytail: fixed viewport band, doesn't adapt to sticky-header height
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "-15% 0px -15% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 scale-95 transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:scale-100 motion-reduce:transition-none",
        visible && "opacity-100 scale-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
