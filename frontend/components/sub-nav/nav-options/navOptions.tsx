import Link from "next/link";
import styles from "./navOptions.module.css";

const NavOptions = (props: { secondary: string; tertiary: string }) => {
  const { secondary, tertiary } = props;

  const libraryPortions = [
    { title: "showcases", slug: "showcases" },
    { title: "prof. services", slug: "professional-services" },
    { title: "degree info", slug: "degree-information" },
    { title: "classes taken", slug: "classes-taken" },
  ];

  const frontendPortions = ["showcases", "certificates"];

  const dataAnalysisPortions = [
    {
      title: "Information Retrieval",
      slug: "information-retrieval-system-using-pyterrier-react-js-and-node",
    },
    {
      title: "Crowd Index",
      slug: "miami-university-crowd-index-using-d3-to-display-real-time-library-crowdedness",
    },
  ];

  if (secondary === "library-related") {
    return (
      <ul className='d-flex list-unstyled align-items-center justify-content-center mt-5 pt-3'>
        {libraryPortions.map(
          (ele: { title: string; slug: string }, idx: number) => {
            return (
              <li
                key={idx}
                className={
                  tertiary === ele.slug
                    ? `${styles.portion} ${styles.portionActive}`
                    : `${styles.portion}`
                }>
                <Link
                  href={`/library-related/${ele.slug}`}
                  className={styles.portionLink}>
                  <h2 className='text-center'>{ele.title}</h2>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    );
  }

  if (secondary === "frontend-related") {
    return (
      <ul className="d-flex list-unstyled align-items-center justify-content-center mt-5 pt-3'">
        {frontendPortions.map((ele: string, idx: number) => {
          return (
            <li
              key={idx}
              className={
                tertiary === ele
                  ? `${styles.portion} ${styles.portionActive}`
                  : `${styles.portion}`
              }>
              <Link
                href={`/frontend-related/${ele}`}
                className={styles.portionLink}>
                <h2 className='text-center'>{ele}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  if (secondary === "data-analysis") {
    return (
      <ul className="d-flex list-unstyled align-items-center justify-content-center mt-5 pt-3'">
        {dataAnalysisPortions.map(
          (ele: { slug: string; title: string }, idx: number) => {
            return (
              <li
                key={idx}
                className={
                  tertiary === ele.slug
                    ? `${styles.portion} ${styles.portionActive}`
                    : `${styles.portion}`
                }>
                <Link
                  href={`/data-analysis/${ele.slug}`}
                  className={styles.portionLink}>
                  <h2 className='text-center'>{ele.title}</h2>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    );
  }

  return <></>; //You have to return null when none of the conditions are met above
};

export default NavOptions;
