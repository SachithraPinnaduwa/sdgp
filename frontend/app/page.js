'use client'
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { TypeAnimation } from 'react-type-animation';
import Services from "./components/Services";
import VideoPlayer from "./components/VideoPlayer";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";


   

export default function Home() {
  return (
    <>
        <Navbar/>
        <div className="relative">
        <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <video className="w-full h-full object-cover video-bg" autoPlay muted loop>
          <source src="/main/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        <br/><br/><br/><br/><br/>
        
       <div className={'flex flex-col sm:p-20 p-5 pt-8 mt-[-5%] min-h-screen container  mx-auto'}>

           <div className={'grid grid-cols-1 lg:grid-cols-12 my-auto justify-center gap-10  pb-10'}>
               <div className={' col-span-7 place-self-center  text-center sm:text-left'}>
                   <h1 className={'text-5xl text-white font-black pl-5'}>Don&apos;t Get Your <br/>Vacation Ruined
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
                        className=" text-rose-500 font-mono text-2xl pl-5"
                       
                        
                        />
                        
                        </b>
               </div>
               <div className={'col-span-5 grid grid-cols-2 grid-rows-2  my-auto w-fit sm:w-full'}>
                   <div className={'item flex justify-center items-center'}>

                       <Image src={'/main/foods.jpg'} alt={'stock1'} width={100} height={100} className={'rounded-[50%]  object-right  border-2 border-white'}/>
                   </div>
                   <div className={'item flex justify-center items-center'}>
                   <Image src={'/main/taxi2.jpg'} alt={'stock2'} width={200} height={200} className={'rounded-[50%]  border-2 border-white'}/>
                   </div>
                       <div className={'item flex justify-center items-center'}>
                   <Image src={'/main/taxi3.jpg'} alt={'stock3'} width={200} height={200} className={'rounded-[50%]  border-2 border-white'}/>
                       </div>
                           <div className={'item flex justify-center items-center'}>
                   <Image src={'/main/taxi.jpg'} alt={'stock4'} width={100} height={100} className={'rounded-[50%] object-center  border-2 border-white'}/>
                           </div>

               </div>
           </div><br/><hr/>
          <Services/>
          <br/>
          <br/><br/><br/>
          <VideoPlayer/>
          <AboutUs/>
          <ContactUs/>
       </div>  </div>
       <Footer/>
       
    </>
  );
}
