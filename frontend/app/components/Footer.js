import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div class="bg-footer purple py-4 text-gray-400 px-10">
      <div class="container px-4 mx-auto">
        <div class="-mx-4 flex flex-wrap justify-between">
          <div class="px-4 my-4 w-full xl:w-1/3">
            <a href="/" class="block w-56 mb-10">
            <Image src={"/logos.png"} alt="logo" width={50} height={50} /> <p className={'merinda-font text-4xl text-white flex items-center ml-4'}>ScamSensei</p>
            </a>
            <p class="text-justify">
            ScamSensei is a platform designed to help you navigate through common scams and share your experiences. Our goal is to create a 
            community where locals and foreigners can come together to learn and stay informed about various fraudulent activities.
             Join us in our mission to make our communities safer and more secure.
            </p>
          </div>

          <div class="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-violet-300 ">Company</h2>
            </div>
            <ul class="leading-8">
              <li><a href="/AboutUs" class="hover:text-violet-300">About Us</a></li>
              <li><a href="/Chatbot" class="hover:text-violet-300">ChatBot</a></li>
              <li><a href= '/Findscams' class="hover:text-violet-300">Find a Scam</a></li>
              <li><a href="#" class="hover:text-violet-300">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          
          <div class="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-violet-300 ">Connect With Us</h2>
            </div>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-5 hover:text-violet-300 hover:border-violet-300">
            <CiFacebook />
            </a>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-5 hover:text-violet-300 hover:border-violet-300">
            <BsInstagram />
            </a>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-5 hover:text-violet-300 hover:border-violet-300">
            <AiOutlineYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black py-4 text-gray-100">
      <div class="container mx-auto px-4">
        <div class="-mx-4 flex flex-wrap justify-between">
          <div class="px-4 w-full text-center sm:w-auto sm:text-left">
            Copyright ©  2024 ScamSensei.com. All rights reserved.
          </div>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer