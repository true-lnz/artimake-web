import { Providers } from "@/components";
import { dmSans, inter } from "@/constants";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";
import { DM_Sans } from "next/font/google";
import Script from "next/script";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Script id="safari-motion-fallback" strategy="beforeInteractive">
        {`(() => {
  const userAgent = navigator.userAgent;
  const isSafari =
    /Safari/i.test(userAgent) &&
    !/Chrome|CriOS|Chromium|Android|FxiOS|EdgiOS|OPiOS/i.test(userAgent);
  if (isSafari) document.documentElement.classList.add("safari-motion-fallback");
})();`}
      </Script>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground !font-heading antialiased",
          inter.variable,
          dmSans.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
