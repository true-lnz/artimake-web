import styles from "./mobile-app-page.module.css";
import Image from "next/image";

const features = [
  ["Save the moment", "Post your very first breath, the present, and then beyond"],
  [
    "See what’s left",
    "Your crisis view leaves you reeling with the reality that life is not forever",
  ],
  ["Know yourself", "Understand your life, the passing of time, and your origin story"],
  ["Slow time down", "You’ve lived a lot and have so much more to live"],
] as const;

const appStoreUrl = "https://apps.apple.com/us/app/cronicle/id6751658893";

export default function MobileAppPage() {
  return (
    <div className={styles.page}>
      <a
        className={styles.qrDock}
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scan or tap to download Cronicle on the App Store"
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
          <span className={styles.underlined}>App Store</span> ↗
        </span>
      </a>

      <Image
        className={styles.wordmark}
        src="/icons/headerlogo.svg"
        alt="Cronicle"
        width={140}
        height={22}
        priority
      />
      <h1 className={styles.hero}>One day you’ll be glad you kept this.</h1>
      <p className={styles.subhero}>Your private existential life calendar.</p>
      <AppStoreLink className={styles.topStore} />

      <div className={styles.phone}>
        <div className={styles.phoneScreen}>
          <video
            src="/images/videojuly.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Cronicle app"
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
        Founded with the belief that reconnecting you to what matters in the noise of today is a
        mission worth embarking on.
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

      <h2 className={styles.cta}>Reconnect to what matters</h2>
      <AppStoreLink />
      <nav className={styles.footerLinks} aria-label="Social links">
        <a href="https://www.youtube.com/@getcronicleme" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
        <a href="https://www.tiktok.com/@trycronicle" target="_blank" rel="noopener noreferrer">
          TikTok
        </a>
        <a href="https://www.instagram.com/cronicle.me/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="mailto:hello@cronicle.me">Email</a>
      </nav>
      <div className={styles.bottomMark} aria-hidden="true">
        <Image src="/images/footer.svg" alt="" width={1440} height={307} />
      </div>
      <div className={styles.footerBlur} aria-hidden="true" />
      <div className={styles.footerFade} aria-hidden="true" />
    </div>
  );
}

function AppStoreLink({ className = "" }: { className?: string }) {
  return (
    <a
      className={`${styles.appStore} ${className}`}
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Get it on the App Store
    </a>
  );
}
