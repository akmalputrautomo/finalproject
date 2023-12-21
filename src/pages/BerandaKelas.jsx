import React, { useEffect, useState } from "react";
import { FilterKelasBeranda } from "../assets/components/FilterKelasBeranda";
import { SearchKelasBeranda } from "../assets/components/SearchKelasBeranda";
import NavbarAfterLogin from "../assets/components/NavbarAfterLogin";
import { Button, useDisclosure } from "@nextui-org/react";
import ModalFilterBeranda from "../assets/components/ModalFilterBeranda";
import { NavbarResponsive } from "../assets/components/elements/NavbarResponsive";
import { CourseKelasAll } from "../assets/components/CourseKelasAll";
import { useDispatch, useSelector } from "react-redux";
import getDataAll from "../redux/action/getAll";
import Navbarr from "../assets/components/navbar";

export const BerandaKelas = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("outside");
  // const { namesearch } = useParams();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   search(namesearch);
  // }, [namesearch]);

  // const search = () => {
  //   dispatch(getDataSearchCourse(namesearch));
  // };

  const dispatch = useDispatch();

  const dataAll = useSelector((state) => state.courseAll.coursesAll);
  console.log(dataAll, "All");

  useEffect(() => {
    dispatch(getDataAll());
  }, [dispatch]);

  const [filterData, setFilterData] = useState(dataAll);
  console.log(filterData, "filterrrrrrr");

  return (
    <div>
      <div className="hidden desktop:block">
        <Navbarr />
      </div>
      <div className="block desktop:hidden">
        <NavbarResponsive />
      </div>
      <div className="bg-[#CFE2E080] h-full w-[100%] flex flex-col desktop:flex-row px-1 desktop:px-[7rem] py-[1rem] desktop:py-[3rem]">
        <div className="flex-col w-[100%] desktop:w-[25%]">
          <div className="w-full flex desktop:flex-col justify-between items-center">
            <span className="flex p-5 text-2xl font-bold text-[#000000]">Topik Kelas</span>
            <Button onPress={onOpen} variant="light" className="desktop:hidden text-[1.2rem] text-[#116E63] font-bold px-2">
              Filter
            </Button>
          </div>
          <div className="hidden desktop:block">
            <FilterKelasBeranda />
          </div>
          <ModalFilterBeranda isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior} />
        </div>
        <div className="w-[100%] desktop:w-[75%]">
          <SearchKelasBeranda setFilterData={setFilterData} dataAll={dataAll} />
          <div className="space-y-8">
            <CourseKelasAll filterData={filterData} />
          </div>
        </div>
      </div>
    </div>
  );
};
