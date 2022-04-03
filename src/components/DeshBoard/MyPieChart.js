import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const MyPieChart = ({ chartsData }) => {
    return (
        <>
            <h3 className="text-center text-primary">Investment vs Revenue</h3>
            <PieChart width={600} height={400}>
                <Pie data={chartsData} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={chartsData} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                <Tooltip />
            </PieChart>
        </>
    );
};

export default MyPieChart;