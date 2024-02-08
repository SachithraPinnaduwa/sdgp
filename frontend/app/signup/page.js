
"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import login from "../../public/login/img1.png";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";



function Page() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {e.preventDefault();

    if (!name || !email || !password){
      setError("Please fill in all fields");
      return; 
    }
    
    
  };

 
  return (
    <>
      <div className=" -mt-8 flex items-center justify-center h-screen">
        <div
          className=" flex-1 bg-slate-800 border-slate-400 rounded-md p-4 md:p-8 shadow-lg backdrop-filter backdrop-blur-sm 
        bg-opacity-30 relative flex flex-col items-center min-h-[95vh]"
        >
          <h1 className="text-4xl text-white font-bold text-center mb-52">
            Why choose us?
          </h1>
          <Image
            src={login}
            alt="login"
            className="mx-auto mb-8 md:w-24 md:h-24 "
          />
          <h2 className="text-white text-2xl font-bold mb-4 text-center">
            Secure Your Life
          </h2>
          <h3 className="text-white mb-4 text-center">
            With an advanced AI and a dedicated community that constantly
            provides updates on the latest scams, we commit ourselves to protect
            you from scams, ensuring a safe experience.
          </h3>
        </div>

        <div className="flex-1 bg-slate-800 border-slate-400 rounded-md p-4 md:p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative flex flex-col items-center">

          <h1 className="text-4xl text-white font-bold text-center mb-1">Get Started Now!</h1>
          <h3 className="text-sm text-white mb-6">Create Account Here</h3>

          <form onSubmit={handleSubmit} action="" className="flex flex-col w-full max-w-[300px] md:max-w-[400px]">

            <div className="relative my-6">
            <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="block w-full py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                  placeholder="Full Name"
              />
        
            </div>

            <div className="relative my-6">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="block w-full py-2.3 px-0 text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder="Email"
              />
            </div>

            <div className="relative my-6">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="block w-full py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder="Password"
              />
            </div>

            <div className="relative my-6">
              <input
                type="password"
                className="block w-full py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder="Confirm Password"
              />
            </div>

            <button
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-black-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
              type="submit"
            >
              Signup
            </button>

            {error && (
              <div className="bg-red-500 text-white p-2 rounded w-fit text-sm">
                {error}
              </div>
            )}

            <div className="w-full flex item-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-white"></div>
              <p className="text-lg absolute text-white/80 ">or</p>
            </div>

            <button className="bg-white text-[18px] text-black-800 p-1 rounded-full border-2 mt-8 w-full flex mx-auto justify-center hover:bg-emerald-600 hover:text-white">
              <FcGoogle className="text-3xl" />
              &nbsp;&nbsp;&nbsp;&nbsp;Login with Google
            </button>

            <div className="mt-4">
              <span className="m-4 text-white">
                Already have an account?&nbsp;
                <Link href={"../Signin"} className="text-blue-500">
                  Signin
                </Link>
              </span>
            </div>
          </form>
        </div>

      </div>
    </>
  );

}

export default Page;
