import PlanetAnimation from "../solarPlanet";
import styles from "./homeMain.module.css";
export default function HomeMain() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.logoDiv}>LOGO</div>
        <div className={styles.menuDiv}>
          <p>Trade</p>
          <p>Earn</p>
          <p>Info</p>
          <p>Game</p>
        </div>
        <div className={styles.buttonsDiv}>
          <button>START</button>
          <button>LAUNCH</button>
        </div>
      </div>
      <div className={styles.firstContainer}></div>
      <div style={{
        position: "relative",
      }}>
        <PlanetAnimation />
      </div>
    </div>
  );
}
