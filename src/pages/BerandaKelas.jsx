import React from "react";
import { FilterKelasBeranda } from "../assets/components/FilterKelasBeranda";
import { SearchKelasBeranda } from "../assets/components/SearchKelasBeranda";
import { CourseKelasPrem } from "../assets/components/CourseKelasPrem";
import NavbarAfterLogin from "../assets/components/NavbarAfterLogin";
import { CourseKelasFree } from "../assets/components/CourseKelasFree";

export const BerandaKelas = () => {
  return (
    <div>
      <NavbarAfterLogin />
      <div className="bg-[#CFE2E080] w-[100%] flex px-[7rem] py-[3rem]">
        <div className="w-[25%]">
          <span className="flex p-5 text-[1.8rem] font-bold text-[#000000]">
            Topik Kelas
          </span>
          <FilterKelasBeranda />
        </div>
        <div className="w-[75%]">
          <SearchKelasBeranda/>
          <div className="space-y-8">
            <CourseKelasPrem/>
            <CourseKelasFree/>
          </div>
        </div>
      </div>
    </div>
  );
};
