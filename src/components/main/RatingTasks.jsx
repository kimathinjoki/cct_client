import React, {useState} from "react";

function RatingTasks() {


    const [sliderValue, setSliderValue] = useState(1); 

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

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
                    className="rounde-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"
                    />
                    <div className="w-5/6 m-auto">
                        <p className="text-center text-gray-500 pt-5">
                        Please rate this candidates logo on the slider bellow with 1.0 being the minimum score and  100 as the max
                        </p>
                    </div>

                    <div className="w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">      
                        <div className="flex flex-col items-center">
                            <fieldset className="w-full space-y-1 dark:text-gray-800">
                            <label className="item-center">Rating</label>
                            <input 
                                type="range" 
                                className="w-full dark:accent-violet-600" 
                                min="1" 
                                max="100"
                                value={sliderValue}
                                onChange={handleSliderChange}
                            />
                            <div className="text-center mt-2">
                                <span className="text-gray-800 font-semibold">{sliderValue}</span>
                            </div>
                            </fieldset>
                        </div>  
                    </div>

                    <div className="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
                        <button classs="lg:text-sm text-lg font-bold">
                        Next candidate
                        </button>
                    </div>
                    <div className="text-center m-auto mt-6 w-full h-16">
                        <button className="text-gray-500 font-bold lg:text-sm hover:text-gray-900">
                            Previous
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RatingTasks;