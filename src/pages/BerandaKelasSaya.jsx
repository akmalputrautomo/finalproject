import React from "react";
import Navbar from "../assets/components/navbar";
import { FilterKelasBeranda } from "../assets/components/FilterKelasBeranda";
import { CourseKelasSaya } from "../assets/components/CourseKelasSaya";
import { SearchKelasSaya } from "../assets/components/SearchKelasSaya";

export const BerandaKelasSaya = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#CFE2E080] w-[100%] flex px-[7rem] py-[3rem]">
        <div className="w-[25%]">
          <span className="flex p-5 text-[1.8rem] font-bold text-[#000000]">
            Kelas Berjalan
          </span>
          <FilterKelasBeranda />
        </div>
        <div className="w-[75%]">
          <SearchKelasSaya />
          <CourseKelasSaya/>
        </div>
      </div>
    </div>
  );
};
