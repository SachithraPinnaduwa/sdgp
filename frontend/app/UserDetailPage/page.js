import React from "react";
import Image from "next/image";
import Link from 'next/link';
import Button from "../components/Button";

function UserDetail() {
  return (
    <>
      
      <div
        className={"flex flex-col justify-center  mt-[-8%] mb-20 min-h-screen"}
      >
        <div className={"mt-[10%] text-center text-amber-50"}>
          <h1 className={"text-5xl mb-10"}>Your Details</h1>
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
          <div className={"mt-[-10%] ml-[7%] text-4xl mr-4"}>
            <h1 className={"text-4xl mr-4 mt-20 "}>Name of the User</h1>
            <div className={"flex mt-10 text-2xl"}>
              <div className={"mr-[10%]"}>
                <p >User name: </p>
                <p
                  className={"p-1 text-white "}> User name*****</p>
              </div>
              <div className={"mr-[10%]"}>
                <p> </p>
                
              </div>
            </div>
            <div className={"flex mt-10 text-2xl"}>
              <div className={"mr-[10%]"}>
                <p>First Name: </p>
                <p
                  className={"p-1 text-white"}
  
                >First Name *****</p>
              </div>
              <div className={"mr-[-10%]"}>
                <p>Last Name: </p>
                <p
                    className={"p-1 text-white"}
    
                  >Last Name *****</p>
            </div>
              
            </div>
            <div className={"flex mt-10 text-2xl"}>
            
            <div className={"mr-[10%]"}>
              <p >Email : </p>
              <p
                
                className={"p-1 text-white"}
                
              >******@***.***</p>
            </div>
            
            <div  className="block">
              <p className="w-full">&nbsp;	</p>
                          
              <Link href={'../UserDetailPageEdit'}>
                <Button label="Edit" type="button" icon="" variant=" px-8 py-4 text-white bg-black">Edit</Button>
              </Link>
              
            </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetail;
