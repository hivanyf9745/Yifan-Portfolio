import groq from "groq";
import { client } from "../../../client";
import { useRouter } from "next/router";

const LibraryDetailPage = props => {
  const router = useRouter();

  const pathName = router.query.slug;

  const { loadedPost } = props;

  if (pathName[0] === "showcases" && pathName.length === 1) {
    return (
      <ul>
        {loadedPost.map((loaded, idx) => {
          return <li key={idx}>{loaded.title}</li>;
        })}
      </ul>
    );
  } else if (pathName[0] !== "showcases" && pathName.length === 1) {
    return (
      <div>
        <h1>
          One of the four portions in library related section:{" "}
          {loadedPost[0].title}
        </h1>
      </div>
    );
  } else if (pathName[0] === "showcases" && pathName.length > 1) {
    return (
      <div>
        <h1>one of the five showcases: {loadedPost[0].title}</h1>
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
