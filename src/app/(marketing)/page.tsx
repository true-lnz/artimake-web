import { AnimationContainer, Icons, MaxWidthWrapper } from "@/components";
import FaqSection, { faqStructuredData } from "@/components/faq/faq-section";
import AppCta from "@/components/mobile-app/app-cta";
import SupportBanner from "@/components/support/support-banner";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FEATURES, PLANS } from "@/constants";
import { cn } from "@/lib";
import { ArrowRightIcon, BluetoothIcon, CheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const baseDelay = 0.2;

  const howItWorksCards = [
    {
      title: "Подключите кресло к телефону",
      description:
        "Найдите совместимое кресло поблизости, подключите его по Bluetooth и быстро завершите первичную настройку.",
      className: "bg-muted text-[#262932]",
      visual: (
        <div className="relative mt-8 flex h-48 w-full items-center justify-center overflow-hidden rounded-[28px] bg-[#262932]">
          <div className="absolute h-36 w-36 rounded-full border border-[#34848C]/35" />
          <div className="absolute h-24 w-24 rounded-full border border-[#34848C]/40" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#34848C] shadow-lg">
            <BluetoothIcon className="h-8 w-8" />
          </div>
          <div className="absolute bottom-5 left-6 h-2 w-2 rounded-full bg-white/80" />
          <div className="absolute right-10 top-7 h-3 w-3 rounded-full bg-white/70" />
        </div>
      ),
    },
    {
      title: "Настройте комфортную посадку",
      description:
        "Пройдите калибровку, чтобы кресло запомнило удобное исходное положение и точнее замечало отклонения.",
      className: "bg-muted text-[#262932]",
      visual: (
        <div className="relative mt-8 flex h-48 w-full items-center justify-center overflow-hidden rounded-[28px] bg-[#262932]">
          <div className="w-44 rounded-2xl bg-white/90 p-4 shadow-lg">
            <div className="flex items-center justify-between text-xs font-semibold text-[#30231D]">
              <span>Калибровка</span>
              <span className="text-[#34848C]">Готово</span>
            </div>
            <div className="mt-5 h-2 rounded-full bg-[#E7D8D0]">
              <div className="h-2 w-4/5 rounded-full bg-[#34848C]" />
            </div>
            <div className="mt-3 flex justify-between text-[10px] text-[#7C6A60]">
              <span>Нейтральная поза</span>
              <span>80%</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Получайте обратную связь вовремя",
      description:
        "Отслеживайте посадку в реальном времени, получайте сигналы при отклонении и напоминания о перерывах.",
      className: "bg-muted text-[#262932]",
      visual: (
        <div className="relative mt-8 flex h-48 w-full items-center justify-center overflow-hidden rounded-[28px] bg-[#262932]">
          <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] font-semibold text-[#1F263B] shadow-lg">
            <span className="h-2 w-2 rounded-full bg-[#34848C]" />
            Пора сделать паузу
          </div>
          <Image
            src="/images/dashboard.png"
            alt="Статистика посадки Artimake"
            width={520}
            height={290}
            className="absolute bottom-[-58px] w-[235px] rounded-xl shadow-xl"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <MaxWidthWrapper className="pt-6">
        <SupportBanner compact />
      </MaxWidthWrapper>
      {/* hero */}
      <MaxWidthWrapper className="flex flex-col items-center w-full relative">
        <div className="flex flex-col items-center justify-center w-full py-20 text-center">
          <div className="flex items-center justify-center lg:gap-16 w-full absolute top-[15%] left-1/2 -translate-x-1/2 -z-10">
            <div className="w-52 h-52 rounded-full bg-orange-500 blur-[10rem] opacity-70 -z-10"></div>
            <div className="hidden lg:w-52 h-52 rounded-full bg-amber-500 blur-[10rem] opacity-70 -z-10"></div>
          </div>
          <h1 className="text-[#262932] py-6 text-4xl sm:text-6xl md:text-7xl font-semibold md:font-bold !leading-snug tracking-wide text-balance w-full">
            Умное кресло <br />{" "}
            <span className="bg-gradient-to-r from-primary to-amber-500 text-transparent bg-clip-text">
              Артимэйк
            </span>{" "}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl py-2">
            Мониторинг осанки, полезные напоминания
            <br></br>и статистика сидения — в единой системе без лишних устройств
          </p>
          <div className="flex flex-row md:flex-row items-center justify-center gap-4 mt-8 w-full">
            <Link href="/dashboard" className={buttonVariants()}>
              Купить в Ozon
              <ArrowRightIcon className="w-4 h-4 ml-1.5" />
            </Link>
            <Link href="#" className={buttonVariants({ variant: "black" })}>
              <Icons.apple className="w-4 h-4 mb-1" />
              <Icons.store className="w-4 h-4 mr-1.5" />
              Скачать приложение
            </Link>
          </div>
        </div>
        <div className="relative py-20 bg-transparent w-full mx-auto">
          <AnimationContainer delay={baseDelay + 0.3} className="flex items-center justify-center">
            <div className="absolute md:top-[20%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[10rem] animate-image-glow"></div>
            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl mx-auto flex items-center justify-center w-max">
              <Image
                src="/images/dashboard.png"
                alt="Dashboard"
                width={2560}
                height={1426}
                quality={100}
                priority
                className="rounded-md lg:rounded-xl mx-auto bg-foreground/10 ring-1 ring-border"
              />
            </div>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="py-8">
        <section id="how-it-works" className="overflow-hidden py-10">
          <div className="mx-auto flex w-full max-w-md flex-col justify-center py-8 text-start md:text-center">
            <h2 className="mt-6 text-3xl font-semibold font-heading text-[#262932] tracking-wide md:text-4xl">
              Как это <span className="text-gradient">работает</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Подключите кресло, настройте комфортную посадку и получайте своевременную обратную
              связь
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-3">
            {howItWorksCards.map(({ title, description, className, visual }, index) => (
              <AnimationContainer key={title} delay={baseDelay + 0.2 + index * 0.15}>
                <Link
                  href="/mobile-app"
                  className={`group flex min-h-[430px] cursor-pointer flex-col justify-between overflow-hidden rounded-[24px] p-5 transition-transform duration-300 hover:-translate-y-2 md:p-6 ${className}`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="max-w-[15ch] text-left text-xl font-semibold leading-tight tracking-wide">
                        {title}
                      </h3>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="block group-hover:animate-arrow-enter-250">
                          <ArrowRightIcon className="arrow-secondary h-5 w-5 -rotate-45" />
                        </span>
                      </span>
                    </div>
                    <p className="mt-4 max-w-sm text-left text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                  </div>
                  {visual}
                </Link>
              </AnimationContainer>
            ))}
          </div>
        </section>
      </MaxWidthWrapper>

      {/* features */}
      <MaxWidthWrapper id="features" className="py-10">
        <AnimationContainer className="mx-auto flex max-w-md flex-col justify-center py-8 text-start md:text-center">
          <h2 className="text-3xl md:text-4xl font-semibold font-heading text-[#262932] mt-6 tracking-wide">
            Возможности умного кресла <span className="text-gradient">Артимэйк</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Настройте кресло под себя и получайте понятную поддержку во время длительной работы
          </p>
        </AnimationContainer>
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-8 md:gap-x-8 w-full">
          {FEATURES.map((feature, index) => (
            <AnimationContainer
              key={feature.title}
              delay={0.15 + index * 0.08}
              className="group"
            >
              <div className="flex flex-col items-start">
                <feature.icon className="h-8 w-8 text-primary transition-transform duration-300 ease-out group-hover:-translate-y-1" />
                <h3 className="mt-4 text-lg font-medium font-heading">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground md:text-base">{feature.info}</p>
              </div>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="py-8">
        <section
          id="where-to-buy"
          className="rounded-xl border border-border bg-background/70 px-6 py-8 text-center shadow-sm sm:px-10"
        >
          <h2 className="text-2xl font-semibold tracking-wide text-[#262932]">Где купить</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            Раздел с информацией о точках продаж и доступных способах заказа готовится.
          </p>
        </section>
      </MaxWidthWrapper>

      {/* pricing */}
      <div className="hidden">
        <MaxWidthWrapper className="py-10">
          <div className="flex flex-col text-start md:text-center justify-center w-full py-8 max-w-md mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold font-heading text-[#262932] mt-6 tracking-wide">
              Choose a <span className="text-gradient">plan</span> that works for you
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Get started with our free plan or upgrade to a premium plan for additional features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-6 max-w-3xl px-0 lg:px-8 mx-auto w-full">
            {PLANS.map((plan, index) => (
              <AnimationContainer
                key={plan.name}
                delay={baseDelay + index / 5}
                className="flex flex-col w-full h-full"
              >
                <Card
                  className={cn(
                    "w-full h-full flex flex-col rounded-xl border-2 shadow-none",
                    plan.name === "Pro" ? "border-primary" : "border-border",
                  )}
                >
                  <CardHeader>
                    <CardTitle className="font-heading">{plan.name}</CardTitle>
                    <CardDescription>{plan.info}</CardDescription>
                    <h5 className="text-3xl md:text-4xl font-semibold font-heading pt-2">
                      ${plan.price}
                      <span className="text-sm text-muted-foreground font-normal">
                        {plan.name === "Pro" ? "(one time)" : ""}
                      </span>
                    </h5>
                  </CardHeader>
                  <CardContent className="w-full">
                    <ul className="flex flex-col items-start gap-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckIcon
                            className={cn(
                              "w-5 h-5",
                              plan.name === "Pro" ? "text-primary" : "text-foreground",
                            )}
                          />
                          <TooltipProvider>
                            <Tooltip delayDuration={0}>
                              <TooltipTrigger asChild>
                                <p
                                  className={cn(
                                    "text-sm text-muted-foreground",
                                    feature.tooltip &&
                                      "border-b border-dotted border-border cursor-pointer",
                                  )}
                                >
                                  {feature.text}
                                </p>
                              </TooltipTrigger>
                              {feature.tooltip && (
                                <TooltipContent>{feature.tooltip}</TooltipContent>
                              )}
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto w-full">
                    <Button asChild variant={plan.name === "Pro" ? "default" : "secondary"}>
                      <Link href={plan.btn.href} className="flex items-center w-full group">
                        {plan.btn.text}
                        <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimationContainer>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>

      {/* cta */}
      <div className="w-full overflow-hidden py-20">
        <MaxWidthWrapper className="py-0">
          <AppCta />
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <FaqSection />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqStructuredData,
            }),
          }}
        />
      </MaxWidthWrapper>
    </>
  );
};

export default HomePage;
