import Image from "next/image";
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
      <div className={styles.leftSide}>
        <Image
          src='imgs/Frontend-background.svg'
          alt='frontend-background'
          width={820}
          height={740}
          loading='eager'
        />

        <div className={styles.content}>
          <h2 className={styles.title}>Frontend Developer</h2>

          {filteredCategories.map((item: string, idx: number) => {
            return (
              <Link href={`/frontend-related/${item}`} key={idx}>
                <div className={styles.details}>
                  <h3 className={styles.certificate}>{item}</h3>
                  <Image
                    src='imgs/bot-arm.svg'
                    alt='bot-arm'
                    width={338}
                    height={58}
                    loading='lazy'
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <Image
        src='imgs/frontend-skillset.svg'
        alt='frontend-skillset'
        className={styles.skillset}
        width={584}
        height={567}
      />
    </section>
  );
};

export default Frontend;
