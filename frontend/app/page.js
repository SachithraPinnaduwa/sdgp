'use client'
import Image from "next/image";
import {bgBlue} from "next/dist/lib/picocolors";
import Navbar from "@/app/components/Navbar";
import { TypeAnimation } from 'react-type-animation';
import Services from "./components/Services";
import VideoPlayer from "./components/VideoPlayer";
import Quotes from "./components/Quotes";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";


   

export default function Home() {
  return (
    <>
        <Navbar/>
       <div className={'flex flex-col sm:p-20 p-5  mt-[-5%] min-h-screen container  mx-auto'}>

           <div className={'grid grid-cols-1 lg:grid-cols-12 my-auto justify-center gap-10  pb-10'}>
               <div className={' col-span-7 place-self-center  text-center sm:text-left'}>
                   <h1 className={'text-5xl text-amber-50 pl-5'}>Don&apos;t Get Your <br/>Vacation Ruined
                       With <br/>Scams.<br/>
                    </h1><b>
                    <TypeAnimation 
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                             ' Join Scamsensei Today.',
                            3000,
                            ' We are Here to Help.',
                            3000,
                            // wait 1s before replacing "Mice" with "Hamsters"
                           
                        ]}
                        wrapper="span"
                        speed={5}
                        repeat={Infinity}
                        style={{ fontSize: '2em',  color: 'white' }}
                        
                        />
                        
                        </b>
               </div>
               <div className={'col-span-5 grid grid-cols-2 grid-rows-2  my-auto w-fit sm:w-full'}>
                   <div className={'item flex justify-center items-center'}>

                       <Image src={'/main/foods.jpg'} alt={'stock1'} width={100} height={100} className={'rounded-[50%] object-right border-5 border-pink'}/>
                   </div>
                   <div className={'item flex justify-center items-center'}>
                   <Image src={'/main/taxi2.jpg'} alt={'stock2'} width={200} height={200} className={'rounded-[50%]'}/>
                   </div>
                       <div className={'item flex justify-center items-center'}>
                   <Image src={'/main/taxi3.jpg'} alt={'stock3'} width={200} height={200} className={'rounded-[50%]'}/>
                       </div>
                           <div className={'item flex justify-center items-center'}>
                   <Image src={'/main/taxi.jpg'} alt={'stock4'} width={100} height={100} className={'rounded-[50%] object-center'}/>
                           </div>

               </div>
           </div><br/><hr/>
          <Services/>
          <VideoPlayer/>
          <hr/>
          <Quotes/><br/>
          <h1 className="text-2xl sm:text-4xl text-white text-center">Articles that you wants to read before come to Sri lanka</h1>
          <Articles/>
          <h1 className="text-2xl sm:text-4xl text-white text-center">About Us</h1>
          <AboutUs/>
       </div>
       <Footer/>
       
    </>
  );
}
