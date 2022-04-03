import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import LeftSide from './LeftSide';
import ReviewCard from '../ReviewCard/ReviewCard';
import laptop from "../../images/laptop.jpg";
import useReviews from "../../hooks/useReviews";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [recentReviews, setRecentReviews] = useState([]);
    const reviews = useReviews();
    useEffect(() => setRecentReviews(reviews.slice(0, 3)), [reviews]);
    const navigate = useNavigate();
    return (
        <>
            <Container className="mt-5">
                <Row xs={1} md={2} className="d-flex justify-content-center align-items-center">
                    <Col className="order-2 order-md-1 mt-5 mt-md-0">
                        <LeftSide />
                    </Col>
                    <Col className="order-1 order-md-2">>
                        <img src={laptop} className="img-fluid" alt="" />
                    </Col>
                </Row>
                <section className="my-5 text-center">
                    <h2> <span className="text-warning">Recent</span> <span className="text-primary">Reviews</span> </h2>
                    <Row xs={1} md={2} lg={3} className="mt-3">
                        {
                            recentReviews.map(review => <ReviewCard key={review.id} review={review} />)
                        }
                    </Row>
                    <Button onClick={() => navigate("/reviews")}>Check All Review</Button>
                </section>
            </Container>
        </>
    );
};

export default Home;