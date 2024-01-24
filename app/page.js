import Image from "next/image";
import {bgBlue} from "next/dist/lib/picocolors";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <>
        <Navbar/>
       <div className={'flex flex-col mt-[-8%] min-h-screen'}>

           <div className={'flex flex-row  my-auto justify-center gap-20 '}>
               <div className={'my-auto'}>
                   <h1 className={'text-6xl text-amber-50'}>Don&apos;t Get Your Vacation Ruined
                       <br/>With Scams.<br/> We&apos;re Here to Help,<br/>this is a sample part</h1>
               </div>
               <div className={'grid grid-cols-2 grid-rows-2 gap-4 my-auto'}>
                   <div className={'item flex justify-center items-center'}>

                       <Image src={'/main/stock1.png'} alt={'stock1'} width={100} height={100} className={'rounded-[50%] object-right '}/>
                   </div>
                   <div className={'item flex justify-center items-center'}>
                   <Image src={'/main/stock2.png'} alt={'stock2'} width={200} height={200} className={'rounded-[50%]'}/>
                   </div>
                       <div className={'item flex justify-center items-center'}>
                   <Image src={'/main/stock3.png'} alt={'stock3'} width={200} height={200} className={'rounded-[50%]'}/>
                       </div>
                           <div className={'item flex justify-center items-center'}>
                   <Image src={'/main/stock4.png'} alt={'stock4'} width={100} height={100} className={'rounded-[50%] object-center'}/>
                           </div>

               </div>
           </div>
       </div>
    </>
  );
}
