import React from "react";
import SearchBar from "./SearchBar";
import FlagsCard from "./FlagsCard";




function Flags() {
  return (
    <>

      <div className="flagPage container-xxl  h-full text-[white]">
        <h1 className="text-3xl sm:text-5xl md:5xl  lg:text-6xl text-center pt-40  font-bold sm:p-50 ">
          {" "}
          Welcome to<span className=" world  text-[3rem] sm:text-[4rem] md:text-[7rem] lg:text-[8rem]">🌍</span>Flags Explore
        </h1>

        <FlagsCard />


      </div>
    </>
  );
}

export default Flags;
