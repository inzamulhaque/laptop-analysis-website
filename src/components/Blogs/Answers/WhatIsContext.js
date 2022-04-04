import React from 'react';
import { Card, Col } from 'react-bootstrap';

const WhatIsContext = () => {
    return (
        <>
            <Col>
                <Card style={{ width: '18rem' }} className="shadow rounded">
                    <Card.Body>
                        <Card.Title>What is context API?</Card.Title>
                        <Card.Text style={{ textAlign: "justify" }}>
                            react unidirectional ভাবে data pass করে। react উপর থেকে নিচের দিকে data pass করে। সেটা props হিসাবে করা যায়। কিন্তু props হিসাবে data pass করলে child এর child কে data pass করা যায় না। props হিসাবে data সরাসরি child কে pass করা যায়। এতে child এর child বা আরো কয় এক laval পরের child কে data pass করার জন্য props drilling করতে হয়। এই props drilling থেকে বাচতে context api use করা হয়। context api এর মাধ্যমে সরাসরি child component এবং তাদের যত child component আসে তাদের মধ্যে data pass করা যায়।
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default WhatIsContext;