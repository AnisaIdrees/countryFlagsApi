import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import FlagsCard from "./FlagsCard";

function Flags() {
  const [countries, setCountries] = useState([]);

  const fetchCountry = async () => {
    let res = await fetch("https://restcountries.com/v3.1/all");
    let data = await res.json();
    setCountries(data)
    console.log(data);
  };
  useEffect(() => {
    fetchCountry();
  }, [])


  return (
    <>
      <div className="container-xxl bg-[#060708] h-full text-[white]">
        <h1 className="text-3xl sm:text-5xl md:5xl  lg:text-6xl text-center pt-40  font-bold sm:p-50 ">
          {" "}
          Welcome to<span className=" world  text-[3rem] sm:text-[4rem] md:text-[7rem] lg:text-[8rem]">🌍</span>Flags Explore
        </h1>
        <SearchBar />

      <FlagsCard/>

      </div>
    </>
  );
}

export default Flags;
