import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import PostPage from "./PostPage";
import MissingPage from "./MissingPage";
import { useHistory } from "react-router";
import NewPost from "./NewPost";

function App() {
  let history = useHistory();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        fetch("http://localhost:3500/posts")
          .then((res) => res.json())
          .then((data) => setPosts(data));
      }
      fetchData();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  useEffect(() => {
    const filterResults = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLocaleLowerCase())
    );

    setSearchResults(filterResults.reverse());
  }, [posts, search]);

  const handleDelete = (id) => {
    const postLists = posts.filter((post) => post.id !== id);
    setPosts(postLists);
    history.push("/");
  };

  return (
    <div className='App'>
      <Navbar search={search} setSearch={setSearch} />
      <Switch>
        <Route path='/' exact>
          <Home posts={searchResults} />
        </Route>
        <Route path='/post/:id'>
          <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>
        <Route path='/post' exact>
          <NewPost posts={posts} setPosts={setPosts} />
        </Route>

        <Route path='*'>
          <MissingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
