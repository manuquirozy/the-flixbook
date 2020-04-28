import React from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard'

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

class MovieList extends React.Component {
    state = {
      movies: []
    }
  
    componentDidMount() {
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
        .then(res => {
          const movies = res.data.results;
          this.setState({ movies });
          console.log(res.data.results);
        });
    }
  
    render() {
      return (
        <div className="MovieContainer">
          {this.state.movies.map((movie,i) => <MovieCard key={'movie_'+i} title={movie.original_title} 
          rating={movie.vote_average} overview={movie.overview} release={movie.release_date} image={movie.poster_path}/>)}
        </div>
      );
    }
  }

  export default MovieList;