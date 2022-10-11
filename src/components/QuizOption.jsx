import React, { useState } from 'react';


const QuizOption = ({quizoption,handleCorrectAnswer, ToastContainer}) => {
    
    return (
        <div>
            <div className='text-center ' >
           
            <p   className=' border m-5 p-6  flex items-center justify-center'><input type="radio" value={quizoption} onClick={()=>handleCorrectAnswer(quizoption)}name="radio-1" className="radio "  />{quizoption}</p>
            <ToastContainer/>
        </div>
        <div>
        
        </div>

        </div>
    );
};

export default QuizOption;