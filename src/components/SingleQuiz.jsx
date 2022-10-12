import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import QuizOption from './QuizOption';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


const SingleQuiz = ({question}) => {
    // console.log(question)
    const{id,question:abc,options,correctAnswer}=question

    const handleRightAns=(correctAnswer)=>{
        toast.info(<div>{correctAnswer}</div>,{autoClose:500})
        console.log(correctAnswer)
    }

    const handleCorrectAnswer = (e)=>{
   if(e === correctAnswer)
   {
    toast.success('Your Answer is Correct..YAY!!',{autoClose:500})
   }
   else{
    toast.warning('You have Selectd Your Option!!Better Luck for next time..',{autoClose:500})
   }
   
    }
    return (
        <div>
            <div className=" bg-gray-200 grid gap-2 mx-auto lg:grid-cols-2 lg:max-w-screen-lg border p-5 border-gray-900 m-4 shadow-lg rounded-lg">
                  <div className=" sm:grid-cols-3">
                   <h1 className='text-center'>Quiz:{question.findIndex}</h1>
                    <div className=" justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                      <p className="text-lg font-bold text-center">Quiz:{abc}</p>
                    <div className='flex items-center  justify-center'>
                    <div className='grid grid-cols-2 items-center py-5  '>
                        {
                            options.map(quizoption=><QuizOption
                            key={quizoption.idx}
                            quizoption={quizoption}
                            handleCorrectAnswer={handleCorrectAnswer}
                            ToastContainer={ToastContainer}
                            >

                            </QuizOption>)
                        }
                    </div>
                        
                        
                      </div>
                      </div>
                    </div>
                  <div className='lg:m-48'>
                        <FontAwesomeIcon  onClick={()=>handleRightAns(correctAnswer)} className='text-3xl' icon={faEye} />
                        </div>
                  </div>
                  
                    </div>
        
    );
};

export default SingleQuiz;