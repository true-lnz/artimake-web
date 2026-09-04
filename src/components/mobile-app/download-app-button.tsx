"use client";

import { Button, buttonVariants, type ButtonProps } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib";
import Image from "next/image";
import { useState } from "react";

export const appStoreLinks = {
  appStore: "https://apps.apple.com/us/app/cronicle/id6751658893",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.advancedsolutionsdevelopers.smartchair",
} as const;

function openStore(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function getMobileStore() {
  const userAgent = navigator.userAgent;
  const isIOS =
    /iPhone|iPad|iPod/.test(userAgent) ||
    (/Macintosh/.test(userAgent) && navigator.maxTouchPoints > 1);

  if (isIOS) return appStoreLinks.appStore;
  if (/Android/.test(userAgent)) return appStoreLinks.googlePlay;
  return null;
}

interface DownloadAppButtonProps {
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}

export default function DownloadAppButton({
  className,
  variant = "secondary",
  size = "default",
}: DownloadAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const storeUrl = getMobileStore();
    if (storeUrl) {
      openStore(storeUrl);
      return;
    }
    setIsOpen(true);
  };

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size={size}
        className={className}
        onClick={handleClick}
      >
        Скачать приложение
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Скачать приложение</DialogTitle>
          </DialogHeader>
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="flex flex-col gap-2">
              <a
                className={cn(buttonVariants({ variant: "outline" }), "h-auto p-1")}
                href={appStoreLinks.appStore}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/icons/app-store-badge.svg" alt="App Store" width={135} height={40} />
              </a>
              <a
                className={cn(buttonVariants({ variant: "outline" }), "h-auto p-1")}
                href={appStoreLinks.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/google-play-badge.svg"
                  alt="Google Play"
                  width={135}
                  height={40}
                />
              </a>
            </div>
            <Image
              src="/images/qr.svg"
              alt="QR-код для скачивания приложения"
              width={120}
              height={120}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
