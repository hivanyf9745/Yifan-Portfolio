import styles from "../styles/Home.module.css";

import Header from "@/components/header/header";
import Banner from "@/components/banner/banner";

const Home = () => {
  return (
    <>
      <Header />
      <hr className='mx-5' />
      <Banner />
    </>
  );
};

export default Home;
