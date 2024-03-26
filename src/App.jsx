import "./App.scss";
import { useGetAllPostsQuery } from "./api/posts";
import { Footer } from "./components/Footer.jsx/Footer";

function App() {
  const { data: postsData, isError: postError } = useGetAllPostsQuery();
  return (
    <>
      <Footer />

      {postsData
        ? postsData.map((post) => (
            <div key={post.id} value={post.id}>
              {post.year}
            </div>
          ))
        : null}
    </>
  );
}

export default App;
