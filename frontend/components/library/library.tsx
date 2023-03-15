import styles from "./library.module.css";

const LibraryRelated = (props: { categories: string[] }) => {
  const { categories } = props;

  const filteredCategories = categories.filter(
    (ele: string) =>
      ele === "showcases" ||
      ele === "degree-information" ||
      ele === "classes-taken" ||
      ele === "professional-services"
  );

  return (
    <section className={`container ${styles.container}`} id='library-related'>
      <div className='row justify-content-between gy-5'>
        {filteredCategories.map((category: string, idx: number) => {
          if (idx % 2 == 0) {
            return (
              <div
                key={idx}
                className={`${styles.libraryCats} col-12 col-xxl-4 mx-5 ms-xxl-5 ps-5`}>
                <h2 className={`${styles.yellow_title_numbers}`}>0{idx + 1}</h2>
                <h2 className={`${styles.yellow_title_labels} text-break`}>
                  {category}
                </h2>
              </div>
            );
          } else {
            return (
              <div
                key={idx}
                className={`${styles.libraryCats} col-12 col-xxl-4 mx-5 me-xxl-5 ps-5`}>
                <h2 className={`${styles.yellow_title_numbers}`}>0{idx + 1}</h2>
                <h2 className={`${styles.yellow_title_labels}`}>{category}</h2>
              </div>
            );
          }
        })}
      </div>
      <div className={`d-flex flex-column justify-content-between pt-5 ${styles.libraryContainer}`}>
        <div className={styles.extended}>
          <p className={styles.metadata}>MARC 21 RDA/AACR2 LCSH</p>
          <h3 className={styles.libraryRelated}>LIBRARY RELATED</h3>
        </div>
        <div className={styles.square}>
          <p className={styles.date}>DATE</p>
          <h3 className={styles.detailedDate}>2021.09-2023.05</h3>
        </div>
        <div className={styles.extended}></div>
      </div>
    </section>
  );
};

export default LibraryRelated;
