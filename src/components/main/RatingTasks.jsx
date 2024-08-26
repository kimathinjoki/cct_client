import React, { useState } from "react";
import candidates from "../mockData/candidates.json"; // Adjust the path as necessary

function RatingTasks() {
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleNextCandidate = () => {
    const currentCandidate = candidates[currentCandidateIndex];
    currentCandidate.rating = sliderValue;

    if (currentCandidateIndex < candidates.length - 1) {
      setCurrentCandidateIndex(currentCandidateIndex + 1);
      setSliderValue(1); 
    } else {
      setIsModalOpen(true);
    }
  };

  const handlePreviousCandidate = () => {
    if (currentCandidateIndex > 0) {
      setCurrentCandidateIndex(currentCandidateIndex - 1);
      setSliderValue(candidates[currentCandidateIndex - 1].rating || 1);
    }
  };

  const handleImageClick = (image) => {
    window.open(image, "_blank");
  };

  const currentCandidate = candidates[currentCandidateIndex];

  return (
    <>
      <div className="h-screen">
        <div className="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
          <div className="bg-white shadow-2xl rounded-b-3xl">
            <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">
              {currentCandidate.name}
            </h2>
            <img
              src={currentCandidate.image}
              alt=""
              className="rounded-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover cursor-pointer"
              onClick={() => handleImageClick(currentCandidate.image)}
            />
            <div className="w-5/6 m-auto">
              <p className="text-center text-gray-500 pt-5">
                Please rate this candidate's logo on the slider below with 1.0 being the minimum score and 100 as the max
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

            <div className="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl text-white text-center shadow-xl shadow-bg-blue-700">
              <button
                className="lg:text-sm text-lg font-bold"
                onClick={handleNextCandidate}
              >
                Next candidate
              </button>
            </div>
            <div className="text-center m-auto mt-6 w-full h-16">
              <button
                className="text-gray-500 font-bold lg:text-sm hover:text-gray-900"
                onClick={handlePreviousCandidate}
              >
                Previous
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div class="mt-2 text-center">
                        <h3 class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">Save group Rating</h3>
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            That's the last candidate of this group
                        </p>
                    </div>
              </div>
              <div className="mt-5 sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex sm:items-center ">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                  >
                    Cancel
                  </button>
                  <button className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                  onClick={()=> setIsModalOpen(false)}
                  >
                    Confirm Ratings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RatingTasks;