import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={`container ${styles.footer}`}>
      <hr className={styles.hrTop} />
      <div
        className={`d-flex justify-content-between align-items-center ${styles.footerContainer}`}>
        <div
          className={`d-flex justify-content-between align-items-center ${styles.logoContainer}`}>
          <Image
            src='imgs/footer-logo.svg'
            alt='footer-logo'
            width={102}
            height={85}
          />
          <div className={styles.footerCredit}>
            <Image
              src='imgs/bot-arm.svg'
              alt='bot-arm'
              width={380}
              height={65}
            />
            <div className={styles.creditText}>Developed by: Ivan & Meng</div>
          </div>
        </div>
        <ul
          className={`d-flex justify-content-around align-items-center ${styles.toolkit}`}>
          <li>
            <Link href='https://nextjs.org/'>Next.js</Link>
          </li>
          <li>
            <Link href='https://www.sanity.io/'>Sanity</Link>
          </li>
          <li>
            <Link href='https://nodejs.org/en/'>Node.js</Link>
          </li>
          <li>
            <Link href='https://www.adobe.com/ca/products/illustrator.html?gclid=CjwKCAiA3pugBhAwEiwAWFzwdfuhXK3IDvPS2xmdq-gIMOdfs0V6fw8LnFp-ZZetuuZFfpGPmeDwnRoCD28QAvD_BwE&sdid=KKQML&mv=search&ef_id=CjwKCAiA3pugBhAwEiwAWFzwdfuhXK3IDvPS2xmdq-gIMOdfs0V6fw8LnFp-ZZetuuZFfpGPmeDwnRoCD28QAvD_BwE:G:s&s_kwcid=AL!3085!3!495846071671!e!!g!!adobe%20illustrator!12231505436!122943072691&mv=search'>
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
