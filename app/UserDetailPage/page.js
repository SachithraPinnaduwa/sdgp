import React from "react";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

function UserDetail() {
    return (
        <>
            <Navbar/>
            <div className={'flex flex-col justify-center  mt-[-8%] mb-20 min-h-screen'}>
                <div className={'mt-[10%] text-center text-amber-50'}>
                    <h1 className={'text-5xl mb-10'}>Your Details</h1>
                    
                </div>
                <div className={'flex items-center mt-[5%] text-amber-50'}>
                    <div className={'pr-[3%] ml-20'}>
                        <Image src={'/UserDetails/anonymous_avatars_grey_circles.jpg'} alt={"search"} width={300} height={300} />
                    </div>
                    <div className={'mt-[-10%] ml-[7%] text-4xl mr-4'} >
                        <h1 className={'text-4xl mr-4 mt-20 '}>Name of the User</h1>
                        <p className={'mt-10 text-2xl mr-4 '}>User name: </p>
                        <input type="text" className={'border p-1 text-black text-2xl'} placeholder="User name"  />

                        <div className={'flex mt-10 text-2xl'}>
                            <div className={'mr-[10%]'}>
                                <p>First Name: </p>
                                <input type="text" className={'border p-1 text-black'} placeholder="Enter first name" />
                            </div>
                            <div className={'mr-[10%]'}>
                                <p>Last Name: </p>
                                <input type="text" className={'border p-1 text-black'} placeholder="Enter last name" />
                            </div> 
                        </div>
                    
                        <p className={'mt-10 text-2xl mr-4'}>Email : </p>
                        <input type="email" className={'border p-1 text-black text-2xl'} placeholder="Email"  />

                        <div className={'flex mt-10 text-2xl'}>
                            <div className={'mr-[10%]'}>
                                <p>Password: </p>
                                <input type="password" className={'border p-1 text-black'} placeholder="password" />
                            </div>
                            <div className={'mr-[10%]'}>
                                <p>Confirm Password: </p>
                                <input type="password" className={'border p-1 text-black'} placeholder="password" />
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default UserDetail;