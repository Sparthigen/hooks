

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './App.css';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({ movie }) => {
    return (
        <div className='ccc'>
                <Card class='Card' style={{ width: '15rem' }} >
                    <Card.Img variant="top" src={movie.image} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.description}
                        </Card.Text>
                        <Button variant="primary">Watch Trailer</Button>
                        <div><StarRatingComponent name={movie.title} editing={false} value={movie.rate}/></div>
                        
                       
                    </Card.Body>
                </Card>
            

        </div>
    );
}
export default MovieCard;