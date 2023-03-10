import { useRouter } from "next/router";

const LibraryDetailPage = () => {
  const router = useRouter();

  // console.log(router.pathname) // this return the pathname of the url "/library-related/[slug]"
  // console.log(router.query) // this return the query object of the url "{slug: "professional-services"}"

  return (
    <div>
      <h1>
        One of the four portions inside library related category:{" "}
        {router.query.slug}
      </h1>
    </div>
  );
};

export default LibraryDetailPage;
