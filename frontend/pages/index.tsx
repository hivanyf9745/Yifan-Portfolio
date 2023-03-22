import Banner from "@/components/banner/banner";
import Intro from "@/components/intro/intro";
import LibraryRelated from "@/components/library/library";
import Frontend from "@/components/Front-end/frontend";
import DataAnalysis from "@/components/data-analysis/dataAnalysis";

import { client } from "../client";
import groq from "groq";

const Home = (props: {
  post: { name: string; body: [] };
  categories: string[];
}) => {
  const indexProps = {
    post: props.post,
  };

  const indexCats = {
    categories: props.categories,
  };

  const { categories } = props;
  // console.log("all the categories: -->", categories);

  const { name } = props.post;
  // console.log("author name: -->", name);

  return (
    <>
      <Banner />
      <div className='divider' />
      {name && <Intro {...indexProps} />}
      <div className='divider' />
      {categories && <LibraryRelated {...indexCats} />}
      <div className='divider' />
      {/* {categories && <Frontend {...indexCats} />} */}
      <div className='divider' />
      {categories && <DataAnalysis {...indexCats} />}
      <div className='divider' />
    </>
  );
};

const genQuery = groq`*[_type=="post" && slug["current"] == "introduction"]{
  "name": author -> name,
  "body": body,
}[0]`;

const catQuery = groq`[...*[_type == "category"]["title"]]`;

export async function getStaticProps() {
  const post = await client.fetch(genQuery);
  const categories = await client.fetch(catQuery);

  return {
    props: {
      post,
      categories,
    },
    revalidate: 60,
  };
}

export default Home;
