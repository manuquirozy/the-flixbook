import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  avatar: {
    backgroundColor: 'black',
  },
}));


export default function RelatedMovies(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        { props.data.length > 0 && props.data.map((tile) => (
          <GridListTile key={tile.name}>
                <Link to={{ pathname: "/movieinfo/" + tile.id, props: {id: tile.id}}} >
                <img  src={"https://image.tmdb.org/t/p/w300"+tile.backdrop_path} alt={tile.name} /></Link>
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <Avatar aria-label="recipe" className={classes.avatar}>
                {tile.vote_average}
              </Avatar>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
