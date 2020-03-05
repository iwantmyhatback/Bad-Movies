import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Search from "./components/Search.jsx";
import Movies from "./components/Movies.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{ deway: "movies" }],
      favorites: [{ deway: "favorites" }],
      showFaves: false
    };
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    // you might have to do something important here!
  }

  getFavorites() {
    axios
      .get("/movies/favs")
      .then(data => {
        this.setState({ favorites: data.data });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getFavorites();
  }

  getMovies(movies) {
    this.setState({ movies: movies });
  }

  saveMovie(movie) {
    let options = {
      title: movie.title,
      release: movie.release_date,
      popularity: movie.popularity,
      id: movie.id,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
      vote_count: movie.vote_count
    };
    axios
      .post("/movies/save", { body: options })
      .then(data => {
        this.setState({ favorites: data.data });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  deleteMovie(movie) {
    console.log(movie.id);
    axios.delete("/movies/delete", { data: { id: movie.id } }).then(() => {
      this.getFavorites();
    });
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies} />
          <Movies
            movies={this.state.showFaves ? this.state.favorites : this.state.movies}
            showFaves={this.state.showFaves}
            saveMovie={this.saveMovie}
            deleteMovie={this.deleteMovie}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
