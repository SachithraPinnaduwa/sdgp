'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logos from "../../public/logos.png";
import UserIcon from "./UserIcon";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const auth = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);


  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
       
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    
  }, []);

  useEffect(() => {
    const handleDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleDropdown);

    return () => {
      document.removeEventListener('mousedown', handleDropdown);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);


  return (
     <nav
      className={`fixed top-0 text-sm left-0 w-full border-gray-200 bg-opacity-50 dark:bg-gray-900 z-30 ${
        visible ? '' : '-translate-y-full'
      } transition-transform duration-300`}
    >
      {/*"Mobile size menu goes here"*/}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logos} alt="logo" width={60} height={60} className="h-15" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ScamSensei</span>
        </a>

        <div className="items-center md:order-1 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          <div className="flex items-center"> 
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div className="md:hidden ">
              <UserIcon />
            </div>
          </div>
        <div
          ref={menuRef}
          className={`absolute top-full right-0 z-50 ${isMenuOpen ? 'block' : 'hidden'} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
          id="user-dropdown"
        >
          <ul className="flex py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page"
              
              >Home</a>
            </li>
            {auth.isLoggedIn ? (<li>
              <a href="/Chatbot" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page"
              
              >Chatbot</a>
            </li>) : (<></>)}
            <li>
              <a href="/Findscams" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                FindScams by Location</a>
            </li>
            <li>
              <a href="/PostList" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                FindScams by Upvotes</a>
            </li>
           
            <li>
              <a href="/PostList/new" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Submit Scam</a>
            </li>
          </ul>
        </div>
      </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
            </li>
           {auth.isLoggedIn ? ( <li>
              <a href="/Chatbot" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Chatbot</a>
            </li>) : (<></>)}
           
            <li>
           
            <div className="hidden md:block">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          id="dropdownNavbarLink"
          aria-expanded={isDropdownOpen ? 'true' : 'false'}
          className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-white dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
        >
          Find Scams <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
        </button>
        <div
          id="dropdownNavbar"
          ref={dropdownRef}
          className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${
            isDropdownOpen ? 'block' : 'hidden'
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdownNavbarLink"
          tabIndex="-1"
        >
          <a
            href="/Findscams"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            tabIndex="-1"
            id="navbar-menu-item-0"
          >
            by Location
          </a>
          <a
            href="/PostList"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            tabIndex="-1"
            id="navbar-menu-item-1"
          >
            by Upvotes
          </a>
         
        </div>
      </div>
    </div>
          
        </li>
            <li>
              <a href="/PostList/new" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Submit Scam</a>
            </li>
            <li>
              <UserIcon className=" block" />
            </li>      
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
