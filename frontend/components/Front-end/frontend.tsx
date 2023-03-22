import Link from "next/link";
import styles from "./frontend.module.css";

const Frontend = (props: { categories: string[] }) => {
  const { categories } = props;

  const filteredCategories = categories.filter(
    (category: string) =>
      category === "certificates" || category === "showcases"
  );

  // console.log(filteredCategories);

  return (
    <section
      className={`d-flex justify-content-between align-items-center flex-column flex-lg-row`}
      id='frontend-related'>
      <div className={`${styles.leftSide} col-12 col-lg-7`}>
        <img
          src='imgs/Frontend-background.svg'
          alt='frontend-background'
          width='100%'
          className='img-fluid'
        />

        <div className={styles.content}>
          <h2 className={styles.title}>Frontend Developer</h2>

          {filteredCategories.map((item: string, idx: number) => {
            return (
              <Link href={`/frontend-related/${item}`} key={idx}>
                <div className={styles.details}>
                  <h3 className={styles.certificate}>{item}</h3>
                  <img
                    src='imgs/bot-arm.svg'
                    alt='bot-arm'
                    width='100%'
                    className='img-fluid'
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className='col-12 col-lg-5'>
        <img
          src='imgs/frontend-skillset.svg'
          alt='frontend-skillset'
          className={`img-fluid me-0 ${styles.skillset}`}
          width='100%'
        />
      </div>
    </section>
  );
};

export default Frontend;
