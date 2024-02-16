import React from 'react'
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { IoMdSend } from "react-icons/io";

function chatbot() {
    return (
        <>
            <Navbar/>
        <div className={'flex flex-col items-center mt-[-8%] min-h-screen'}>
            <div className={"mt-[20%]"}>
                <h1 className={'mx-auto text-amber-50 text-6xl'}>Ask ScamSensei Anything</h1>
            </div>

            <div className={'h-[5%] w-[50%] bg-white flex flex-row rounded-2xl justify-end mt-auto py-3'}>
                <div className={'pr-[40%]'}>
                    <p>Search here</p>
                </div>
                <button className={'pr-[3%]'}>
                    <IoMdSend />
                </button>
                
            </div>
        </div>
        </>
    )
}


export default chatbot