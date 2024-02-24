import React from 'react';

const MyDropdown = () => {
    const locations = [
        "Colombo",
        "Gampaha",
        "Kalutara",
        "Kandy",
        "Matale",
        "Nuwara Eliya",
        "Galle",
        "Matara",
        "Jaffna",
        "Kilinochchi",
        "Mannar",
        "Mullaitivu",
        "Vavuniya",
        "Batticaloa",
        "Ampara",
        "Trincomalee",
        "Kurunegala",
        "Puttalam",
        "Anuradhapura",
        "Polonnaruwa",
        "Badulla",
        "Monaragala",
        "Ratnapura",
        "Kegalle"
    ];

    return (
        <div className="flex flex-row mx-auto gap-40 ">
            <select
                name="dropdown"
                id="dropdown"
                className="block w-full px-4 py-2 mt-1 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            >
                <option value="">Select Location</option>
                {locations.map((location, index) => (
                    <option key={index} value={location}>
                        {location}
                    </option>
                ))}
            </select>

            <button className="bg-blue-500 text-white py-1 px-10 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                Current Location
            </button>
        </div>
    );
};

export default MyDropdown;
