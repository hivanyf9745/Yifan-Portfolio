import Link from "next/link";
import { Fragment } from "react";
import styles from "./breadcrumbs.module.css";

const BreadCrumbs = (props: { breadcrumbs: string[] }) => {
  const { breadcrumbs } = props;

  return (
    <Fragment>
      <ul>
        {breadcrumbs.map((crumb: string, idx: number) => {
          const linkPathArr = breadcrumbs.slice(0, idx + 1);
          linkPathArr[0] = "";
          const linkPath = linkPathArr.join("/");

          return (
            <li key={idx}>
              <Link href={linkPath === "" ? "/" : `${linkPath}`}>
                <h3>{crumb}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default BreadCrumbs;
