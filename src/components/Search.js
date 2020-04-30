import React from 'react';
import MovieList from '../components/MovieList'

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

class Search extends React.Component {
    state = {
        id: null,
        dir: null
      }

      componentWillReceiveProps = (nextProps)=> {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            window.location.reload();
        }
    };

    async componentDidMount(){
        const {id} = this.props.match.params;
        this.setState((state) => { state.id = id; return state })
        const dir="https://api.themoviedb.org/3/search/movie?api_key="+API_KEY+"&query="+id
        this.setState({dir});
        console.log("ID" ,this.state.id)
    }
    render(){
            return(
                <div>
                    {console.log("ID ",this.state.dir)};
                    {this.state.dir && <MovieList dir={this.state.dir}/>}
                </div>
            );
    };
};

export default Search