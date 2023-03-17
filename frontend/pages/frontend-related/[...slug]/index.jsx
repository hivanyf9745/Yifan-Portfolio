import groq from "groq";
import { client } from "../../../client";
import { useRouter } from "next/router";
import SubNav from "@/components/sub-nav/subNav";
import { Fragment } from "react";
import { getBreadcrumbs } from "@/components/helpers";
import BreadCrumbs from "@/components/breadcrumbs/breadcrumbs";

const FrontendDetailPage = props => {
  const { loadedPost } = props;

  const router = useRouter();

  const pathName = router.query.slug;

  const breadcrumbs = getBreadcrumbs(pathName);

  if (pathName[0] === "showcases" && pathName.length === 1) {
    return (
      <Fragment>
        <SubNav secondary='frontend-related' tertiary={pathName[0]} />
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <ul>
          {loadedPost.map((load, idx) => {
            return <li key={idx}>{load.title}</li>;
          })}
        </ul>
      </Fragment>
    );
  } else if (pathName[0] !== "showcases" && pathName.length === 1) {
    return (
      <div>
        <SubNav secondary='frontend-related' tertiary={pathName[0]} />
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <h1>
          One of the two portions inside frontend related category:{" "}
          {loadedPost[0].title}
        </h1>
      </div>
    );
  } else if (pathName[0] === "showcases" && pathName.length > 1) {
    return (
      <div>
        <SubNav secondary='frontend-related' tertiary={pathName[0]} />
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <h1>
          One of the many frontend-related showcases projects:{" "}
          {loadedPost[0].title}
        </h1>
      </div>
    );
  }
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
      { params: { slug: ["certificates"] } },
      { params: { slug: ["showcases"] } },
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
        datum.categories.includes("frontend-related") &&
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
        datum.categories.includes("frontend-related") &&
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

export default FrontendDetailPage;
