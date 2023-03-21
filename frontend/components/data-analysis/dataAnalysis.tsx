import Image from "next/image";
import Link from "next/link";
import styles from "./dataAnalysis.module.css";

const DataAnalysis = (props: { categories: string[] }) => {
  return (
    <section
      className={`${styles.container} d-flex justify-content-center justify-content-lg-between align-items-center`}
      id='data-analysis'>
      <div className="d-none d-lg-block">
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
        <div className={styles.triangleLeft} />
        <div className={styles.triangleRight} />

        {/* These are the texts that I want to add */}
        <Link
          href='/data-analysis/information-retrieval-system-using-pyterrier-react-js-and-node'
          className={styles.detailLeft}>
          <h2>Information Retrieval</h2>
          <Image src='imgs/loading.svg' alt='loading' width={467} height={83} />
        </Link>

        <Link
          href='/data-analysis/miami-university-crowd-index-using-d3-to-display-real-time-library-crowdedness'
          className={styles.detailRight}>
          <Image
            src='imgs/IoT.svg'
            alt='Internet of Things'
            width={343}
            height={91}
            className={styles.IoT}
          />
          <h2>Miami Univ. Crowd Index</h2>
        </Link>
      </div>

      <div className="d-none d-lg-block">
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
