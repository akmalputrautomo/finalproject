import React from "react";
import search from "../img/search.png";
import { Button } from "@nextui-org/button";

export const SearchKelasBeranda = () => {
  return (
    <div className="py-5 px-[1rem] desktop:px-16">
        {/* search */}
      <div className="flex justify-end relative w-[100%]">
        <div className="flex items-center w-full desktop:w-[30%]">
          <input className="flex border border-2 border-[#116E63] rounded-full px-4 h-11 focus:outline-none w-full" placeholder="Cari Kelas..."/>
          <img src={search} className="flex right-3 w-7 h-7 absolute cursor-pointer" alt="Search Icon"/>
        </div>
      </div>

      {/* button filter */}
      <div className="flex justify-between py-6 gap-3 desktop:gap-6">
        <Button className="bg-white w-[25%] focus:bg-[#116E63] focus:text-white">All</Button>
        <Button className="bg-white w-[40%] focus:bg-[#116E63] focus:text-white">Kelas Premium</Button>
        <Button className="bg-white w-[35%] focus:bg-[#116E63] focus:text-white">Kelas Gratis</Button>
      </div>

    </div>
  );
};
