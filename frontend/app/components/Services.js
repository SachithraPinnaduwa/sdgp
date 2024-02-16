import React from 'react';
import { motion } from 'framer-motion';
import { BsRobot } from 'react-icons/bs';
import { ImLocation } from "react-icons/im";
import { FaFaceLaughWink } from "react-icons/fa6";

export default function Services() {
  return (
    <div className="p-8">
      <div className="flex flex-wrap justify-center gap-4">
        <motion.div
          className="flex-auto w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] p-4  rounded-lg relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="custom-h1 ">What can you do with us </h1>
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <motion.div
          className="flex-auto w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] p-4 border border-zinc-600 rounded-lg relative hover:bg-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-6 flex justify-between items-center text-white">
            <h2 className="text-2xl">Ask your Questions</h2>
            <div className="text-white text-4xl border border-zinc-600  p-2 rounded-full ">
              <BsRobot className=" text-rose-500" />
            </div>
          </div>
          <p className="mb-4 text-gray-400 p-3 text-sm text-justify ">
          Have a question about scams? Our chatbot is here to help! Whether you're curious about recent scams in your 
          area or want to know the most reported scam topic in Sri Lanka, simply ask away. Our chatbot is 
          designed to provide answers to your inquiries. From location-based scams to general scam trends, our chatbot is 
          your go-to resource for information. Start a conversation today and empower yourself against scams!
          </p>
        </motion.div>
        <motion.div
          className="flex-auto w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] p-4 border border-zinc-600 rounded-lg relative hover:bg-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-6 flex justify-between items-center text-white">
            <h2 className="text-2xl">Finding Scams</h2>
            <div className="text-white text-4xl  border border-zinc-600  p-2 rounded-full">
              <ImLocation  className='text-rose-500'/>
            </div>
          </div>
          <p className="mb-4 text-gray-400 p-3 text-sm">
          Discover a wealth of user-contributed experiences from across Sri Lanka. Tailor your search by selecting specific
           location or explore all posts for a comprehensive overview. Each post offers valuable insights into reported scams, 
           allowing users to contribute and engage with the community. Your participation through voting helps prioritize posts,
            ensuring the most relevant information receives attention. Join us in building a knowledgeable and vigilant community against scams!
          </p>
        </motion.div>
        <motion.div
          className="flex-auto w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] p-4 border border-zinc-600 rounded-lg relative hover:bg-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-6 flex justify-between items-center text-white">
            <h2 className="text-2xl">Share your Experiences.</h2>
            <div className="text-white text-4xl border border-zinc-600   p-2 rounded-full">
              <FaFaceLaughWink className='text-rose-500' />
            </div>
          </div>
          <p className="mb-4 text-gray-400 p-3 text-sm">
          Discover a wealth of user-contributed experiences from across Sri Lanka. Tailor your search by selecting specific regions or 
          explore all posts for a comprehensive overview. Each post offers valuable insights into reported scams, allowing users to contribute
           and engage with the community. Your participation through voting helps prioritize posts, ensuring the most relevant information 
           receives attention. Join with us in building a knowledgeable and vigilant community against scams!
          </p>
        </motion.div>
      </div>
    </div>
  );
};