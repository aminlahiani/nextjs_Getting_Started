// pages/post/[id].js

import Link from "next/link";
import NavBarDefault from "../../components/layout/NavBar";
function Post({ todo }) {
  return (
    <>
       <NavBarDefault />
        <h1>getStaticPaths()</h1>
 
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            <p>completed: {JSON.stringify(todo.completed)}</p>
              
      <Link href="/todos">
        <button> Click</button>
      </Link>
    </>
  );
}
//JSON.stringify(todo.completed)
// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = todos.map((todo) => ({
    params: { id: todo.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const todo = await res.json();

  // Pass post data to the page via props
  return { props: { todo } };
}

export default Post;
