// getServerSideProps()

import NavBarDefault from "../components/layout/NavBar";
import Link from "next/link";
const Posts = ({ posts }) => {
  return (
    <div>
      <NavBarDefault />

      <h1>getServerSideProps</h1>

      {posts.map((q, index) => (
        <div key={index}>
          <h3>
            {q.id} {q.title}
          </h3>
          <p>{q.body}</p>
          <Link href={`/post/${q.id}`}>
            <button> Click</button>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const json = await res.json();
  const posts = json;
  return {
    props: {
      posts,
    },
  };
}

export default Posts;
