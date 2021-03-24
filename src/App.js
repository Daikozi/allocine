//Router DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Stylesheet
import "./App.css";

//Layout
import Main from "./layout/Main";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Movie from "./layout/Movie";
import Genre from "./layout/Genre";

//Custom hook
import useFetch from "./hooks/useFetch";

function App() {
  const genres = useFetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
    "genres"
  );

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar genres={genres} />
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/movie/:id" exact>
              <Movie />
            </Route>
            <Route path="/genre/:id" exact>
              <Genre />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
