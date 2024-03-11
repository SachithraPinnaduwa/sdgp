"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";



function UserDetail() {
const auth = useAuth();
  const [name, setname] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  const handleSubmit = async (e) => {

    
    e.preventDefault();
    if(password){
      if (!confirmPassword) {
        setError1("Enter confirm password");
        return;
      }  
    }
    setError1("") 
    
    if(password !== confirmPassword) {
      setError1("Passwords do not match");
      return;
    }
    setError1("")  
    
    if(email == auth.user.email) {
      if (!isValidEmail(email)) {
        setError2('Invalid email format'); 
        return;
      }else{
        try {

          auth.updateUserDetails(name,email,password,firstName,lastName)
          toast.success('User updated successfully')
        } catch (error) {
          toast.error('Unable to update user')
          console.log(error)
        }
      }
    }else{
      setError2("Enter current email to update details")
      return;
    }
    setError2("")  
    

  }

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <>
      <div
        className={"flex flex-col justify-center  mt-[-1%] mb-20 min-h-screen"}
      >
        
        <div className={" text-center text-amber-50 mt-[20%] md:mt-[0%]"}>
            <h1 className={"text-3xl ml-[3%] md:ml-[10%] mb-15 text-teal-400 font-semibold "}>Edit Your Details Here</h1>
        </div>
        
        <form
          className=" md:flex no-wrap md:-mx-auto p-8 rounded grid grid-cols-1 md:grid-cols-2 "
          onSubmit={handleSubmit}
        >

            <div className={"grid-cols-2 ml-[25%] mt-[2%] md:grid-cols-2 md:-ml-[0%] max-w-md "}>
              <Image
                className=" rounded-xl"
                src={"/UserDetails/anonymous_avatars_grey_circles.jpg"}
                alt={"search"}
                width={250}
                height={300}
              />
            </div>
            
            <div className={" grid-cols-2 text-3xl mt-[2%] mr-4 "}>
             
              <div className="w-full mx-5 h-64">
                <div className="p-3 shadow-sm rounded-sm bg-slate-100 pb-10 border dark:bg-gray-600 rounded-xl">
                  
                  <div className="text-gray-700 text-xl mt-[2%]">
                    <div className="grid lg:grid-cols-2 text-white">
                      <div className="grid grid-cols-2 m-5 ">
                        <p >User name : </p>
                        <input
                        
                          type="text"
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                          className={"border p-1 text-black rounded-lg"}
                          placeholder="User name"
                        />
                      </div>
                      <div className="grid grid-cols-2 m-5">
                        <p >Current Email : </p>
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={"border p-1 text-black rounded-lg"}
                          placeholder="Confirm Email"
                          
                        />
                                                
                      </div>
                      <div className="ml-[61%]" >            
                        {error1 && (
                          <div className='bg-red-500 text-white p-2 rounded-lg w-fit text-sm mt-2'>
                            {error1}
                            </div>
                        )}     
                      </div>
                      <div className="ml-[44%]">
                        {error2 && (
                            <div className='bg-red-500 text-white p-2 rounded-lg w-fit text-sm mt-2'>
                              {error2}
                              </div>
                          )}
                        </div>
                      <div className="grid grid-cols-2 m-5">
                        <p>Password : </p>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className={"border p-1 text-black rounded-lg"}
                          placeholder="Password"
                        />
                      </div>
                      <div className="grid grid-cols-2 m-5">
                        <p>Confirm Password : </p>
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className={"border p-1 text-black rounded-lg"}
                          placeholder="Password"
                        />
                        
                      </div>
                      <div className="grid grid-cols-2 m-5">
                        <p>First Name : </p>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setfirstName(e.target.value)}
                          className={"border p-1 text-black rounded-lg"}
                          placeholder="Enter first name"
                        />
                      </div>
                      <div className="grid grid-cols-2 m-5">
                        <p>Last Name : </p>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setlastName(e.target.value)}
                          className={"border p-1 text-black rounded-lg"}
                          placeholder="Enter last name"
                        />
                      </div>

                              
                    </div>
                    <div className="flex items-center font-semibold ml-[85%] mt-6 "> 
                        <button type="submit" className={"bg-blue-700 text-black p-2 rounded-md px-[15%]"}>
                          Save
                        </button>
                    </div> 
                  </div>
                  
                </div>                
              </div>

              
            </div>
          
        </form>
      </div>
    </>
  );
}

export default UserDetail;
