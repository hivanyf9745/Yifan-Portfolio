import styles from "./intro.module.css";

const Intro = (props: { post: { name: string; body: [] } }) => {
  const { name, body } = props.post;

  const textArray = body.map((item: { children: [] }) =>
    item.children.map((ele: { text: string }) => ele.text)
  );

  const finalTexts = textArray.map((el: string[]) => el[0]);

  // console.log(finalTexts);

  return (
    <section className={`${styles.introContainer}`}>
      <div className={styles.imageHolder}>
        <img
          className='img-fluid'
          width='100%'
          src='imgs/chat-box.svg'
          alt='intro-container'
        />
        <div className={`${styles.introText} intro-content container px-5`}>
          <h1>Hi, I am {name}!</h1>
          <br />
          {finalTexts.map((text: string, idx: number) => {
            if (idx <= 1) return <p key={idx}>{text}</p>;
          })}
          <ul>
            {finalTexts.map((text: string, idx: number) => {
              if (idx > 1) return <li key={idx}>{text}</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
