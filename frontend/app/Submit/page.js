"use client";
import React, { useState } from "react";


function Submit() {
  const [email, setEmail] = useState("");
  const [name, setUsername] = useState("");
  const [scam, setScamDescription] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log("Form submitted:", { 
      name, 
      email,
      scam, 
     });
     const formData = {
      name, // This corresponds to the 'username' you're capturing, assuming you've adjusted the state variable's name for clarity
      email,
      scam, // This corresponds to the 'scamDescription' field in your form
    };
    try {
      // Perform the POST request to your backend endpoint
      const response = await fetch('http://localhost:3100/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        // Optionally reset form fields here
      } else {
        // Handle server errors or invalid responses
        throw new Error('Server responded with an error.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              name="username"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border rounded-md"
              required
            />
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
              name="scamDescription"
              value={scam}
              onChange={(e) => setScamDescription(e.target.value)}
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
