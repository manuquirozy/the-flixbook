import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import MovieList from '../components/MovieList'
import Search from '../components/Search'

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.30),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.60),
    },
    marginLeft: 100,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar() {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const [onEnter, setOnEnter] = useState(false);

  function onChange(event) {
    console.log(event.target.value)
  }

  function keyPressed(event) {
    if (event.key === "Enter") {
      let value = event.target.value.replace(/ /g,"+");
      setValue(value);
      setOnEnter(true);
      console.log(value);
    }
  }

  function renderRedirect (){
    if (onEnter) {
      return <Redirect to={'/search/'+value} />      
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.title} variant="h6" nowrap='true'>
            <Link to="/"><img src={require("./logo.png")} alt="logo" className="logo" /></Link>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase onChange={onChange} onKeyPress={keyPressed}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div>{renderRedirect()}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
