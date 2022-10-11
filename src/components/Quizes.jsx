import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const singleQuiz = useLoaderData()
    console.log(singleQuiz.data)
    return (
        <div>
            <h1>quiz</h1>
        </div>
    );
};

export default Quizes;