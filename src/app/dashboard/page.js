export default async function getServerSideProps() {
  let res = await fetch("http://localhost:3000/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPosts = await res.json();

  return  allPosts;
    // props: { allPosts },

  // return 'done';
}