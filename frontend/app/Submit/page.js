"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
function Submit() {
 
  
const auth = useAuth();
  const handleSubmit =async (e) => {
    e.preventDefault();
    
     const formData = new FormData(e.currentTarget);
      const email = formData.get('email');
      const name = formData.get('name');
      const province = formData.get('province');
      const scam = formData.get('scam');
      console.log(email,name,province,scam);
    try {
      
    await auth.scamPost(name,email,province,scam);
     
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

          {/* Email Input */}
          <div className="mb-6 flex gap-10">
            <label
              htmlFor="email"
              className="block text-xl font-medium text-gray-600 mb-2 w-1/4"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              
              
              className="w-full p-3 border rounded-md"
              required
            />
          </div>

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

          {/* Province */}
          <div className="mb-6 flex gap-10">
  <label
    htmlFor="province"
    className="block text-xl font-medium text-gray-600 mb-2 w-1/4"
  >
    Province
  </label>
  <select
    id="province"
    name="province"
    className=" p-3 border rounded-md"
    required
  >
    <option value="">Select a province</option>
    <option value="Central">Central</option>
    <option value="Eastern">Eastern</option>
    <option value="North Central">North Central</option>
    <option value="Northern">Northern</option>
    <option value="North Western">North Western</option>
    <option value="Sabaragamuwa">Sabaragamuwa</option>
    <option value="Southern">Southern</option>
    <option value="Uva">Uva</option>
    <option value="Western">Western</option>
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
