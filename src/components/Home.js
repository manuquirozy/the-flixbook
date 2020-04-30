import React from 'react';
import MovieList from '../components/MovieList'

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export default function Home(){
    return(
        <div>
            <MovieList dir={"https://api.themoviedb.org/3/movie/now_playing?api_key="+API_KEY}/>
        </div>
    );
}