import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./ReviewCard.css";
import userImg from '../../images/user.jpg';
import Rating from 'react-rating';

const ReviewCard = ({ review }) => {
    const { name, email, rating } = review;
    return (
        <>
            <Col>
                <Card className="shadow rounded">
                    <Card.Body>
                        <div className="reviewContainer">
                            <div className="imageContainer">
                                <img src={userImg} alt="" />
                            </div>
                            <div className="ratingContainer">
                                <h3>{name}</h3>
                                <p><small>{email}</small></p>
                                <p>{review.review}</p>
                                <p style={{ display: "flex", alignItems: "center" }}>Rating: <Rating initialRating={rating} readonly fullSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-full.png" alt='Rating Image' className="icon" />} /> {review.rating}</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default ReviewCard;