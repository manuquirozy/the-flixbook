import React from 'react';
import MovieList from '../components/MovieList'

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;


export default class Genre extends React.Component {
    state = {
        id: null,
        dir: null
      }
    async componentDidMount(){
        const {id} = this.props.match.params;
        const dir="https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&with_genres="+id
        this.setState({dir});
    }
        render(){
            return(
                <div>
                    {console.log("ID ",this.state.dir)};
                    {this.state.dir && <MovieList dir={this.state.dir}/>}
                </div>
            );
        }
}