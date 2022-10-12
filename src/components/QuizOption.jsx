import React from 'react'


const QuizOption = ({quizoption,handleCorrectAnswer, ToastContainer}) => {
    
    return (
        <div>
            <div className='text-center ' >
           
            <p   className=' border border-gray-900 m-5 lg:px-24 lg:py-6  flex items-center justify-center'><input type="radio" value={quizoption} onClick={()=>handleCorrectAnswer(quizoption)}name="radio-1" className="radio border border-gray-900 p-3 ml-3"  />{quizoption}</p>
            <ToastContainer/>
        </div>
        <div>
        
        </div>

        </div>
    );
};

export default QuizOption;