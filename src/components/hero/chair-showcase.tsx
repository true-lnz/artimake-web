"use client";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Image from "next/image";
import { Activity, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

const chairs = [
  { src: "/images/chair-1.png", alt: "Умное кресло Artimake, вид спереди" },
  { src: "/images/chair-2.png", alt: "Умное кресло Artimake, вид сбоку" },
  { src: "/images/chair-3.png", alt: "Умное кресло Artimake, вид сзади" },
];
const labels = { upper: "Статистика сидения", lower: "Калибровка под вас" };

export default function ChairShowcase() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [pointer, setPointer] = useState<{ label: string; isUpper: boolean } | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 500, damping: 42, mass: 0.35 });
  const springY = useSpring(pointerY, { stiffness: 500, damping: 42, mass: 0.35 });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px), (pointer: coarse)");
    const update = () => setIsMobile(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (reduceMotion || isMobile) { setActive(0); return; }
    const timer = window.setInterval(() => setActive((index) => (index + 1) % chairs.length), 4200);
    return () => window.clearInterval(timer);
  }, [isMobile, reduceMotion]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (isMobile || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const y = event.clientY - bounds.top;
    pointerX.set(event.clientX - bounds.left);
    pointerY.set(y - 18);
    const isUpper = y < bounds.height * 0.48;
    setPointer({ isUpper, label: isUpper ? labels.upper : labels.lower });
  };

  return (
    <div className="group relative mx-auto h-[clamp(380px,68vw,720px)] w-full max-w-5xl overflow-visible sm:h-[clamp(480px,68vw,720px)]" onPointerMove={handlePointerMove} onPointerLeave={() => setPointer(null)}>
      <div aria-hidden="true" className="absolute bottom-[5%] left-1/2 h-8 w-[34%] -translate-x-1/2 rounded-[50%] bg-[#262932]/10 blur-2xl" />
      <div className="absolute inset-0 cursor-crosshair">
        {chairs.map((chair, index) => (
          <motion.div key={chair.src} className="absolute inset-0 flex items-center justify-center" initial={false} animate={index === active ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.985, filter: "blur(8px)" }} transition={{ duration: reduceMotion ? 0 : 1.05, ease: [0.22, 1, 0.36, 1] }} aria-hidden={index !== active}>
            <Image src={chair.src} alt={chair.alt} width={900} height={900} priority={index === 0} draggable={false} className="h-[116%] w-[116%] select-none object-contain drop-shadow-[0_28px_30px_rgba(38,41,50,0.16)]" />
          </motion.div>
        ))}
      </div>
      <motion.div className="pointer-events-none absolute z-20 hidden -translate-x-1/2 -translate-y-full items-center gap-2 rounded-full border border-white/80 bg-white/95 px-4 py-2.5 text-xs font-medium text-[#262932] shadow-[0_14px_32px_rgba(38,41,50,0.16)] backdrop-blur-md sm:flex" initial={false} style={{ x: springX, y: springY }} animate={{ opacity: pointer ? 1 : 0, scale: pointer ? 1 : 0.92 }} transition={{ opacity: { duration: 0.18 }, scale: { duration: 0.18 } }}>
        {pointer?.isUpper ? <Activity className="h-4 w-4 text-primary" /> : <SlidersHorizontal className="h-4 w-4 text-primary" />}
        {pointer?.label}
      </motion.div>
    </div>
  );
}
