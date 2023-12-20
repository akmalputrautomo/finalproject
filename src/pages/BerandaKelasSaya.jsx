import React, { useEffect, useState } from "react";
import { FilterKelasBeranda } from "../assets/components/FilterKelasBeranda";
import { CourseKelasSaya } from "../assets/components/CourseKelasSaya";
import { SearchKelasSaya } from "../assets/components/SearchKelasSaya";
import NavbarAfterLogin from "../assets/components/NavbarAfterLogin";
import { Button, CheckboxGroup, useDisclosure } from "@nextui-org/react";
import ModalFilterBeranda from "../assets/components/ModalFilterBeranda";
import { NavbarResponsive } from "../assets/components/elements/NavbarResponsive";
import { Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import getDatafree from "../redux/action/getfreekelas";
import level from "../assets/img/level.png";
import modul from "../assets/img/modul.png";
import time from "../assets/img/time.png";
import progress from "../assets/img/progress.png";

export const BerandaKelasSaya = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("outside");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.Free.kelasfree.data);
  console.log(data, "data filter");

  useEffect(() => {
    dispatch(getDatafree());
  }, []);

  return (
    <div>
      <div className="hidden desktop:block">
        <NavbarAfterLogin />
      </div>
      <div className="block desktop:hidden">
        <NavbarResponsive />
      </div>
      <div className="bg-[#CFE2E080] h-full w-[100%] flex flex-col desktop:flex-row px-1 desktop:px-[7rem] py-[1rem] desktop:py-[3rem]">
        <div className="flex-col w-[100%] desktop:w-[25%]">
          <div className="w-full flex desktop:flex-col justify-between items-center">
            <span className="flex p-5 text-2xl font-bold text-[#000000]">Kelas Berjalan</span>
            <Button onPress={onOpen} variant="light" className="desktop:hidden text-[1.2rem] text-[#116E63] font-bold px-2">
              Filter
            </Button>
          </div>
          <div className="hidden desktop:block">
            {/* <FilterKelasBeranda /> */}
            <div>
              <div className="px-5 space-y-5">
                <div className="rounded-lg bg-white px-0 desktop:p-5 space-y-4">
                  <div>
                    <span className="text-lg font-bold text-black hidden desktop:block">Filter</span>
                    <div className="pl-1 py-2 space-y-2 text-xs">
                      <CheckboxGroup>
                        <Checkbox value="baru">
                          <span className="text-sm">Paling Baru</span>
                        </Checkbox>
                        <Checkbox value="populer">
                          <span className="text-sm">Paling Populer</span>
                        </Checkbox>
                        <Checkbox value="promo">
                          <span className="text-sm">Promo</span>
                        </Checkbox>
                      </CheckboxGroup>
                    </div>
                  </div>

                  <div>
                    <span className="text-lg font-bold text-black">Kategori</span>
                    <div className="pl-1 py-2 space-y-2">
                      <CheckboxGroup>
                        <Checkbox value="ui/ux">
                          <span className="text-sm">UI/UX Design</span>
                        </Checkbox>
                        <Checkbox value="wWeb Development">
                          <span className="text-sm">Web Development</span>
                        </Checkbox>
                        <Checkbox value="Android Development">
                          <span className="text-sm">Android Development</span>
                        </Checkbox>
                        <Checkbox value="Data Science">
                          <span className="text-sm">Data Science</span>
                        </Checkbox>
                        <Checkbox value="Business Intelligence">
                          <span className="text-sm">Business Intelligence</span>
                        </Checkbox>
                      </CheckboxGroup>
                    </div>
                  </div>

                  <div>
                    <span className="text-lg font-bold text-black">Level Kesulitan</span>
                    <div className="pl-1 py-2 space-y-2">
                      <CheckboxGroup>
                        <Checkbox value="ui/ux">
                          <span className="text-sm">Semua Level</span>
                        </Checkbox>
                        <Checkbox value="web">
                          <span className="text-sm">Beginner Level</span>
                        </Checkbox>
                        <Checkbox value="android">
                          <span className="text-sm">Intermediate Level</span>
                        </Checkbox>
                        <Checkbox value="data">
                          <span className="text-sm">Advanced level</span>
                        </Checkbox>
                      </CheckboxGroup>
                    </div>
                  </div>

                  {/* kelas populer */}

                  <button className="flex items-center h-10 text-white desktop:text-[#DB1B1B] text-md hover:opacity-70 flex justify-center w-full pt-2 desktop:pt-10 desktop:pb-5 bg-[#DB1B1B] desktop:bg-transparent rounded-md">
                    Hapus Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ModalFilterBeranda isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior} />
        </div>
        <div className="w-[100%] desktop:w-[75%]">
          <SearchKelasSaya />
          {/* <CourseKelasSaya /> */}

          {/* card*/}
          <div className="pb-[1rem] px-[1rem] desktop:px-[4rem]">
            <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[3rem] desktop:gap-[2rem]">
              {/* kelas free */}
              {data &&
                data.map((free) => (
                  <div className="h-52 shadow-lg rounded-3xl">
                    <div className=" w-full h-2/5 rounded-t-3xl ">
                      <img src={free.course.image} className="w-full h-full rounded-t-3xl"></img>
                    </div>
                    <div className="px-2 py-3 space-y-1 bg-white rounded-b-3xl">
                      <div className="flex justify-between text-sm">
                        <p className="text-[#116E63] font-bold">{free.course.name}</p>
                        <div className="flex items-center gap-1">
                          <svg fill="#F4CE14" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <p>{free.course.rating}</p>
                        </div>
                      </div>
                      <p className="text-sm font-bold">{free.category.name}</p>
                      <p className="text-xs">
                        <p className="text-xs">{free.course.mentor[0].mentor.name}</p>
                      </p>
                      <div className="flex text-xs font-normal gap-4 desktop:gap-5">
                        <div className="flex items-center gap-1">
                          <img src={level} />
                          <p className="text-[#116E63] font-semibold">{free.course.level}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <img src={modul} />
                          <p>{free.course.total_lesson} modul</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <img src={time} />
                          <p>{free.course.total_duration} Menit</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <img src={progress} />
                        <p>0% complete</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
