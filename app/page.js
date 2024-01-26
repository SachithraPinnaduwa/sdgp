'use client'
import Image from "next/image";
import {bgBlue} from "next/dist/lib/picocolors";
import Navbar from "@/app/components/Navbar";
import { TypeAnimation } from 'react-type-animation';
import Services from "./components/Services";



   

export default function Home() {
  return (
    <>
        <Navbar/>
       <div className={'flex flex-col p-20  mt-[-5%] min-h-screen container  mx-auto'}>

           <div className={'grid grid-cols-1 lg:grid-cols-12 my-auto justify-center gap-10  pb-10'}>
               <div className={' col-span-7 place-self-center'}>
                   <h1 className={'text-6xl text-center sm:text-left text-amber-50 pl-5'}>Don&apos;t Get Your <br/>Vacation Ruined
                       With <br/>Scams.<br/><b>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            ' We are Here to Help.',
                            10, // wait 1s before replacing "Mice" with "Hamsters"
                           
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        /></b></h1>
               </div>
               <div className={'col-span-5 grid grid-cols-2 grid-rows-2  my-auto w-fit sm:w-full'}>
                   <div className={'item flex justify-center items-center'}>

                       <Image src={'/main/stock1.png'} alt={'stock1'} width={150} height={150} className={'rounded-[50%] object-right border-5 border-pink'}/>
                   </div>
                   <div className={'item flex justify-center items-center'}>
                   <Image src={'/main/stock2.png'} alt={'stock2'} width={250} height={250} className={'rounded-[50%]'}/>
                   </div>
                       <div className={'item flex justify-center items-center'}>
                   <Image src={'/main/stock3.png'} alt={'stock3'} width={250} height={250} className={'rounded-[50%]'}/>
                       </div>
                           <div className={'item flex justify-center items-center'}>
                   <Image src={'/main/stock4.png'} alt={'stock4'} width={150} height={150} className={'rounded-[50%] object-center'}/>
                           </div>

               </div>
           </div><br/><hr/>
          <Services/>
       </div>
       
    </>
  );
}
