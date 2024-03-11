"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import Button from "../components/Button";
import { getUser } from "../helpers/api-communicator";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";


import { useEffect } from "react";


function UserDetail() {
  const [userData, setUserData] = useState({});
  const auth = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = auth.user.email;
        const data = await auth.getUserDetails(email);
        setUserData(data.userData);
        console.log(email);
        
      } catch (error) {
        console.error('Error getting user data:', error);
      }
    };

    fetchUserData();
  }, [auth]);

  return (
    <div className="container mx-auto my-5 p-5 ">
      <div className={"mt-[5%] text-center text-amber-50"}>
          <h2 className={"text-3xl font-semibold text-teal-400"}>Your Details</h2>
      </div>
      <div className="md:flex no-wrap  mt-[5%]">
      
        <div className="w-full md:w-3/12 md:mx-2 mt-[0.2%]  ">
          <div className="bg-white p-3 border dark:bg-gray-600 border border-e-0 border-gray-300 rounded-xl">
            <div className="">
              <Image src="/UserDetails/anonymous_avatars_grey_circles.jpg" width={150} height={150} alt="logo " className=" rounded-[50%]" />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1 ml-8">
              {userData.name}
            </h1>
                        
            <ul className="bg-gray-100 text-gray-600  py-2 px-3 mt-3 divide-y rounded-xl ">
              <li className="flex items-center py-3">
                <span>Status</span>
                <span className="ml-auto">
                  <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                    Active
                  </span>
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>Member since</span>
                <span className="ml-auto">March 07, 2024</span>
              </li>
            </ul>
          </div>
          <div className="my-4"></div>
        </div>
        <div className="w-full md:w-9/12 mx-2 h-64 ">
          <div className="dark:bg-gray-600 border border-e-0 border-gray-300 p-3 rounded-xl bg-slate-100 pb-10">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="text-green-500">
               
                <div>*</div>
              </span>
              <span className="tracking-wide text-2xl">About</span>
            </div>
            <div className="text-white mt-[2%] text-xl">
              <div className="grid md:grid-cols-2 mt-[2%]">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">First Name : </div>
                  <div className="px-01 py-2">{userData.firstName}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Last Name : </div>
                  <div className="px-4 py-2">{userData.lastName}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">User Name : </div>
                  <div className="px-01 py-2">{userData.name}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email : </div>
                  <div className="px-4 py-2">{userData.email}</div>
                </div>
                <div>

                </div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 ml-[65%] mt-6">
                  <Link href={'../UserDetailPageEdit'}>
                    <Button 
                      
                      label="Edit" type="button" icon="" variant=" px-8 py-4 text-white bg-black">Edit</Button>
                  </Link>
                </div> 
                
              </div>
            </div>
            
          </div>
          <div className="my-4"></div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
