import groq from "groq";
import { client } from "../../../client";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { getBreadcrumbs } from "@/components/helpers";

import SubNav from "@/components/sub-nav/subNav";
import BreadCrumbs from "@/components/breadcrumbs/breadcrumbs";
import TertiaryPage from "@/components/tertiary/tertiary";
import QuaternaryPage from "@/components/quaternary/quaternary";

const LibraryDetailPage = props => {
  const router = useRouter();

  const pathName = router.query.slug;

  const breadcrumbs = getBreadcrumbs(pathName, router);

  const { loadedPost } = props;

  if (pathName[0] === "showcases" && pathName.length === 1) {
    return (
      <Fragment>
        <SubNav secondary='library-related' tertiary={pathName[0]} />
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <TertiaryPage
          secondary='library-related'
          tertiary={pathName[0]}
          loadedPost={loadedPost}
        />
      </Fragment>
    );
  } else if (pathName[0] !== "showcases" && pathName.length === 1) {
    return (
      <div>
        <SubNav secondary='library-related' tertiary={pathName[0]} />
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <QuaternaryPage loadedPost={loadedPost} />
      </div>
    );
  } else if (pathName[0] === "showcases" && pathName.length > 1) {
    return (
      <div>
        <SubNav secondary='library-related' tertiary={pathName[0]} />
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <h1>one of the five showcases: {loadedPost[0].title}</h1>
      </div>
    );
  }
};

const allPostsQuery = groq`*[_type == "post"]{
  "title": title,
  "slug": slug["current"],
  "mainImage": mainImage["asset"] -> url,
  "body": body[]{"listItem": listItem, "text": children[]{"text": text, "marks": marks},"type": _type, "asset": asset->url},
  "author": author->name,
  "categories": categories[]->title
}
`;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: ["professional-services"] } },
      { params: { slug: ["classes-taken"] } },
      { params: { slug: ["showcases"] } },
      { params: { slug: ["degree-information"] } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const slugPathArr = params.slug;

  const data = await client.fetch(allPostsQuery);

  if (slugPathArr.length === 1) {
    const post = data.filter(
      datum =>
        datum.categories.includes("library-related") &&
        datum.categories.includes(slugPathArr[0])
    );

    return {
      props: {
        loadedPost: post,
      },
    };
  } else if (slugPathArr.length > 1) {
    const post = data.filter(
      datum =>
        datum.categories.includes("library-related") &&
        datum.categories.includes(slugPathArr[0]) &&
        datum.slug === slugPathArr[1]
    );

    return {
      props: {
        loadedPost: post,
      },
    };
  }
}

export default LibraryDetailPage;
