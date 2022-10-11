import React from 'react';
import QuizOption from './QuizOption';


const SingleQuiz = ({question}) => {
    console.log(question)
    const{id,question:abc,options,correctAnswer}=question
    return (
        <div>
            <div className="grid gap-2 mx-auto lg:grid-cols-2 lg:max-w-screen-lg border p-5 border-stone-600 m-4 shadow-lg rounded-lg">
                  <div className=" sm:grid-cols-3">
                   <h1 className='text-center'>Quiz:{question.findIndex}</h1>
                    <div className=" justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                      <p className="text-lg font-bold text-center">{abc}</p>
                      {/* <p className="mb-4 text-xs text-gray-800"></p>
                      <p className="mb-4 text-sm tracking-wide text-gray-800">
                        
                      </p> */}
                      <div className='grid grid-cols-2 items-center py-5'>
                        {
                            options.map(quizoption=><QuizOption
                            key={quizoption.idx}
                            quizoption={quizoption}
                            >

                            </QuizOption>)
                        }
                      </div>
                      {/* <div className="flex items-center space-x-3">
                        <a
                          href="/"
                          className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                          
                        </a> */}
                        {/* <a
                          href="/"
                          className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                          
                        </a> */}
                      </div>
                    </div>
                  </div>
                  
                    </div>
        
    );
};

export default SingleQuiz;