import React from "react";
import Image from "next/image";

const AboutUs = () => {


  return (
    <div className={''}>
        <h1 className='text-center text-white text-4xl '>Who We Are</h1>
        <p className=' text-center text-white leading-7 pb-5'>Welcome to ScamSensei! We're a team of computer science students from IIT Sri Lanka 
        dedicated to providing a platform for people to share their experiences with scams. Whether you're a local or a visitor, our 
        website is designed to help you navigate through common fraudulent activities.<br/>
        At ScamSensei, we believe in the power of community to combat scams. Our platform encourages users to share stories and 
        ask questions, creating a supportive environment where everyone can learn and stay informed. Join us as we work together to make 
        our communities safer and more secure.<br/><span className='text-2xl font-bold'>Thank you for being part of the ScamSensei community!</span>
        </p>
        <h2 className='text-white text-3xl font-bold pl-10'>Our Team</h2>
        <ul className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-2 pt-10 justify-center text-white">
        <li className="item flex flex-col items-center">
          <Image
            src="/main/stock1.png"
            alt="stock1"
            width={250}
            height={250}
            className="rounded-[10%] lg:w-150 lg:h-150 sm:w-100 sm:h-100"
          />
          <h3 className="mt-2">Isuru</h3>
        </li>
        <li className="item flex flex-col items-center">
          <Image
            src="/main/stock1.png"
            alt="stock1"
            width={250}
            height={250}
            className="rounded-[10%] lg:w-150 lg:h-150 sm:w-100 sm:h-100"
          />
          <h3 className="mt-2">Isuru</h3>
        </li>
        <li className="item flex flex-col items-center">
          <Image
            src="/main/stock1.png"
            alt="stock1"
            width={250}
            height={250}
            className="rounded-[10%] lg:w-150 lg:h-150 sm:w-100 sm:h-100"
          />
          <h3 className="mt-2">Isuru</h3>
        </li>
        <li className="item flex flex-col items-center">
          <Image
            src="/main/stock1.png"
            alt="stock1"
            width={250}
            height={250}
            className="rounded-[10%] lg:w-150 lg:h-150 sm:w-100 sm:h-100"
          />
          <h3 className="mt-2">Isuru</h3>
        </li>
        <li className="item flex flex-col items-center">
          <Image
            src="/main/stock1.png"
            alt="stock1"
            width={250}
            height={250}
            className="rounded-[10%] lg:w-150 lg:h-150 sm:w-100 sm:h-100"
          />
          <h3 className="mt-2">Isuru</h3>
        </li>

        </ul>
        </div>
        
   
  );
};

export default AboutUs;
