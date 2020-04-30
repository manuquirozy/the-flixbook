import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import NavBar from '../components/NavBar'
import MovieInfo from '../components/MovieInfo'
import Favorites from '../components/Favorites'
import Search from '../components/Search'
import Home from '../components/Home'
import Genre from '../components/Genre'

function App() {
  return (
    <Router>
    <div className="App">
    <header className="App-header">
      <NavBar/>
    </header>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/favorites" component={Favorites}/>
          <Route exact path="/search/:id" component={Search}/>
          <Route exact path="/movieinfo/:id" component={MovieInfo} />
          <Route exact path="/genre/:id" component={Genre}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
