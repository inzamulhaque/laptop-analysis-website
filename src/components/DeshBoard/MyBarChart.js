import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = ({ chartsData }) => {
    return (
        <>
            <h3 className="text-center text-primary">Investment vs Revenue</h3>
            <BarChart width={500} height={400} data={chartsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" />
                <Bar dataKey="investment" fill="#82ca9d" />
            </BarChart>
        </>
    );
};

export default MyBarChart;