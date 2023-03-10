import { useRouter } from "next/router";

const DataAnalysisDetailPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>
        One of the two portions for the data analysis section:{" "}
        {router.query.slug}
      </h1>
    </div>
  );
};

export default DataAnalysisDetailPage;
