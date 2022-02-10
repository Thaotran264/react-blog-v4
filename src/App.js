import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import { DataProvider } from "./context/DataContext";
import EditPost from "./EditPost";
import Home from "./Home";
import MissingPage from "./MissingPage";
import Navbar from "./Navbar";
import NewPost from "./NewPost";
import PostPage from "./PostPage";

function App() {
  return (
    <div className='App'>
      <DataProvider>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/post/:id'>
            <PostPage />
          </Route>

          <Route path='/edit/:id'>
            <EditPost />
          </Route>
          <Route path='/post' exact>
            <NewPost />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='*'>
            <MissingPage />
          </Route>
        </Switch>
      </DataProvider>
    </div>
  );
}

export default App;
