import { FunctionComponent } from "react";
import styles from "./Desktop1.module.css";
const Desktop1: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.desktop1Child} />
      <div className={styles.desktop1Item} />
      <code className={styles.div}>
        <div className={styles.search}>Search...</div>
      </code>
      <code className={styles.div1}>
        <div className={styles.search}>When did ww2 start?</div>
      </code>
      <code className={styles.div2}>
        <div className={styles.soThenWhen}>So then when did ww1 start?</div>
      </code>
      <code className={styles.div3}>
        <div className={styles.soThenWhen}>WW1 started in 1914.</div>
      </code>
      <code className={styles.div4}>
        <div className={styles.worldWar2}>World war 2 started in 1939.</div>
      </code>
      <button className={styles.div5} />
      <button className={styles.explain}>explain</button>
      <div className={styles.heroSection}>
        <header className={styles.topHeader}>
          <img
            className={styles.screenshot202305102036001}
            alt=""
            src="/screenshot-20230510-203600-1@2x.png"
          />
        </header>
      </div>
    </div>
  );
};

export default Desktop1;
