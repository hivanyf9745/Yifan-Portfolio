import Image from "next/image";
import styles from "./frontend.module.css";

const Frontend = (props: { categories: string[] }) => {
  return (
    <section
      className={`${styles.container} d-flex justify-content-between align-items-center`}>
      <div className={styles.leftSide}>
        <Image
          src='imgs/Frontend-background.svg'
          alt='frontend-background'
          width={820}
          height={740}
        />
      </div>
      <Image
        src='imgs/frontend-skillset.svg'
        alt='frontend-skillset'
        width={584}
        height={567}
      />
    </section>
  );
};

export default Frontend;
