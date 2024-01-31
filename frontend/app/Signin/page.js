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
