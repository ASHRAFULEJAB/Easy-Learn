import React, { useContext } from 'react';
import { QuizContext } from './Roots';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StatisticsDetails = () => {
    const quizes=useContext(QuizContext)

const quizeData = quizes;
    
    return (
        <div className='mt-40' >
            <ResponsiveContainer width="85%" height={400}>
            <BarChart  
            className="barChart"
            width={600}
            height={300}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            label="heaf"
            data={quizeData}>
            <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>
        </div>
    );
};

export default StatisticsDetails;