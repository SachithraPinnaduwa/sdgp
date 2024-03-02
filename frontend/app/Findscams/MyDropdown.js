
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
                <option value="Colombo">Colombo</option>
                <option value="Gampaha">Gampaha</option>
                <option value="Kalutara">Kalutara</option>
                <option value="Kandy">Kandy</option>
                <option value="Matale">Matale</option>
                <option value="Nuwara Eliya">Nuwara Eliya</option>
                <option value="Galle">Galle</option>
                <option value="Matara">Matara</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Kilinochchi">Kilinochchi</option>
                <option value="Mannar">Mannar</option>
                <option value="Mullaitivu">Mullaitivu</option>
                <option value="Vavuniya">Vavuniya</option>
                <option value="Batticaloa">Batticaloa</option>
                <option value="Ampara">Ampara</option>
                <option value="Trincomalee">Trincomalee</option>
                <option value="Kurunegala">Kurunegala</option>
                <option value="Puttalam">Puttalam</option>
                <option value="Anuradhapura">Anuradhapura</option>
                <option value="Polonnaruwa">Polonnaruwa</option>
                <option value="Badulla">Badulla</option>
                <option value="Monaragala">Monaragala</option>
                <option value="Ratnapura">Ratnapura</option>
                <option value="Kegalle">Kegalle</option>
                
            </select>

            <button
                className="bg-blue-500 text-white py-1 px-10 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                Current Location
            </button>

        </div>
    );
};

export default MyDropdown;
