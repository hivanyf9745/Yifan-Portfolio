import styles from "./banner.module.css";

const Banner = () => {
  return (
    <section className={`${styles.bannerContainer} container-fluid`}>
      <img
        src='imgs/background-banner.svg'
        alt='background-banner'
        className='img-fluid'
        width='100%'
        height='auto'
      />
      <img
        src='imgs/gear-component.svg'
        alt='gear-component'
        className={`img-fluid ${styles.gear}`}
      />
      <div className={`${styles.heroContainer}`}>
        {/* <h2
          className={`${styles.hero} ${styles.layers} ${styles.glitch}`}
          data-text='IVANHUANG'>
          IVAN HUANG
        </h2> */}
      </div>
    </section>
  );
};

export default Banner;
