import groq from "groq";
import { client } from "../../../client";
import { useRouter } from "next/router";
import SubNav from "@/components/sub-nav/subNav";

const DataAnalysisDetailPage = props => {
  const { loadedPost } = props;

  const router = useRouter();

  const pathName = router.query.slug;

  return (
    <div>
      <SubNav secondary='data-analysis' tertiary={pathName[0]} />
      <h1>
        One of the two portions for the data analysis section:{" "}
        {loadedPost[0].title}
      </h1>
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
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const slugPathArr = params.slug;

  const data = await client.fetch(allPostsQuery);

  const post = data.filter(
    datum =>
      datum.categories.includes("data-analysis") &&
      datum.slug === slugPathArr[0]
  );

  return {
    props: {
      loadedPost: post,
    },
  };
}

export default DataAnalysisDetailPage;
