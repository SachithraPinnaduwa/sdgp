"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
function Submit() {
 

  const districts = [
    'Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo',
    'Galle', 'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara',
    'Kandy', 'Kegalle', 'Kilinochchi', 'Kurunegala', 'Mannar',
    'Matale', 'Matara', 'Monaragala', 'Mullaitivu', 'Nuwara Eliya',
    'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya',
  ];
const auth = useAuth();
  const handleSubmit =async (e) => {
    e.preventDefault();
   
     const formData = new FormData(e.currentTarget);
     const title = formData.get('title');
      const name = formData.get('name');
      const district = formData.get('district');
      const scam = formData.get('scam');
      console.log(name,district,scam,title);
    try {
      
    await auth.scamPost(name,district,scam,title);

     
        console.log("Form submitted successfully:");
        toast.success("Form submitted successfully.");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again later.");
    }
  };
  
  return (
    <>
      
      <div className="container mx-auto mt-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto p-8 rounded shadow-md "
        >
          <h2 className="text-4xl font-semibold mb-8 text-slate-50">
            Submit Scam Report
          </h2>

         

          {/* Username Input */}
          <div className="mb-6 flex gap-10 ">
            <label
              htmlFor="username"
              className="block text-xl font-medium text-gray-600 mb-2 w-1/4"
            >
              Username
            </label>
            <input

              type="text"
              id="username"
              name="name"

              
              className="w-full p-3 border rounded-md"
              required
            />
          </div>

          {/* title Input */}
          <div className="mb-6 flex gap-10 ">
            <label
              htmlFor="title"
              className="block text-xl font-medium text-gray-600 mb-2 w-1/4"
            >
              Title
            </label>
            <input
              type="text"

              id="title"
              name="title"

              
              className="w-full p-3 border rounded-md"
              required
            />
          </div>


          {/* District */}
          <div className="mb-6 flex gap-10">
  <label
    htmlFor="district"
    className="block text-xl font-medium text-gray-600 mb-2 w-1/4"
  >
    District
  </label>
  <select
    id="district"
    name="district"
    className=" p-3 border rounded-md"
    required
  >
    {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}

  </select>
</div>


          {/* Scam Description Input */}
          <div className="mb-8 flex gap-10">
            <label
              htmlFor="scamDescription"
              className="block text-xl font-medium text-gray-600 mb-2 w-1/4"
            >
              Scam Description
            </label>
            <textarea
              id="scamDescription"
              name="scam"
              
              
              className="w-full p-3 border rounded-md"
              rows="10"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mb-8 flex items-center justify-center">
            <button
              type="submit"
              className="w-1/4 bg-blue-500 text-white p-3 rounded-md"
              
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Submit;
