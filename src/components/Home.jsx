import React, { useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import QuizeDetails from './QuizeDetails';
import { QuizContext} from './Roots';

const Home = () => {
   const quizes = useContext(QuizContext)
   const navigate = useNavigate()
   
   const handleAddToQuiz=(id)=>{
    navigate(`/quizes/${id}`)
   }
    return (
       
              <div> 
                <div className='mt-24'>
                  
               <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
               <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
              <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
               <div className="max-w-xl mb-6">
               <div>
              <p className="inline-block px-3 py-px mb-4 text-3xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                Easy Learn
              </p>
               </div>
               <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
               Easy Learn is a free online platfrom 
              <br className="hidden md:block" />
              where you can{' '}
              <span className="inline-block text-deep-purple-accent-400">
              give Quiz
              </span>
            </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Motivate every student to mastery with easy-to-customize programing content combined with tools for inclusive assessment, instruction, and practice.
            </p>
             </div>
            <div className="flex flex-col items-center md:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-600 hover:bg-purple-900 focus:shadow-outline focus:outline-none"
            >
              Lets Start
            </Link>
            <Link
              to="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
    </div>


           

                </div>
              <div className=" mt-12 grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
                   
                  
                  {
                    quizes.map(quize =><QuizeDetails
                    
                    key={quize.id}
                        quize={quize}
                        handleAddToQuiz={handleAddToQuiz}
                        >

                    </QuizeDetails>)
                  }
              </div>
              </div>
            );
          };


export default Home;