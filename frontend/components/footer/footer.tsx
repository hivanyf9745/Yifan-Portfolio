import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={`container-fluid ${styles.footer}`}>
      <hr className={styles.hrTop} />
      <div
        className={`d-flex justify-content-around align-items-center ${styles.footerContainer}`}>
        <div>
          <img
            src='../../imgs/footer-logo.svg'
            alt='footer-logo'
            width='50%'
            style={{ opacity: "50%" }}
          />
        </div>
        <div>
          <div className={styles.creditText}>Developed by: Ivan & Meng</div>
        </div>
        <ul
          className={`d-flex flex-lg-row flex-column justify-content-around align-items-start align-items-lg-center mb-0 ${styles.toolkit}`}>
          <li>
            <Link href='https://nextjs.org/' target={"_blank"}>
              Next.js
            </Link>
          </li>
          <li>
            <Link href='https://www.sanity.io/' target={"_blank"}>
              Sanity
            </Link>
          </li>
          <li>
            <Link href='https://nodejs.org/en/' target={"_blank"}>
              Node.js
            </Link>
          </li>
          <li>
            <Link
              href='https://www.adobe.com/ca/products/illustrator.html?gclid=CjwKCAiA3pugBhAwEiwAWFzwdfuhXK3IDvPS2xmdq-gIMOdfs0V6fw8LnFp-ZZetuuZFfpGPmeDwnRoCD28QAvD_BwE&sdid=KKQML&mv=search&ef_id=CjwKCAiA3pugBhAwEiwAWFzwdfuhXK3IDvPS2xmdq-gIMOdfs0V6fw8LnFp-ZZetuuZFfpGPmeDwnRoCD28QAvD_BwE:G:s&s_kwcid=AL!3085!3!495846071671!e!!g!!adobe%20illustrator!12231505436!122943072691&mv=search'
              target={"_blank"}>
              Adobe Illustrator
            </Link>
          </li>
        </ul>
      </div>
      <hr className={styles.hrBot} />
    </section>
  );
};

export default Footer;
