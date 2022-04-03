import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from './LeftSide';
import laptop from "../../images/laptop.jpg";

const Home = () => {
    return (
        <>
            <Container className="mt-5">
                <Row xs={1} md={2} className="d-flex justify-content-center align-items-center">
                    <Col>
                        <LeftSide />
                    </Col>
                    <Col>
                        <img src={laptop} className="img-fluid" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;