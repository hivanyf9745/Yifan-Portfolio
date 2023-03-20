import styles from "./banner.module.css";
import Image from "next/image";
// import { useEffect, useState } from "react";

const Banner = () => {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.banner}>
        <div className={styles.gear}>
          <Image src='imgs/gear-component.svg' alt='gear-component' fill />
        </div>
        <Image
          src='imgs/background-banner.svg'
          alt='background-banner'
          fill
          priority
        />
      </div>
      <div className={styles.heroContainer}>
        <h2
          className={`${styles.hero} ${styles.layers} ${styles.glitch}`}
          data-text='IVANHUANG'>
          IVAN HUANG
        </h2>
      </div>
    </section>
  );
};

export default Banner;
