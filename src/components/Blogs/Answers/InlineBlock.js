import React from 'react';
import { Card, Col } from 'react-bootstrap';

const InlineBlock = () => {
    return (
        <>
            <Col>
                <Card style={{ width: '18rem' }} className="shadow rounded">
                    <Card.Body>
                        <Card.Title>Inline vs Inline-block vs Block Element.</Card.Title>
                        <Card.Text style={{ textAlign: "justify" }}>
                            <p>
                                <span className="fw-bolder">Inline: </span>
                                একটি লাইনে যতখন যায়গা থাকে ততক্ষণ পাশাপাশি বসে। এদের সাধারণত height width set করা যায় না।
                            </p>
                            <p>
                                <span className="fw-bolder">Inline-Block: </span>
                                একটি লাইনে যতখন যায়গা থাকে ততক্ষণ পাশাপাশি বসে। কিন্তু এদের height width set করা যায়। এটা css দিয়ে add করতে হয়। যেমন: <br />
                                a, span &#123; <br />
                                &emsp; display: inline-block; <br />
                                &#125;
                            </p>
                            <p>
                                <span className="fw-bolder">Block: </span>
                                Full line টা block করে দেয় এবং পাশে অন্য element কে থাকতে দেয় না অন্য লাইনে পাঠিয়ে দেয়।
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default InlineBlock;