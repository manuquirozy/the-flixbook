import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import MovieList from '../components/MovieList'
import NavBar from '../components/NavBar'
import MovieInfo from '../components/MovieInfo'
import Favorites from '../components/Favorites'
import Search from '../components/Search'

function App() {
  return (
    <Router>
    <div className="App">
    <header className="App-header">
        <NavBar/>
    </header>
      <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/movieinfo">
            <MovieInfo />
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
