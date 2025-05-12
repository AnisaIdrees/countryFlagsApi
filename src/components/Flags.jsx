import React from "react";
import FlagsCard from "./FlagsCard";
import { useState, useEffect, CSSProperties } from "react";
import { PuffLoader } from "react-spinners";





function Flags() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])

  return (
    <>
      {
        loading ?
          <div className="w-full h-[100vh] bg-[black] flex justify-center items-center">
            <PuffLoader
              color={'blue'}
              loading={loading}
              className="flex"
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          :
          <div className="flagPage container-xxl  h-full text-[white]">
            <h1 className="text-3xl sm:text-5xl md:5xl  lg:text-6xl text-center pt-40  font-bold sm:p-50 ">
              {" "}
              Welcome to<span className=" world  text-[3rem] sm:text-[4rem] md:text-[7rem] lg:text-[8rem]">🌍</span>Flags Explore
            </h1>

            <FlagsCard />


          </div>
      }

    </>
  );
}

export default Flags;
