import { useRouter } from "next/router";

const FrontendDetailPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>One of the two portions for frontend section: {router.query.slug}</h1>
    </div>
  );
};

export default FrontendDetailPage;
