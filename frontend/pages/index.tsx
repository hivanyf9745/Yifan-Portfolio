import styles from "../styles/Home.module.css";

import Header from "@/components/header/header";
import Banner from "@/components/banner/banner";
import Intro from "@/components/intro/intro";

import { client } from "../client";

const Home = (props: { post: { name: string; body: [] } }) => {
  const indexProps = {
    post: props.post,
  };
  const { name } = props.post;
  return (
    <>
      <Header />
      <hr className='mx-5' />
      <Banner />
      <div className='divider' />
      {name && <Intro {...indexProps} />}
    </>
  );
};

export async function getStaticProps() {
  const post = await client.fetch(`*[_type == "post"][0]{
    "name": author -> name,
    "body": body,
  }`);

  return {
    props: {
      post,
    },
  };
}

export default Home;
