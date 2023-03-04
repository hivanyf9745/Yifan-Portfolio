import styles from "./library.module.css";

const LibraryRelated = (props: { categories: string[] }) => {
  const { categories } = props;

  const filteredCategories = categories.filter(
    (ele: string) =>
      ele === "Showcases" ||
      ele === "Degree Information" ||
      ele === "Classes Taken" ||
      ele === "Professional Services"
  );

  return (
    <section className={`container ${styles.container}`}>
      <div className="row justify-content-between gy-5">
        {filteredCategories.map((category: string, idx: number) => {
          if (idx % 2 == 0) {
            return (
              <div key={idx} className={`${styles.libraryCats} col-12 col-xxl-4 mx-5 ms-xxl-5 ps-5`}>
                <h2 className={`${styles.yellow_title_numbers}`}>0{idx + 1}</h2>
                <h2 className={`${styles.yellow_title_labels} text-break`}>{category}</h2>
              </div>
            );
          } else {
            return (
              <div key={idx} className={`${styles.libraryCats} col-12 col-xxl-4 mx-5 me-xxl-5 ps-5`}>
                <h2 className={`${styles.yellow_title_numbers}`}>0{idx + 1}</h2>
                <h2 className={`${styles.yellow_title_labels} text-break`}>{category}</h2>
              </div>
            );
          }
        })}
      </div>
      <div
        className={`d-flex flex-column justify-content-between pt-5 ${styles.libraryContainer}`}
      >
        <div className={`${styles.extended} d-flex flex-column-reverse align-items-center`}>
          <p className="text-uppercase" id={styles.marc21}>Marc21 RDA/AACR2 LCSH</p>
          <p className="text-uppercase" id={styles.lr}>Library Related</p>
          </div>
        <div className={styles.square}></div>
        <div className={styles.extended}></div>
      </div>
    </section>
  );
};

export default LibraryRelated;
