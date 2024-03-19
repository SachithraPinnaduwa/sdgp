"use client";
import React, { useEffect,useState } from 'react';
import { useAuth } from "../context/AuthContext";
import {getScamCount} from "../helpers/api-communicator";

function PaginationButtons( ) {
        
        const auth = useAuth();
     const [maxCount, setMaxCount] = useState(0);
 
       
     

          const isPreviousDisabled = auth.page === 1;
          const isNextDisabled = auth.page >= maxCount/auth.limit;
          useEffect(() => {
            async function fetchData() {
              const data = await getScamCount();
              
              setMaxCount(data.postCount)
                    console.log(data.postCount)
                    console.log(auth.limit)
             
            }
              fetchData()
             
            },[auth.page])
        // Helper function to disable buttons
        const disableButton = (disabled) => disabled ? "cursor-not-allowed opacity-50" : "";
  return (
    <div className="flex">
      {/* Previous Button */}
      <button
       onClick={() => auth.setPage( auth.page - 1 )}
       disabled={isPreviousDisabled}
        className={`flex flex-row items-center w-[8vw] justify-center px-3 h-[4vh] me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" ${disableButton(isPreviousDisabled)}`}
      >
        <svg
          className="w-3.5 h-3.5 me-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Previous
      </button>
      <button
      onClick={() => auth.setPage( auth.page + 1 )}
       disabled={isNextDisabled}
        className={`flex items-center h-[4vh] w-[8vw] justify-center px-3  text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" ${disableButton(isNextDisabled)}`}
      >
        Next
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
}

export default PaginationButtons;
