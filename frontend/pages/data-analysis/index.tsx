const DataAnalysis = () => {
  return (
    <div>
      <h1>Redirecting</h1>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    redirect: {
      source: "/data-analysis",
      destination: "/#data-analysis",
      permanent: true,
    },
  };
}

export default DataAnalysis;
