
import React from 'react';

const MyDropdown = () => {


    return (
        <div className={'flex flex-row mx-auto gap-40'}>

            <select
                name="dropdown"
                id="dropdown"
                className="block w-full px-4 py-2 mt-1  bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            >
                <option value="">Select Location</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>

            <button
                className="bg-blue-500 text-white py-1 px-10 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                Current Location
            </button>

        </div>
    );
};

export default MyDropdown;
