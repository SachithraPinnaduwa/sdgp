 
"use client";
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import login from '../../public/login/img1.png';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";


function Page() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {e.preventDefault();

  //  try {
 //   }catch (error) {
      setError("Invalid email or password");
 //   }
  };

  return (
    <>
    
    <div className="-mt-8 flex items-center justify-center h-screen">
    
        <div className="flex-1 bg-slate-800 border-slate-400 rounded-md p-4 md:p-8 shadow-lg backdrop-filter backdrop-blur-sm 
        bg-opacity-30 relative flex flex-col items-center min-h-[95vh]">
          <h1 className="text-4xl text-white font-bold text-center mb-1">Welcome Back!</h1>
          <h3 className="text-sm text-white mb-6">Login Here</h3>

          <form  onSubmit={handleSubmit} action="" className="flex flex-col w-full max-w-[300px] md:max-w-[400px]">
           
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

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="" name="" />
              <label htmlFor="remember" className="text-white">
                Remember me
              </label>
            </div>
            <Link href="" className="text-blue-500">
              Forgot Password?
            </Link>
          </div>
          <button
              className="w-full mb-4 text-[18px] mt-6 rounded-full 
              bg-white text-black-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
              type="submit"
            >
              Login
            </button>

            {error && (
              <div className='bg-red-500 text-white p-2 rounded w-fit text-sm'>
                {error}
                </div>
            )}

            <div className="w-full flex item-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-white"></div>
              <p className="text-lg absolute text-white/80 ">or</p>
            </div>

            <button className="bg-white  text-[18px] text-black-800 p-1 rounded-full border-2 mt-8 w-full flex mx-auto justify-center hover:bg-emerald-600 hover:text-white mb-4"
            >
              <FcGoogle className="text-3xl" />
              &nbsp;&nbsp;&nbsp;&nbsp;Login with Google
            </button>

            <div className="mb-4">
              <span className="text-white">
                Create New Account&nbsp;
                <Link href={'/signup'} className="text-blue-500">
                  Signup
                </Link>
              </span>
            </div>

        </form>
      </div>

      <div className="flex-1 bg-slate-800 border-slate-400 rounded-md p-4 md:p-8 shadow-lg backdrop-filter backdrop-blur-sm 
        bg-opacity-30 relative flex flex-col items-center min-h-[95vh]">
          <h1 className="text-4xl text-white font-bold text-center mb-52">Why choose us?</h1>
          <Image src={login} alt="login" className="mx-auto mb-2 md:w-24 md:h-24" />
          <h2 className="text-white text-2xl font-bold mb-4 text-center">Secure Your Life</h2>
          <h3 className="text-white mb-4 text-center">
            With an advanced AI and a dedicated community that constantly provides updates on the latest scams, we commit ourselves
            to protect you from scams, ensuring a safe experience.
          </h3>
        </div>
    </div>
    </>
  );
=======
import React from 'react';
import Image from 'next/image';
import login from '../../public/login/img1.png';
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";


function Page() {
    return (
        <div className="flex flex-row min-h-screen max-h-screen">
            <div className="flex-1 bg-gradient-to-r from-purple-700 to-blue-500 p-8">
                <h1 className=" text-3xl font-bold mb-4 flex justify-center text-blue-500 ">Why Choose Us?</h1>
                <Image src={login} alt="login" className="mx-auto mb-4"/>
                <h2 className="text-white text-2xl font-bold mb-2 justify-center flex">Secure Your Life</h2>
                <h3 className="text-white mb-4 justify-center flex">With an advanced AI and a dedicated community that constantly provides updates on the latest scams,
                    we commit ourselves to protect you from scams, ensuring a safe experience.</h3>
                <p className="text-white mb-8 justify-center flex">Become part of an active community that prevents scams together.</p>
            </div>
            <div className="flex-1 px-[5%] text-blue-950 bg-white justify-center flex flex-col">
                <h1 className="text-4xl font-bold mb-8 ">Welcome Back!</h1>
                <form className="flex flex-col">


                    <input type="email" id="email" name="email" className="border rounded-md p-2 mb-8"
                           placeholder={'Email'}/>


                    <input type="password" id="password" name="password" className="border rounded-md p-2 mb-8"
                           placeholder={'Password'}/>

                    <button type="submit" className="bg-blue-500 text-white p-3 rounded-md w-3/4 flex mx-auto justify-center">Submit</button>
                    <button  className="bg-white text-black p-3 rounded-md border-2 mt-4 w-3/4 flex mx-auto justify-center"><FcGoogle className="text-3xl"/>&nbsp;&nbsp;&nbsp;&nbsp;Login with Google</button>
                    <button  className="bg-white text-black p-3 rounded-md border-2 mt-4 w-3/4 flex mx-auto justify-center"><FaFacebookSquare className="text-blue-600 text-3xl"/>&nbsp;&nbsp;&nbsp;&nbsp;Login with Facebook</button>
                </form>
                <p className="flex justify-center py-16">Don&apos;t have an account?
                    <Link
                    href={'/signup'}>
                    <span className="text-blue-600"> &nbsp;	Signup</span>
                    </Link></p>
            </div>
        </div>
    );
}

export default Page;
