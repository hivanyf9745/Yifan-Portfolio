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
    <section className={`margin-container ${styles.container}`}>
      <div className='row justify-content-between gy-5'>
        {filteredCategories.map((category: string, idx: number) => {
          return (
            <div key={idx} className={`${styles.libraryCats} col-4 mx-5`}>
              <h2>0{idx + 1}</h2>
              <h2>{category}</h2>
            </div>
          );
        })}
      </div>
      <div
        className={`d-flex flex-column justify-content-between pt-5 ${styles.libraryContainer}`}>
        <div className={styles.extended}></div>
        <div className={styles.square}></div>
        <div className={styles.extended}></div>
      </div>
    </section>
  );
};

export default LibraryRelated;
