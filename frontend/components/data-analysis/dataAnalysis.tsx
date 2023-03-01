import Image from "next/image";
import styles from "./dataAnalysis.module.css";

const DataAnalysis = (props: { categories: string[] }) => {
  return (
    <section
      className={`${styles.container} d-flex justify-content-between align-items-center`}>
      <div>
        <Image
          className={styles.prototypeLeft}
          src='imgs/prototype-border-left.svg'
          alt='prototype-border'
          width={155}
          height={700}
        />
      </div>
      <div className={`${styles.square}`}>
        {/* These are the sections to divide into triangles */}
        <div className={styles.triangleLeft}></div>
        <div className={styles.triangleRight}></div>
        {/* These are the texts that I want to add */}
      </div>
      <div>
        <Image
          className={styles.prototypeRight}
          src='imgs/prototype-border-right.svg'
          alt='prototype-border'
          width={155}
          height={700}
        />
      </div>
    </section>
  );
};

export default DataAnalysis;
