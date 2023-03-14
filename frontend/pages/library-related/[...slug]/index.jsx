import groq from "groq";
import { client } from "../../../client";

const LibraryDetailPage = props => {
  const { loadedPost } = props;
  console.log("library related loadedPost: --> ", loadedPost);

  return (
    <div>
      <h1>
        One of the four portions inside library related category:{" "}
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
