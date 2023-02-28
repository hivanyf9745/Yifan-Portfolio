import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../client";

const Post = (props: {
  post: {
    slug: { current: string };
    title: string;
    name: string;
    categories: [];
    authorImage: string;
  };
}) => {
  const { title, name, categories, authorImage } = props.post;
  function urlFor(source: string) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <article>
      <h1>{title}</h1>
      <h2>{name}</h2>
      {categories && (
        <ul>
          {categories.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      )}
      {authorImage && (
        <div>
          <img src={urlFor(authorImage).width(50).url()} />
        </div>
      )}
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: {
  params: { slug?: "" | undefined };
}) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });

  return {
    props: {
      post,
    },
  };
}

export default Post;
