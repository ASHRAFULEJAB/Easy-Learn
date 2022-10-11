import React, { createContext } from 'react';
import {  Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';


export const QuizContext = createContext([])
export const QuizIdContext = createContext([])

const Root = () => {
    const quizesData =useLoaderData()
    const quizes =quizesData.data
    const quizeData= useLoaderData()
    const quiz=quizeData.data
    return (
        <QuizContext.Provider value={quizes}>
            <QuizIdContext.Provider value={quiz}>

            <Header></Header>
            <Outlet></Outlet>

            </QuizIdContext.Provider>
        </QuizContext.Provider>
    );
};

export default Root;