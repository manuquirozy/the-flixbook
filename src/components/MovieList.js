import React from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard'

class MovieList extends React.Component {
    state = {
      movies: []
    }
  
    async componentDidMount() {
      try {
        if(!(this.props.dir === undefined || this.props.dir === null)){
          await axios.get(this.props.dir)
          .then(res => {
            const movies = res.data.results;
            this.setState({ movies });
            console.log("Results: ",res.data.results);
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  
    render() {

      return (        
        <div className="MovieContainer">
          {this.state.movies.map((movie,i) => <MovieCard key={'movie_'+i} title={movie.original_title} 
          rating={movie.vote_average} overview={movie.overview} release={movie.release_date} 
          image={movie.poster_path} id={movie.id}/>)}
        </div>
      );
    }
  }

  export default MovieList;