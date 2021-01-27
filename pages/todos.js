import Link from "next/link";
import NavBarDefault from "../components/layout/NavBar";

function Blog({ todos }) {
  return (
    <>
    <NavBarDefault />
    <h1>Todos</h1>
     <ol >
      {todos.map((todo,index) => (

       
          <li key={index}> 
            {todo.title}{" "}
            <Link href={`/todo/${todo.id}`}>
              <button> Click</button>
            </Link>{" "}
          </li>
       
      ))}
         </ol>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      todos,
    },
  };
}

export default Blog;
