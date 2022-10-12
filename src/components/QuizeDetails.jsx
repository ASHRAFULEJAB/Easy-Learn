import React from 'react';

const QuizeDetails = ({quize,handleAddToQuiz}) => {
    
    const {id,logo,name,total}=quize
    return (
       
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-2xl hover:shadow">
        <div className="relative w-full h-48">
          <img
            src={logo}
            className="object-cover w-full h-full rounded-t bg-black"
            alt="Plan"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
          <div>
            <div className="text-lg font-bold"></div>
            <p className="text-sm text-gray-900">
              
              {name}
            </p>
            <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
              
              Total Question:{total}
            </div>
          </div>
          <button
          onClick={()=>handleAddToQuiz(id)}
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-cyan-700 focus:shadow-outline focus:outline-none"
          >
            Click Here for Practice
          </button>
          </div>
          </div>
            );
          };
  

export default QuizeDetails;