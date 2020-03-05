import React from "react";
import { get } from "mongoose";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [{ id: null, name: null }]
    };
    this.getGenres = this.getGenres.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  getGenres() {
    return axios
      .get("/movies/genres")
      .then(data => data.data)
      .then(data => {
        this.setState({ genres: data.genres });
      })
      .catch(err => {
        console.log("Error Getting Genres");
      });
  }

  clickHandler(event) {
    event.preventDefault();
    let options = { params: { genreID: this.refs.genre.value } };
    return axios
      .get("/movies/search", options)
      .then(data => data.data.results)
      .then(body => {
        this.props.getMovies(body);
      });

    //   .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getGenres();
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? "Show Results" : "Show Favorites"}
        </button>
        <br />
        <br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}
        <form>
          <select ref="genre">
            {this.state.genres.map(genre => {
              return (
                <option key={genre.id} id={genre.name} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
          <br />
          <br />
          <input onClick={this.clickHandler} type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
