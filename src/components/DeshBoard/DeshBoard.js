import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyAreaCharts from './MyAreaCharts';
import LineChartForSales from './LineChartForSales';
import MyBarChart from './MyBarChart';
import MyPieChart from './MyPieChart';

const DeshBoard = () => {
    const [chartsData, setChartsData] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setChartsData(data));
    }, []);
    return (
        <>
            <Container>
                <Row xs={1} md={2}>
                    <Col>
                        <LineChartForSales chartsData={chartsData} />
                    </Col>
                    <Col>
                        <MyAreaCharts chartsData={chartsData} />
                    </Col>
                    <Col>
                        <MyBarChart chartsData={chartsData} />
                    </Col>
                    <Col>
                        <MyPieChart chartsData={chartsData} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DeshBoard;