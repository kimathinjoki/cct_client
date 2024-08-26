import React, { useState } from "react";
import candidates from "../mockData/candidates.json"; 

function CandidateConsensus() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const candidatesPerPage = 3; 

  const handleNext = () => {
    if (currentIndex + candidatesPerPage < candidates.length) {
      setCurrentIndex(currentIndex + candidatesPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - candidatesPerPage >= 0) {
      setCurrentIndex(currentIndex - candidatesPerPage);
    }
  };

  const currentCandidates = candidates.slice(currentIndex, currentIndex + candidatesPerPage);

  return (
    <>
      <section className="relative flex">
        <div className="min-h-screen bg-white dark:bg-gray-900 md:w-2/5" />
        <div className="min-h-screen bg-gray-800 md:w-3/4" />
        <div className="flex flex-col justify-center w-full min-h-screen px-4 py-10 md:fixed md:mx-24">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            What the candidates <span className="text-blue-500">consensus</span> <br /> are
          </h1>
          
          <div className="grid w-full grid-cols-1 gap-8 mt-8 2xl:grid-cols-4 lg:mt-16 md:grid-cols-2 lg:grid-cols-3">

            {currentCandidates.map((candidate) => (
              <div key={candidate.id} className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-700">
                <div className="flex items-center mt-6 -mx-2">
                  <img
                    className="object-cover mx-2 rounded-full w-14 h-14"
                    src={candidate.image}
                    alt={candidate.name}
                  />
                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                      {candidate.name}
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="mt-5 text-xl font-semibold text-gray-500 dark:text-gray-400">Consensus</h1>
                  <p className="mt-2 text-gray-200">{candidate.rating !== null ? candidate.rating : "Not rated yet"}</p>
                </div>
              </div>
            ))}

          </div>

          <div className="items-center hidden mt-12 md:flex">
            <button
              title="left arrow"
              className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              title="right arrow"
              className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
              onClick={handleNext}
              disabled={currentIndex + candidatesPerPage >= candidates.length}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CandidateConsensus;