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


               {/* <div className="overflow-hidden bg-gray-900">
               <img
                  src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="absolute inset-0 object-cover w-full h-full"
                     alt=""
                           />
               <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                 <div className="flex flex-col items-center justify-between xl:flex-row">
                 <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                     Easy Learn is a online platfrom <br className="hidden md:block" />
                     where you can {' '}
                      <span className="text-teal-accent-400">give Quiz</span>
                      </h2>
                    <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                    Motivate every student to mastery with easy-to-customize programing content combined with tools for inclusive assessment, instruction, and practice.
                     </p>
                     <Link
                        to="/"
                      aria-label=""
                     className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-400 hover:text-teal-700"
                         >
                       Learn more
                     <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                        >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                     </svg>
                   </Link>
                   </div>
                    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                      <div className="relative">
                     <svg
                     viewBox="0 0 52 24"
                    fill="currentColor"
                     className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                         >
                    <defs>
                    <pattern
                    id="766323e1-e594-4ffd-a688-e7275079d540"
                    x="0"
                    y="0"
                    width=".135"
                     height=".30"
                    >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                   </defs>
                   <rect
                  fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                  width="52"
                  height="24"
                   />
                  </svg>
                   <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                   <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign up for Giving Quizes
                   </h3>
                   <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      Name
                    </label>
                    <input
                      placeholder="Ashraful Islam"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-600 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                      />
                      </div>
                      <div className="mb-1 sm:mb-2">
                       <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="ashraful@example.com"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-600 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                       />
                     </div>
                      <div className="mt-4 mb-2 sm:mb-4">
                     
                      
                      <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                    >
                      Lets Start
                 
                    </button>
                 
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your privacy. Thanks For getting Started.
                  </p>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

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