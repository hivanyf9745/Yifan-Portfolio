const FrontendRelated = () => {
  return (
    <div>
      <h1>Redirecting</h1>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    redirect: {
      source: "/frontend-related",
      destination: "/#frontend-related",
      permanent: true,
    },
  };
}

export default FrontendRelated;
