"use client";
import React, { useState, useEffect } from "react";
import Feed from "./Feed";
import CreatePost from "./CreatePost";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import { CiSearch } from "react-icons/ci";
import PaginationButtons from "../components/PaginationButtons";
import Footer from "../components/Footer";
import Loading from "../components/Loading"; 

const style = {
  main: "mx-auto flex w-full max-w-7xl space-x-6 py-5 px-6",
  content: "w-full space-y-4 lg:w-full mx-auto mt-[10vh] justify-center items-center flex flex-col min-h-screen",
  searchInput:
    "w-full block  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500",
};

const PostList = () => {
  const auth = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add a loading state

  useEffect(() => {
   
    const fetchData = async () => {
      setIsLoading(true);
      // Set loading to true before fetching data
      const data = await auth.pagination(auth.page, auth.limit);
      auth.setUserData(data.posts);
      setIsLoading(false); // Set loading to false after fetching data
    };
    fetchData();
  }, [auth.page, auth.limit]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <main className={style.main}>
        <div className={"flex flex-col mt-20 justify-center items-center "}>
          <br />
        </div>

        <div className={style.content}>
          <div className="sm:w-1/3 w-3/4">
            <form className="max-w-md mx-auto">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <CiSearch className="font text-slate-50 text-2xl" />
                </div>
                <input type="search" value={searchQuery}
                  onChange={handleSearch} id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
              </div>
            </form>
          </div>
          <div className="mt-4">
            <CreatePost />

            {isLoading ? ( // Check if loading is true
              <Loading /> // Display the Loading component
            ) : (
              <Feed posts={auth.userData.filter(post => post.scam.toLowerCase().includes(searchQuery.toLowerCase()))} />
            )}
          </div>
        </div>
      </main>
      <div className="flex justify-center m-4">
        <PaginationButtons />
      </div>
      <Footer />
    </div>
  );
};

export default PostList;
