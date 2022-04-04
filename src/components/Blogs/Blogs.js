import React from 'react';
import { Container, Row } from 'react-bootstrap';
import InlineBlock from './Answers/InlineBlock';
import SemanticTag from './Answers/SemanticTag';
import WhatIsContext from './Answers/WhatIsContext';

const Blogs = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row xs={1} md={3}>
                    <WhatIsContext />
                    <InlineBlock />
                    <SemanticTag />
                </Row>
            </Container>
        </>
    );
};

export default Blogs;