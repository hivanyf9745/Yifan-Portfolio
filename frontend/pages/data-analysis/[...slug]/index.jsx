import groq from "groq";
import { client } from "../../../client";

const DataAnalysisDetailPage = props => {
  const { loadedPost } = props;
  console.log("data analysis loadedPost: --> ", loadedPost);

  return (
    <div>
      <h1>One of the two portions for the data analysis section: </h1>
    </div>
  );
};

const allPostsQuery = groq`*[_type == "post"]{
  "title": title,
  "slug": slug["current"],
  "body": body[]{"listItem": listItem, "text": children[]["text"], "type": _type, "asset": asset->url},
  "author": author->name,
  "categories": categories[]->title
}`;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: [
            "miami-university-crowd-index-using-d3-to-display-real-time-library-crowdedness",
          ],
        },
      },
      {
        params: {
          slug: [
            "information-retrieval-system-using-pyterrier-react-js-and-node",
          ],
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps() {
  const data = await client.fetch(allPostsQuery);

  const post = data.filter(datum => datum.categories.includes("data-analysis"));

  return {
    props: {
      loadedPost: post,
    },
  };
}

export default DataAnalysisDetailPage;
