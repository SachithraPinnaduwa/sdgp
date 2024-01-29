"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";

function Submit() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [scamDescription, setScamDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { email, username, scamDescription });
  };

  return (
    <>
      <Navbar />
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
              value={username}
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
              value={scamDescription}
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
