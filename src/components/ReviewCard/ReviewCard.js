import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./ReviewCard.css";
import userImg from '../../images/user.jpg';

const ReviewCard = ({ review }) => {
    return (
        <>
            <Col>
                <Card>
                    <Card.Body>
                        <div className="reviewContainer">
                            <div className="imageContainer">
                                <img src={userImg} alt="" />
                            </div>
                            <div className="ratingContainer">
                                <h3>{review.name}</h3>
                                <p>{review.review}</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default ReviewCard;