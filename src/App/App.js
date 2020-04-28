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
          <Route exact path="/" component={MovieList}/>
          <Route exact path="/favorites" component={Favorites}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/movieinfo/:id" component={MovieInfo}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
