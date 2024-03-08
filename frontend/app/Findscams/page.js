"use client";
import React, { use } from "react";
import Feed from "../PostList/Feed";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import LocationComponent from "./location";

function FindScams() {
  const auth = useAuth();
  const [myPosts, setMyPosts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await auth.getScamPosts();
      setMyPosts(data);
    };

    fetchData();
  }, []);
  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };
  useEffect(() => {
    setSelectedDistrict(auth.district);
  }, [auth.district]);
  const locations = [
    "Colombo",
    "Gampaha",
    "Kalutara",
    "Kandy",
    "Matale",
    "Nuwara Eliya",
    "Galle",
    "Matara",
    "Jaffna",
    "Kilinochchi",
    "Mannar",
    "Mullaitivu",
    "Vavuniya",
    "Batticaloa",
    "Ampara",
    "Trincomalee",
    "Kurunegala",
    "Puttalam",
    "Anuradhapura",
    "Polonnaruwa",
    "Badulla",
    "Monaragala",
    "Ratnapura",
    "Kegalle",
  ];
  return (
    <>
      <div
        className={
          "flex flex-col justify-center items-center mt-[1%] min-h-screen"
        }
      >
        <div className={"mt-[10%] text-center text-amber-50"}>
          <h1 className={"text-6xl mb-10  animate-fade-in"}>
            Community Stories
          </h1>
          <p className={"text-3xl"}>Scams That the Community Faced</p>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className={" sm:w-auto button-container flex md:flex-row md:gap-40 py-6 flex-col gap-5"}>
            <div className=" mx-auto ">
              <select
                name="dropdown"
                id="dropdown"
                className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleDistrictChange}
              >
                <option value="">Select Location</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div
              className={
                "sm:w-auto button-container"
              }
            >
              {/* <MapButton /> */}
              <LocationComponent />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Feed
            posts={myPosts.filter((post) =>
              post.district
                .toLowerCase()
                .includes(selectedDistrict.toLowerCase())
            )}
          />
        </div>
      </div>
    </>
  );
}

export default FindScams;
