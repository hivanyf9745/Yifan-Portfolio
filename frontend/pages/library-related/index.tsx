const LibraryRelated = () => {
  return (
    <div>
      <h1>Redirecting</h1>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    redirect: {
      source: "/library-related",
      destination: "/#library-related",
      permanent: true,
    },
  };
}

export default LibraryRelated;
