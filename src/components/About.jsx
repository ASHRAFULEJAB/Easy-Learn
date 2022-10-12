import React from 'react';

const About = () => {
    return (
      
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
              <p className="mb-1 text-3xl font-semibold tracking-wide uppercase md:mb-2 bg-teal-400 border rounded-2xl p-5">
                About Us(Easy Learn)
              </p>
              <p className="text-base text-gray-700 md:text-lg">
              Motivate every student to mastery with easy-to-customize programing content combined with tools for inclusive assessment, instruction, and practice.
              </p>
            </div>
            <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
              <div>
                <img
                  className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
                  src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  alt=""
                />
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  Our Happy Student 1
                </h5>
                <p className="text-gray-700">
                When you grade the students’ quiz attempts from the Activities/Quizzes, select Grade from the contextual menu of the quiz. On the Users tab, you will see all students who have completed an attempt. Click on the Overall Grade (highest attempt) and then scroll down to the bottom.
                </p>
              </div>
              <div>
                <img
                  className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Our Happy Student 2
                </h5>
                <p className="text-gray-700">
                written response type of questions), then you will need to set up a different Submission View for your quiz, other than the default one. In the Submission View for the quiz, either “Show questions answer incorrectly”, “Show questions answered correctly”, or “Show all questions with user responses” must be selected.
                </p>
              </div>
              <div>
                <img
                  className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Our Happy Student 3
                </h5>
                <p className="text-gray-700">
                Grade from the contextual menu. The Users tab will display your students’ names and their quiz attempts. Click on the attempt (1, 2, 3, etc) you want to give feedback to and enter the comments in the Attempt Feedback text box. The Attempt drop-down list gives you the option to select different quiz attempts for the same student, while the arrows at the top of the screen allow you to move to the next student.
                </p>
              </div>
            </div>
          </div>
        );
      };
           

export default About;