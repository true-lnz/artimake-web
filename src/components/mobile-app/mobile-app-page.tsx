import Image from "next/image";
import Icons from "../global/icons";
import styles from "./mobile-app-page.module.css";
import Link from "next/link";

const features = [
  [
    "Всё важное — перед глазами",
    "Приложение показывает, что кресло видит прямо сейчас: текущую посадку, отклонения и состояние подключения",
  ],
  [
    "Подсказки, а не поток уведомлений",
    "Настройте чувствительность напоминаний под себя и получайте обратную связь в подходящий момент",
  ],
  [
    "Понятная статистика",
    "История рабочей сессии помогает заметить, как вы сидите в течение дня, а не только в отдельный момент",
  ],
  [
    "Ваши данные остаются вашими",
    "Приложение работает без аккаунта, а данные о посадке и настройки хранятся локально на телефоне",
  ],
] as const;

const ruStoreUrl = "https://www.rustore.ru/catalog/app/com.advancedsolutionsdevelopers.smartchair";
const appStoreUrl = "https://apps.apple.com/us/app/cronicle/id6751658893";

export default function MobileAppPage() {
  return (
    <div className={styles.page}>
      <a
        className={styles.qrDock}
        href={ruStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Сканируйте QR-код или нажмите, чтобы скачать приложение в RuStore"
      >
        <Image
          className={styles.qr}
          src="/images/qr.svg"
          alt=""
          width={164}
          height={164}
          aria-hidden="true"
        />
        <span className={styles.qrCaption}>
          <span className={styles.underlined}>RuStore</span> ↗
        </span>
      </a>

      <Link href="/" aria-label="Перейти на главную страницу Артимэйк">
        <Image
          className={styles.wordmark}
          src="/icons/headerlogo.svg"
          alt="Артимэйк"
          width={160}
          height={25}
          priority
        />
      </Link>
      <h1 className={styles.hero}>Кресло даёт обратную связь. Приложение помогает её понять.</h1>
      <p className={styles.subhero}>
        Познакомьтесь с приложением Artimake — понятная обратная связь о посадке, персональные
        <br></br>
        напоминания и статистика рабочего дня прямо в вашем смартфоне.
      </p>
      <StoreLinks className={styles.topStore} />

      <div className={styles.phone}>
        <div className={styles.phoneScreen}>
          <video
            src="/videos/demo.webm"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Демонстрация приложения Артимэйк"
          />
        </div>
        <Image
          className={styles.phoneFrame}
          src="/images/17proframe.svg"
          alt=""
          width={480}
          height={1015}
          aria-hidden="true"
        />
      </div>

      <p className={styles.mission}>
        Кресло отслеживает положение тела с помощью встроенных датчиков, а приложение помогает
        разобраться в этих данных. Здесь можно увидеть, как проходит рабочая сессия, получить
        напоминание об отклонении от настроенной посадки или вовремя сделать перерыв.
      </p>

      <section className={styles.featureBand}>
        <Image
          className={styles.flower}
          src="/images/giantflower.png"
          alt=""
          width={1440}
          height={2489}
          aria-hidden="true"
        />
        <div className={styles.features}>
          {features.map(([title, description]) => (
            <div className={styles.feature} key={title}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <h2 className={styles.cta}>Приложение «Артимэйк» — для Android и iPhone</h2>
      <StoreLinks />
      <nav className={styles.footerLinks} aria-label="Навигация">
        <a href="/#top">На главную</a>
        <a href="/#features">Возможности</a>
        <a href="/#where-to-buy">Где купить</a>
        <a href="/contacts">Контакты</a>
      </nav>
      <div className={styles.bottomMark} aria-hidden="true">
        <Image src="/images/footer.svg" alt="" width={1440} height={307} />
      </div>
      <div className={styles.footerBlur} aria-hidden="true" />
      <div className={styles.footerFade} aria-hidden="true" />
    </div>
  );
}

function StoreLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.storeLinks} ${className}`}>
      <a className={styles.appStore} href={ruStoreUrl} target="_blank" rel="noopener noreferrer">
        <Icons.rustore aria-hidden="true" />
        Скачать в RuStore
      </a>
      <a className={styles.appStore} href={appStoreUrl} target="_blank" rel="noopener noreferrer">
        <Icons.apple aria-hidden="true" />
        Скачать в App Store
      </a>
    </div>
  );
}
