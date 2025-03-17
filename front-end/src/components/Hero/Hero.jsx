import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import styles from "./Hero.module.css";

export function Hero({ heroImg }) {
  return (
    <div
      style={{ backgroundImage: `url(${heroImg})` }}
      className={styles.heroBackground}
    >
      <CenteredContent>
        <div className={styles.heroBox}>
          <h2>Letnie promocje do -70%!</h2>
          <p>Tylko najlepsze okazje!</p>
          <FullWidthButton>Sprawdź produkty!</FullWidthButton>
        </div>
      </CenteredContent>
    </div>
  );
}
