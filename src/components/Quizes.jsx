import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz';

const Quizes = () => {
    const singleQuiz = useLoaderData()
    const{name,questions}=singleQuiz.data
    return (
        
       
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                  <p className="inline-block px-3 py-px mb-4 text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                    Quiz of {name}
                    
                
                  </p>
                  <p className="text-base text-gray-700 md:text-2xl font-bold">
                    Quiz:{questions.length}
                  </p>
                </div>
                {
                       
                       questions.map(question=><SingleQuiz
                       
                       key={question.id}
                       question={question}
                       >

                       </SingleQuiz>)
                   }
                
                  </div>
                  
              
            );
          };

export default Quizes;