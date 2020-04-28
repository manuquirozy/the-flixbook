import React from 'react';
import axios from 'axios';
import VideoList from '../components/VideoList'

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

class MovieInfo extends React.Component {
    state = {
        movie: []
      }

    componentDidMount(){
        const {id} = this.props.match.params;
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`)
        .then(res => {
          const movie = res.data;
          this.setState({ movie });
          console.log(res.data);
        });
    }

    render(){
        return(
            <div className="MovieInfoContainer">
                <div className="MainContainer">
                    <h1 className="MovieTitle">{this.state.movie.original_title}</h1>
                    <span>{this.state.movie.tagline}</span>
                    <div className="CircleRating"><div className="CircleText">{this.state.movie.vote_average}</div></div>
                    <img className="Poster" src={'http://image.tmdb.org/t/p/w342/'+this.state.movie.poster_path} alt="movie poster"/>
                </div>
                <h1>Overview</h1>
                <p>{this.state.movie.overview}</p>
                <div>{console.log(this.state.movie.videos)}</div>
                {/* <VideoList data={this.state.movie}/> */}
            </div>
        );
    };
};

export default MovieInfo