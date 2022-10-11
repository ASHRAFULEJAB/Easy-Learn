import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        
       
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
                  <div className="lg:col-span-2">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                      09 Oct 2022
                    </p>
                    <div className="mb-3">
                      <Link
                        href="/blog"
                        aria-label="Article"
                        className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                        What is the purpose of react router?
                        </p>
                      </Link>
                    </div>
                    <p className="mb-4 text-base text-gray-700 md:text-lg">
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    </p>
                    <div className="flex items-center">
                      <Link  to="/blog" aria-label="Author" className="mr-3">
                        <img
                          alt="avatar"
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                          className="object-cover w-10 h-10 rounded-full shadow-sm"
                        />
                      </Link>
                      <div>
                        <Link
                          to="/blog"
                          aria-label="Author"
                          className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Ashraful Islam
                        </Link>
                        <p className="text-sm font-medium leading-4 text-gray-600">
                          Author
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-8 lg:col-span-3">
                    <div>
                      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                        10 Aug 2022
                      </p>
                      <div className="mb-3">
                        <Link
                          to="/blog"
                          aria-label="Article"
                          className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                            How does Context API works?
                          </p>
                        </Link>
                      </div>
                      <p className="mb-4 text-base text-gray-700 md:text-lg">
                      The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                      </p>
                      <div className="flex items-center">
                        <Link to="/blog" aria-label="Author" className="mr-3">
                          <img
                            alt="avatar"
                            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            className="object-cover w-10 h-10 rounded-full shadow-sm"
                          />
                        </Link>
                        <div>
                          <Link
                            to="/blog"
                            aria-label="Author"
                            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Ejab
                          </Link>
                          <p className="text-sm font-medium leading-4 text-gray-600">
                            Author
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                        11 Oct 2022
                      </p>
                      <div className="mb-3">
                        <Link
                          hto="/blog"
                          aria-label="Article"
                          className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                            What do you mean by useRref?
                          </p>
                        </Link>
                      </div>
                      <p className="mb-4 text-base text-gray-700 md:text-lg">
                      The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                      </p>
                      <div className="flex items-center">
                        <Link  to="/blog" aria-label="Author" className="mr-3">
                          <img
                            alt="avatar"
                            src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            className="object-cover w-10 h-10 rounded-full shadow-sm"
                          />
                        </Link>
                        <div>
                          <Link
                            to="/blog"
                            aria-label="Author"
                            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            AsshEjab
                          </Link>
                          <p className="text-sm font-medium leading-4 text-gray-600">
                            Author
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          };
  

export default Blog;