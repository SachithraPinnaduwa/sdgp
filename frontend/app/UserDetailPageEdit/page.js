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
        <form
          className="max-w-6xl mx-auto p-8 rounded shadow-md "
          onSubmit={handleSubmit}
        >
          <div className={"mt-[10%] text-center text-amber-50"}>
            <h1 className={"text-3xl ml-[30%] mb-15"}>Edit Your Details Here</h1>
          </div>
          <div className={"flex items-center mt-[5%] text-amber-50"}>
            <div className={"pr-[3%] ml-20"}>
              <Image
                src={"/UserDetails/anonymous_avatars_grey_circles.jpg"}
                alt={"search"}
                width={300}
                height={300}
              />
            </div>
            <div className={"mt-[-10%] ml-[7%] text-3xl mr-4"}>
             
              <div className={"flex mt-10 text-2xl mt-20"}>
                <div className={"mr-[10%]"}>
                  <p >User name: </p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    className={"border p-1 text-black "}
                    placeholder="User name"
                  />
                </div>
                <div className={"mr-[10%]"}>
                  <p>Password: </p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={"border p-1 text-black"}
                    placeholder="password"
                  />
                </div>
              </div>
              <div className={"flex mt-10 text-2xl"}>
                <div className={"mr-[10%]"}>
                  <p>First Name: </p>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    className={"border p-1 text-black"}
                    placeholder="Enter first name"
                  />
                </div>
                <div className={"mr-[10%]"}>
                  <p>Confirm Password: </p>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={"border p-1 text-black"}
                    placeholder="password"
                  />
                  {error1 && (
                    <div className='bg-red-500 text-white p-2 rounded w-fit text-sm'>
                      {error1}
                      </div>
                  )}
                </div>
                
              </div>
              <div className={"flex mt-10 text-2xl"}>
              <div className={"mr-[10%]"}>
                <p>Last Name: </p>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  className={"border p-1 text-black "}
                  placeholder="Enter last name"
                />
              </div>
              <div className={"mr-[10%]"}>
                <p >Email : </p>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={"border p-1 text-black"}
                  placeholder="Enter Email To Confirm"
                  
                />
                {error2 && (
                    <div className='bg-red-500 text-white p-2 rounded w-fit text-sm'>
                      {error2}
                      </div>
                  )}
              </div>

            
              </div>
              <div  className="block">
                  <p className="w-full">&nbsp;	</p>
                <button type="submit" className={"bg-blue-500 text-black p-2 rounded-md"}>
                  Submit
                </button>
                
              </div>

              
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserDetail;
