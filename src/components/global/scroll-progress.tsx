"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Progress } from "@/components/ui/progress";

export default function ScrollProgress() {
  const pathname = usePathname();
  const [value, setValue] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setValue(max > 0 ? (window.scrollY / max) * 100 : 100);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  if (pathname !== "/") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] h-1">
      <Progress value={value} className="h-full rounded-none bg-primary/10" />
    </div>
  );
}
