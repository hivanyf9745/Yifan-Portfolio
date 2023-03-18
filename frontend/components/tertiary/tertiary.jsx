import styles from "./tertiary.module.css";
import Link from "next/link";

const TertiaryPage = ({ secondary, loadedPost, tertiary }) => {
  return (
    <section
      id='tertiary-list'
      className={`${styles.showcaseContainer} container`}>
      <ul
        className={`d-flex justify-content-between align-items-center ${styles.libraryList}`}>
        {loadedPost.map((loaded, idx) => {
          return (
            <li key={idx} className={styles.listItem}>
              <Link
                href={`/${secondary}/${tertiary}/${loaded.slug}`}
                className={styles.itemLink}>
                {loaded.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TertiaryPage;
