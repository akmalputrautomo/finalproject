import React from "react";
import logo from "../img/HeroImg.png";

const Hero = () => {
  return (
    <div className="w-full h-full">
      <div className=" flex">
        {/* section kiri */}
        <div className="w-1/2 flex flex-col px-[9rem] mt-10 ">
          <h1 className="text-[#116E63] text-[2.5rem] font-bold font-2xl">Learning </h1>
          <h1 className="text-[#116E63] text-[2.5rem] font-bold ">Everywhere & Everytime</h1>
          <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-[#F2A227] text-[1.5rem] font-bold">Belajar dari Praktisi Terbaik</h2>
            <button className="bg-[#116E63] text-white w-[14rem] h-[2rem] rounded-xl">ikuti kelas</button>
          </div>
        </div>

        {/* section kanan */}
        <img src={logo}></img>
      </div>
    </div>
  );
};
export default Hero;
