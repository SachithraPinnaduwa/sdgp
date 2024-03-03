import React from "react";
import MyDropdown from "@/app/Findscams/MyDropdown";
import Navbar from "@/app/components/Navbar";
import MapButton from "./CurrentLocation";

function FindScams() {
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

        <div className="flex flex-wrap justify-center gap-4">
          <div className={"sm:mt-[10%] sm:pb-[20%] sm:w-auto button-container"}>
            <MyDropdown />
          </div>

          <div className={"sm:mt-[10%] sm:pb-[20%] sm:w-auto button-container"}>
            <MapButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default FindScams;
