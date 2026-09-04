import Image from "next/image";
import styles from "./support-banner.module.css";

interface SupportBannerProps {
  compact?: boolean;
}

export default function SupportBanner({ compact = false }: SupportBannerProps) {
  return (
    <aside className={`${styles.banner} ${compact ? styles.compact : ""}`}>
      <div className={styles.logos}>
        <Image src="/images/bottom-fond.png" alt="Фонд" width={1140} height={552} />
        <Image src="/images/bottom-fond2.png" alt="Студенческий стартап" width={300} height={200} />
      </div>
      <p className={styles.text}>
        Проект реализован при поддержке Фонда содействия инновациям в рамках программы «Студенческий
        стартап» мероприятия «Платформа университетского технологического предпринимательства»
        федерального проекта «Технологии».
      </p>
    </aside>
  );
}
