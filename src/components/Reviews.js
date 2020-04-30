import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

class Reviews extends React.Component {
    
    state = {
        reviews: {}
      }

    componentDidMount(){
        const id = this.props.data;
        let url = `http://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
        if (!(id === undefined || id === null)){
            try {
                axios.get(url)
                .then(res => {
                const reviews = res.data.results;
                this.setState({ reviews});
                console.log("REVIEWS ",this.state.reviews)
                });
            } catch (error) {
                console.log(error);
            }
        }
    }

    
    render(){
        return(
            <div className="BigReview">
                {this.state.reviews.length > 0 && 
                <div className="ReviewsContainer">
                    {this.state.reviews.map(review =>
                    <div>
                        <h3 className="ReviewTitle"> Written by {review.author} </h3> 
                        <p className="FullReview"> {review.content} </p>
                </div>)}
                </div>}
            </div>
        );
    };
};

export default Reviews