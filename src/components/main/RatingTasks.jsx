import React from "react";

function RatingTasks() {

    return(
        <>
            <div className="h-screen">
                <div className="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
                    
                    <div className="bg-white shadow-2xl rounded-b-3xl">
                    <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">
                        Candidate 1
                    </h2>
                    <img
                    src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg"
                    alt=""
                    className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"
                    />
                    <div className="w-5/6 m-auto">
                        <p className="text-center text-gray-500 pt-5">
                        Please rate this candidates logo on the slider bellow with 1.o being the minimum score and 
                        </p>
                    </div>
                    <div className="grid grid-cols-4 w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
                        <div className="col-span-1">
                
                        </div>
                        <div className="col-span-2 pt-1">
                        <fieldset className="space-y-1 sm:w-60 dark:text-gray-800">
                            <input type="range" className=" dark:accent-violet-600" min="1" max="5" />
                            <div aria-hidden="true" className="flex justify-between px-1">
                                
                            </div>
                        </fieldset>
                        </div>
                        <div className="pt-2">
                        <a
                            href="https://google.com"
                            className="text-indigo-700 underline hover:no-underline  text-sm hover:text-indigo-500 font-bold"
                        >
                            Change
                        </a>
                        </div>
                    </div>
                    <div className="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
                        <button classs="lg:text-sm text-lg font-bold">
                        Proceed to Payment
                        </button>
                    </div>
                    <div className="text-center m-auto mt-6 w-full h-16">
                        <button className="text-gray-500 font-bold lg:text-sm hover:text-gray-900">
                        Cancel Order
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RatingTasks;