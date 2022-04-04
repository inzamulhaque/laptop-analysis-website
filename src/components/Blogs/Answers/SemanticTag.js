import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SemanticTag = () => {
    return (
        <>
            <Col>
                <Card style={{ width: '18rem' }} className="shadow rounded">
                    <Card.Body>
                        <Card.Title>What is semantic tg in html?</Card.Title>
                        <Card.Text style={{ textAlign: "justify" }}>
                            semantic বলতে meaningful কিছু বোঝায়। html এ বেশ কিছু tag আছে যেগুলো meaningful. সে tag গুলো দেখলে ই বুঝা যায় তাদের কাজ কি। যেমম header, nav, section, main, article, footer etc. Search Engine Optimization(SEO) এর জন্য শুধু div tag use না করে এই সব tag use করা অনেক important. এতে search engine বুঝতে পারে website কি related এবং website এর কোথায় কি আছে।
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default SemanticTag;