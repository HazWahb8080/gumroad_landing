import React from "react";
import { hero_link } from "../utils/Image_Links";
import { brush_link } from "./../utils/Image_Links";

function Hero() {
  return (
    <div className="items-center justify-between w-full  border-b-2 border-black -mt-2 2xl:flex flex-col-1">
      {/* left part */}
      <div className="bg-[#FF90E8] 2xl:h-[888px] xl:px-36 px-12 w-full items-start justify-start flex flex-col 2xl:border-r-2 border-black">
        <div className=" w-full items-start py-24 justify-start flex flex-col ">
          <h1 className="2xl:text-9xl lg:text-7xl text-6xl font-medium py-12">
            Go from <br /> zero to $1
          </h1>
          <h1 className="2xl:text-4xl text-3xl pb-12">
            With Gumroad, anyone can earn their first dollar online. Just start
            with what you know, see what sticks, and get paid.
            <br /> It’s that easy.
          </h1>
          <button className="selling-btn"> Start Selling </button>
        </div>
      </div>
      {/* right part */}
      <div className="bg-[#FFC900] py-36 px-24 w-full items-start justify-start hidden 2xl:flex flex-col  ">
        <div className="items-start justify-center flex w-full">
          <img
            src={hero_link}
            alt="heroimage"
            className="w-[600px] h-[600px] object-fit object-center "
          />
          <img src={brush_link} className="-ml-24" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
