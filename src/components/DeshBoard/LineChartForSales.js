import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const LineChartForSales = ({ chartsData }) => {
    return (
        <>
            <h3 className="text-center text-primary">Sales</h3>
            <LineChart width={500} height={400} data={chartsData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            </LineChart>
        </>
    );
};

export default LineChartForSales;