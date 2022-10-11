import React from 'react';

const QuizOption = ({quizoption}) => {
    return (
        <div>
            <div className='text-center ' >
           
            <p className=' border m-5 p-6  flex items-center justify-center'><input type="radio" name="radio-1" className="radio "  />{quizoption}</p>
        </div>
        </div>
    );
};

export default QuizOption;