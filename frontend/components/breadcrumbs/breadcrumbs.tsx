import Image from "next/image";
import Link from "next/link";
import styles from "./breadcrumbs.module.css";

const BreadCrumbs = (props: { breadcrumbs: string[] }) => {
  const { breadcrumbs } = props;

  return (
    <section id='breadcrumbs' className='container mt-5'>
      <ul className={`d-flex align-items-center ${styles.crumbsList}`}>
        {breadcrumbs.map((crumb: string, idx: number) => {
          const linkPathArr = breadcrumbs.slice(0, idx + 1);
          linkPathArr[0] = "";
          const linkPath = linkPathArr.join("/");

          return (
            <li
              key={idx}
              className={`me-5 ${styles.listItem} d-flex align-items-center`}>
              <Link
                href={linkPath === "" ? "/" : `${linkPath}`}
                className={`${styles.itemLink} me-5`}>
                <h3 className={styles.itemText}>{crumb}</h3>
              </Link>
              <Image
                src={
                  breadcrumbs.length <= 3
                    ? "../imgs/breadcrumb-arrow.svg"
                    : "../../imgs/breadcrumb-arrow.svg"
                }
                alt='breadcrumb arrow'
                width={22}
                height={17}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BreadCrumbs;
