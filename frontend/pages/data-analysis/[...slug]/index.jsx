import groq from "groq";
import { client } from "../../../client";
import { useRouter } from "next/router";
import SubNav from "@/components/sub-nav/subNav";
import { getBreadcrumbs } from "@/components/helpers";
import BreadCrumbs from "@/components/breadcrumbs/breadcrumbs";
import QuaternaryPage from "@/components/quaternary/quaternary";

const DataAnalysisDetailPage = props => {
  const { loadedPost } = props;

  const router = useRouter();

  const pathName = router.query.slug;

  const breadcrumbs = getBreadcrumbs(pathName, router);

  return (
    <div>
      <SubNav secondary='data-analysis' tertiary={pathName[0]} />
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <QuaternaryPage loadedPost={loadedPost} />
    </div>
  );
};

const allPostsQuery = groq`*[_type == "post"]{
  "title": title,
  "slug": slug["current"],
  "publishedAt": publishedAt,
  "mainImage": mainImage["asset"] -> url,
  "body": body[]{"listItem": listItem, "text": children[]{"text": text, "marks": marks},"type": _type, "asset": asset->url, "markDefs": markDefs[0]["href"]},
  "author": author->name,
  "categories": categories[]->title,
}
`;

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
