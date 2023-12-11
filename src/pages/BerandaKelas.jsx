import React, { useState } from "react";
import { FilterKelasBeranda } from "../assets/components/FilterKelasBeranda";
import { SearchKelasBeranda } from "../assets/components/SearchKelasBeranda";
import { CourseKelasPrem } from "../assets/components/CourseKelasPrem";
import NavbarAfterLogin from "../assets/components/NavbarAfterLogin";
import { CourseKelasFree } from "../assets/components/CourseKelasFree";
import {Button, useDisclosure} from "@nextui-org/react";
import { ModalFilterBeranda } from "../assets/components/popUp/ModalFilterBeranda";

export const BerandaKelas = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("outside");

  return (
    <div>
      <NavbarAfterLogin />
      <div className="bg-[#CFE2E080] h-full w-[100%] flex flex-col desktop:flex-row px-1 desktop:px-[7rem] py-[1rem] desktop:py-[3rem]">
        <div className="flex-col w-[100%] desktop:w-[25%]">
          <div className="w-full flex desktop:flex-col justify-between items-center">
            <span className="flex p-5 text-2xl font-bold text-[#000000]">
              Topik Kelas
            </span>
            <Button onPress={onOpen} variant="light" className="desktop:hidden text-[1.2rem] text-[#116E63] font-bold px-2">Filter</Button>
          </div>
          <div className="hidden desktop:block"><FilterKelasBeranda /></div>
          <ModalFilterBeranda isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior}/>
        </div>
        <div className="w-[100%] desktop:w-[75%]">
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
