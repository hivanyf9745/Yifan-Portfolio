import styles from "./quaternary.module.css";
import Image from "next/image";

const QuaternaryPage = ({ loadedPost }) => {
  // console.log(loadedPost);

  return (
    <section className={`container ${styles.quaternaryContainer}`}>
      <div
        className={styles.headerImage}
        style={{
          backgroundImage: `linear-gradient(
        to bottom,
        rgba(60, 60, 60, 0%),
        rgba(60, 60, 60, 100%)
      ),
      url("${loadedPost[0].mainImage}")`,
        }}
      />
      <div className='container'>
        <h1 className={styles.postTitle}>{loadedPost[0].title}</h1>
      </div>
    </section>
  );
};

export default QuaternaryPage;
