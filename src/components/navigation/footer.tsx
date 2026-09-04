import Image from "next/image";
import Link from "next/link";
import CompanyInfo from "../company/company-info";
import { FeedbackDialog } from "../feedback/feedback-dialog";
import AnimationContainer from "../global/animation-container";
import MaxWidthWrapper from "../global/max-width-wrapper";

const navigationLinks = [
  { label: "Наверх", href: "/#top" },
  { label: "Как работает", href: "/#how-it-works" },
  { label: "Возможности", href: "/#features" },
  { label: "Где купить", href: "/#where-to-buy" },
  { label: "О приложении", href: "/mobile-app" },
  { label: "Контакты", href: "/contacts" },
];

const Footer = () => (
  <footer className="relative bottom-0 w-full border-t border-border pb-8 pt-20">
    <MaxWidthWrapper>
      <AnimationContainer>
        <div className="flex w-full flex-col items-start justify-between gap-10 md:flex-row">
          <CompanyInfo />
          <div className="grid w-full gap-8 sm:grid-cols-2 md:max-w-md">
            <nav aria-label="Навигация">
              <h3 className="mb-3 font-semibold">Навигация</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h3 className="mb-3 font-semibold">Скачать приложение</h3>
              <div className="flex flex-col items-start gap-2">
                <Link href="/mobile-app" aria-label="Открыть страницу приложения">
                  <Image src="/icons/app-store-badge.svg" alt="App Store" width={135} height={40} />
                </Link>
                <Link href="/mobile-app" aria-label="Открыть страницу приложения">
                  <Image
                    src="/icons/google-play-badge.svg"
                    alt="Google Play"
                    width={135}
                    height={40}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full items-center justify-between border-t border-neutral-200 pt-6">
          <p className="text-start text-sm text-muted-foreground">
            © ООО «Артимэйк», {new Date().getFullYear()}
          </p>
          <FeedbackDialog />
        </div>
      </AnimationContainer>
    </MaxWidthWrapper>
  </footer>
);

export default Footer;
