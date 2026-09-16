"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon, HeartPulse, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DownloadAppButton from "./download-app-button";

const telemetry = [
  { icon: HeartPulse, label: "Комфорт посадки", value: "92%", color: "#E1A071" },
  { icon: Sparkles, label: "Персональные советы", value: "Сегодня", color: "#34848C" },
];

export default function AppCta() {
  const reduceMotion = useReducedMotion();
  const transition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="relative mx-auto flex min-h-[760px] w-full max-w-screen-xl items-center overflow-hidden rounded-[24px] bg-[#1D2028] px-5 py-8 text-[#F6F4EE] shadow-[0_18px_42px_-6px_rgba(18,20,26,0.24)] sm:min-h-[440px] sm:rounded-[34px] sm:px-8 sm:py-6 lg:min-h-[400px] lg:overflow-visible lg:px-12 lg:py-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[34px]"
      >
        <div className="absolute right-[6%] top-[8%] h-64 w-64 rounded-full bg-[#34848C]/20 blur-[5rem]" />
        <div className="absolute bottom-[7%] left-[36%] h-56 w-56 rounded-full bg-[#E1A071]/16 blur-[5rem]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-screen-xl items-center gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="order-2 flex min-w-0 max-w-full flex-col lg:order-1">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={transition}
          >
            <h2 className="max-w-full break-words text-[29px] font-semibold leading-[1.14] tracking-wide sm:max-w-[17ch] sm:text-[44px] sm:leading-[1.08]">
              Управляйте креслом в&nbsp;приложении
            </h2>
            <p className="mt-5 max-w-full break-words text-[15px] leading-6 text-[#DADDE6] sm:max-w-lg sm:text-base sm:leading-7">
              Подключайте умное кресло, отслеживайте посадку и&nbsp;получайте персональные подсказки
              в&nbsp;приложении «Артимэйк».
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...transition, delay: 0.12 }}
          >
            <Link
              href="/mobile-app"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 w-full rounded-full bg-[#34848C] px-6 text-base text-[#F6F4EE] shadow-[0_12px_14px_rgba(18,20,26,0.18)] hover:bg-[#43959d] sm:w-auto",
              )}
            >
              О приложении
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <DownloadAppButton
              variant="ghost"
              size="lg"
              className="h-14 w-full rounded-full border border-white/15 px-6 text-[#F6F4EE] hover:bg-white/10 hover:text-white sm:w-auto"
            />
          </motion.div>
        </div>

        <div className="relative order-1 grid min-h-[330px] min-w-0 place-items-center sm:min-h-[300px] lg:absolute lg:inset-y-0 lg:right-0 lg:order-2 lg:min-h-0 lg:w-[48%]">
          <div
            aria-hidden="true"
            className="absolute h-64 w-64 rounded-full border border-[#34848C]/35 sm:h-80 sm:w-80"
          />
          <motion.div
            className="relative z-10 h-[360px] w-[320px] sm:h-[500px] sm:w-[400px] lg:-my-[300px] lg:h-[600px] lg:w-[470px]"
            initial={reduceMotion ? false : { opacity: 0, y: 28, rotate: 2 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={transition}
          >
            <Image
              src="/images/mockup-phone.png"
              alt="Приложение Artimake на смартфоне"
              fill
              sizes="(max-width: 639px) 86vw, 360px"
              draggable={false}
              className="select-none object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.32)]"
              priority
            />
          </motion.div>
          {telemetry.map(({ icon: Icon, label, value, color }, index) => (
            <motion.div
              key={label}
              className="absolute z-20 hidden w-44 rounded-2xl border border-white/10 bg-[#2D3039]/90 p-3 shadow-[0_12px_28px_rgba(18,20,26,0.18)] backdrop-blur-md sm:block"
              style={
                index === 0
                  ? { right: "4%", top: "1%" }
                  : index === 1
                    ? { left: "4%", top: "78%" }
                    : { left: "4%", bottom: "8%" }
              }
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.25 + index * 0.1 }}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${color}22`, color }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-[11px] font-medium text-[#C4C0B5]">{value}</span>
              </div>
              <p className="mt-2 text-xs text-[#DADDE6]">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
