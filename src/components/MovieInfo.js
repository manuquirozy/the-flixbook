import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import VideoList from '../components/VideoList'
import CastInfo from '../components/CastInfo'
import Reviews from '../components/Reviews'
import RelatedMovies from '../components/RelatedMovies'

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

class MovieInfo extends React.Component {
    state = {
        movie: {},
        results: [],
        similar: [],
        id: null
    }

    componentWillReceiveProps = (nextProps)=> {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            window.location.reload();
        }
    };
    
    async componentDidMount() {
        const { id } = this.props.match.params;
        this.setState((state) => { state.id = id; return state })
        let one = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
        let two = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
        const requestOne = axios.get(one);
        const requestTwo = axios.get(two);
        try {
            await axios.all([requestOne, requestTwo])
                .then(axios.spread((...responses) => {
                    const responseOne = responses[0]
                    const responseTwo = responses[1]
                    console.log("response  ",responseTwo);
                    const movie = responseOne.data;
                    const similar = responseTwo.data.results;
                    this.setState({ movie, results: movie.video.results, similar });
                    console.log("similar ",this.state.similar);
                }))
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="MovieInfoContainer">
                <div className="MainContainer">
                    <img className="Poster" src={'http://image.tmdb.org/t/p/w342/' + this.state.movie.poster_path} alt="movie poster" />
                    <div className="MainInfo">
                        <div className="MovieHeader">
                            <h1 className="MovieTitle">{this.state.movie.original_title}</h1>
                        </div>
                        <div className="CircleRating"><div className="CircleText">{this.state.movie.vote_average}</div></div> 
                        <span className="Tagline">{this.state.movie.tagline}</span>
                        <div className="Genres"> <span className="Bolder">Genres: </span>
                        {this.state.movie.genres && (this.state.movie.genres.map((genre) => <span><Link to={"/genre/" + genre.id}
                            style={{ textDecoration: 'none' }}> {genre.name}</Link></span>))}
                        <h1>Overview</h1>
                        <p className="Overview">{this.state.movie.overview}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Cast</h1>
                    <CastInfo data={this.state.movie.credits?.cast ? this.state.movie.credits.cast : []} />
                </div>
                <div>
                    <h1>Reviews</h1>
                    {this.state.id && <Reviews data={this.state.id} />}
                </div>
                <div>
                    <h1>Related videos</h1>
                    <VideoList data={this.state.movie.videos?.results ? this.state.movie.videos.results : []} />
                </div>
                <div>
                    <h1>Related movies</h1>
                    {this.state.similar  && <RelatedMovies data={this.state.similar} />}
                </div>
            </div>
        );
    };
};

export default MovieInfo

