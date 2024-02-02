import Image from 'next/image';
import React from 'react';
import { BsRobot } from 'react-icons/bs';
import { ImLocation } from "react-icons/im";
import { FaFaceLaughWink } from "react-icons/fa6";

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat  px-24 py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:h-[450px] lg:w-[650px] lg:pr-10 lg:pt-20  ">
          <Image
            src="/main/map.jpg"
            alt="phone"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            <h2 className="text-5xl bold-40 lg:bold-64 text-white">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-10">
            {FEATURES.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const FEATURES = [
  {title: 'Ask your Questions', icon:  <BsRobot />, description: 'Have a question about scams? Our chatbot is here to help! Whether you are curious about recent scams in your area or want to know the most reported scam topic in Sri Lanka, simply ask away. Our chatbot is designed to provide answers to your inquiries. From location-based scams to general scam trends, our chatbot is your go-to resource for information. Start a conversation today and empower yourself against scams!'},
  {title: 'Finding Scams', icon: <ImLocation />, description: ' Discover a wealth of user-contributed experiences from across Sri Lanka. Tailor your search by selecting specific location or explore all posts for a comprehensive overview. Each post offers valuable insights into reported scams, allowing users to contribute and engage with the community. Your participation through voting helps prioritize posts, ensuring the most relevant information receives attention. Join us in building a knowledgeable and vigilant community against scams!'},
  {title: 'Share your Experiences.', icon:   <FaFaceLaughWink />, description: ' Discover a wealth of user-contributed experiences from across Sri Lanka. Tailor your search by selecting specific regions or  explore all posts for a comprehensive overview. Each post offers valuable insights into reported scams, allowing users to contribute and engage with the community. Your participation through voting helps prioritize posts, ensuring the most relevant information receives attention. Join with us in building a knowledgeable and vigilant community against scams!'},
]

const FeatureItem = ({ title, icon, description }) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        {icon}
      </div>
      <h2 className="text-2xl bold-20 lg:bold-32 mt-5 capitalize text-white">
        {title}
      </h2>
      <p className="text-sm regular-16 mt-5 text-white lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features;
