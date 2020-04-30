import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 300,
    paddingTop: '0%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'black',
  },
}));

export default function MovieCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const favoriteHandler = () =>{
    console.log(props);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.rating}
          </Avatar>
        }
        title={props.title}
        subheader={"In theaters "+props.release}
      />
      <Link to={"/movieinfo/" + props.id}><CardMedia 
        className={classes.media}
        image={'http://image.tmdb.org/t/p/w185/'+props.image}
        title={props.title}
      /></Link>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            {props.overview}
        </CardContent>
      </Collapse>
    </Card>
  );
}
