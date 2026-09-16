"use client";
import Link from "next/link";
import { Menu, ArrowRightIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import Icons from "../global/icons";
import MaxWidthWrapper from "../global/max-width-wrapper";
import { buttonVariants } from "../ui/button";
import DownloadAppButton from "../mobile-app/download-app-button";

const links = [
  { label: "Как это работает", href: "/#how-it-works" },
  { label: "Возможности", href: "/#features" },
  { label: "Где купить", href: "/#where-to-buy" },
  { label: "О приложении", href: "/mobile-app" },
  { label: "Контакты", href: "/contacts" },
];

export default function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 h-14 w-full border-b border-border/40 bg-background/70 backdrop-blur-md">
      <MaxWidthWrapper>
        <div className="flex h-full w-full items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm"><Icons.logo className="h-8 w-8" /><span className="uppercase">Артимэйк</span><Separator orientation="vertical" className="hidden h-4 md:block" /><span className="hidden text-gray-400 md:block">Умные кресла</span></Link>
          <div className="hidden items-center gap-4 sm:flex"><DownloadAppButton variant="ghost" size="sm" /><Link href="/#where-to-buy" className={buttonVariants({ size: "sm" })}>Купить в Ozon<ArrowRightIcon className="ml-1.5 h-4 w-4" /></Link></div>
          <Drawer direction="right">
            <DrawerTrigger asChild><Button variant="ghost" size="icon" className="h-10 w-10 sm:hidden" aria-label="Открыть меню"><Menu className="h-5 w-5" /></Button></DrawerTrigger>
            <DrawerContent className="inset-y-0 right-0 h-dvh w-[min(88vw,360px)] border-l border-border sm:hidden">
              <div className="flex h-full flex-col bg-background px-6 pb-8 pt-6">
                <div className="border-b border-border pb-5" aria-hidden="true" />
                <DrawerTitle className="sr-only">Мобильное меню Артимэйк</DrawerTitle>
                <DrawerDescription className="sr-only">Навигация по сайту Артимэйк</DrawerDescription>
                <nav className="flex flex-col gap-1 py-6" aria-label="Мобильная навигация">{links.map((link) => <DrawerClose asChild key={link.href}><Link href={link.href} className="rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-muted">{link.label}</Link></DrawerClose>)}</nav>
                <div className="mt-auto border-t border-border pt-6"><DrawerClose asChild><Link href="/#where-to-buy" className={`${buttonVariants({ size: "lg" })} w-full rounded-full`}>Купить в Ozon<ArrowRightIcon className="ml-2 h-4 w-4" /></Link></DrawerClose></div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
