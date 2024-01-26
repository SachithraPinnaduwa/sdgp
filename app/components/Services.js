import React from 'react';
import { motion } from 'framer-motion';
import { BsRobot } from 'react-icons/bs';
import { ImLocation } from "react-icons/im";
import { FaFaceLaughWink } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-8 text-white">What can you do with us </h1>
      <div className="flex flex-wrap justify-center gap-4">
        <motion.div
          className="flex-auto w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] p-4 border border-gray-300 rounded-lg relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-6 flex justify-between items-center text-white">
            <h2 className="text-2xl">Ask your Questions</h2>
            <div className="text-white text-4xl">
              <BsRobot />
            </div>
          </div>
          <p className="mb-4 text-white p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
        <motion.div
          className="flex-auto w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] p-4 border border-gray-300 rounded-lg relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-6 flex justify-between items-center text-white">
            <h2 className="text-2xl">Finding Scams</h2>
            <div className="text-white text-4xl">
              <ImLocation />
            </div>
          </div>
          <p className="mb-4 text-white p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
        <motion.div
          className="flex-auto w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] p-4 border border-gray-300 rounded-lg relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-6 flex justify-between items-center text-white">
            <h2 className="text-2xl">Share your Experiences.</h2>
            <div className="text-white text-4xl">
              <FaFaceLaughWink />
            </div>
          </div>
          <p className="mb-4 text-white p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
