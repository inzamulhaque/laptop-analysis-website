import React from 'react';
import useReviews from '../../hooks/useReviews';
import { Container, Row } from 'react-bootstrap';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewsAll = () => {
    const reviews = useReviews();
    return (
        <>
            <Container className={"mt-5"}>
                <h1 className="text-center">See <span className="text-primary">Reviews</span></h1>
                <Row xs={1} md={2} lg={3}>
                    {
                        reviews.map(review => <ReviewCard key={review.id} review={review} />)
                    }
                </Row>
            </Container>
        </>
    );
};

export default ReviewsAll;