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
    // you might have to do something important here!
  }

  getMovies(movies) {
    this.setState({ movies: movies });
  }

  saveMovie(movie) {
    let options = {
      title: movie.title,
      release: movie.release,
      popularity: movie.popularity,
      id: movie.id,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
      vote_count: movie.vote_count
    };
    axios.post("/movies/save", { body: options }).then(data => {
      console.log(data);
    });
  }

  deleteMovie() {
    // same as above but do something diff
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
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
