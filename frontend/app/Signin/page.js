 
"use client";
import React from 'react';
import { useState,useEffect } from 'react';
import Image from 'next/image';
import login from '../../public/login/img1.png';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


function Page() {
 
  const router = useRouter();
const auth = useAuth();

useEffect(() => {

  const timeoutId = setTimeout(() => {
      console.log(auth); // Log the auth state after the timeout
  
      if (auth?.user) {
        router.push('/');
      } else {
      }
    }, 1); 
  
    return () => clearTimeout(timeoutId);
    }, [auth]);
  const handleSubmit = async(e) => {
    e.preventDefault();
const formData = new FormData(e.currentTarget);
const email = formData.get('email');
const password = formData.get('password');


try {
  toast.loading('Logging in...',{id:'login'});
  await auth?.login(email, password);
  toast.success('Logged in successfully',{id:'login'});
  router.push('/');
} catch (error) {
  toast.error(`Failed to login ${error}`,{id:'login'});
}
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
               name='email'
                type="text"
                className="block w-full py-2.3 px-0 text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-600 focus:outline-none focus:ring-0 text-white focus:border-blue-600 peer"
                placeholder="Email"
              />
            </div>

            <div className="relative my-6">
              <input
               name='password'
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

}

export default Page;
