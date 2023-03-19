import { Fragment } from "react";
import styles from "./quaternary.module.css";
import Image from "next/image";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const QuaternaryPage = ({ loadedPost }) => {
  const date = new Date(loadedPost[0].publishedAt);

  const month = date.getMonth();
  const fullMonth = months[month];

  const fullYear = date.getFullYear();
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
      <div className='mx-5'>
        <h1 className={styles.postTitle}>{loadedPost[0].title}</h1>

        <div
          className={`d-flex justify-content-between align-items-center ${styles.subHeader}`}>
          <div className={styles.dates}>
            <div className={styles.subHeaderTitle}>Project finished time:</div>
            <div
              style={{ fontWeight: "700" }}>{`${fullMonth}, ${fullYear}`}</div>
          </div>
          <div className={styles.tags}>
            <div className={styles.subHeaderTitle}>Labels</div>
            <div className='d-flex align-items-center'>
              {loadedPost[0].categories.map((category, idx) => (
                <div
                  key={idx}
                  className={`p-2 me-3 text-capitalize ${styles.categories}`}>
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className='my-5' />

        {loadedPost[0].body.map((content, idx) => {
          if (content.text[0].marks[0] === "em") {
            return (
              <Fragment key={idx}>
                <h3 className={styles.brief}>{content.text[0].text}</h3>
                <br />
                <br />
              </Fragment>
            );
          } else if (content.text[0].marks[0] === "strong") {
            return (
              <Fragment key={idx}>
                <h3 className={styles.subTitles}>{content.text[0].text}</h3>
                <br />
              </Fragment>
            );
          } else if (content.listItem === "bullet") {
            return <li key={idx}>{content.text[0].text}</li>;
          } else if (content.type === "Image") {
            return (
              <Fragment key={idx}>
                <div className={`${styles.imageContainer}`}>
                  <Image src={content.asset} alt='image' fill />
                </div>
                <br />
              </Fragment>
            );
          } else {
            return (
              <Fragment key={idx}>
                <br />
                <p key={idx} className={styles.bodyText}>
                  {content.text[0].text}
                </p>
                <br />
              </Fragment>
            );
          }
        })}
      </div>
    </section>
  );
};

export default QuaternaryPage;
