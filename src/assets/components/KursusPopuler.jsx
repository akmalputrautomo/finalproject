import React, { Component } from "react";
import level from "../img/level.png"
import modul from "../img/modul.png"
import time from "../img/time.png"
import premium from "../img/premium.png"
import { Button } from "@nextui-org/button";

export const KursusPopuler = () => {
  return (
    <div className="px-[1rem] desktop:px-0 py-[1.5rem] bg-white flex justify-center">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">Kursus Populer</p>
          <button className="text-xs font-bold content-center text-[#116E63] hover:opacity-70" href="">Lihat Semua</button>
        </div>
        <div className="space-x-2 space-y-2">
          <Button className="bg-[#E7F0EF] px-6 py-2 rounded-full text-xs font-bold focus:bg-[#116E63] focus:text-white">All</Button>
          <Button className="bg-[#E7F0EF] px-6 py-2 rounded-full text-xs font-bold focus:bg-[#116E63] focus:text-white">Data Science</Button>
          <Button className="bg-[#E7F0EF] px-6 py-2 rounded-full text-xs font-bold focus:bg-[#116E63] focus:text-white">UI/UX Design</Button>
          <Button className="bg-[#E7F0EF] px-6 py-2 rounded-full text-xs font-bold focus:bg-[#116E63] focus:text-white">Android Development</Button>
          <Button className="bg-[#E7F0EF] px-6 py-2 rounded-full text-xs font-bold focus:bg-[#116E63] focus:text-white">Web Development</Button>
          <Button className="bg-[#E7F0EF] px-6 py-2 rounded-full text-xs font-bold focus:bg-[#116E63] focus:text-white">IOS Development</Button>
          <Button className="bg-[#E7F0EF] px-6 py-2 rounded-full text-xs font-bold focus:bg-[#116E63] focus:text-white">Business Intelligence</Button>
        </div>
        <div className="grid grid-cols-1 desktop:grid-cols-3 gap-[2rem]">
        {/* card 1 */}
          <div className="w-full h-52 shadow-lg rounded-3xl">
            <div className="bg-emerald-500 w-full h-2/5 rounded-t-3xl "></div>
            <div className="px-2 py-1 space-y-1 ">
              <div className="flex justify-between text-sm ">
                <p className="text-[#116E63] font-bold">UI/UX Design</p>
                <div className="flex items-center gap-1">
                  <svg
                    fill="#F4CE14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                  <p>4.7</p>
                </div>
              </div>
              <p className="text-sm font-bold">
                Belajar Web Designer dengan Figma
              </p>
              <p className="text-xs">by Angela Doe</p>
              <div className="flex text-xs font-normal gap-4 ">
                <div className="flex items-center gap-1">
                  <img src={level}/>
                  <p className="text-[#116E63] font-semibold">
                    Intermediate Level
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <img src={modul}/>
                  <p>10 Modul</p>
                </div>
                <div className="flex items-center gap-1">
                  <img src={time}/>
                  <p>120 Menit</p>
                </div>
              </div>
              <button className="flex bg-[#F2A227] text-xs px-4 py-1 rounded-full gap-8 text-white font-semibold">
                <div className="flex items-center gap-2">
                  <img src={premium}/>
                  <p>Beli</p>
                </div>
                <p>Rp 249.000</p>
              </button>
            </div>
          </div>

          {/* card 2 */}
          <div className="w-full h-52 shadow-lg rounded-3xl">
            <div className="bg-emerald-500 w-full h-2/5 rounded-t-3xl "></div>
            <div className="px-2 py-1 space-y-1 ">
              <div className="flex justify-between text-sm ">
                <p className="text-[#116E63] font-bold">UI/UX Design</p>
                <div className="flex items-center gap-1">
                  <svg
                    fill="#F4CE14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                  <p>4.7</p>
                </div>
              </div>
              <p className="text-sm font-bold">
                Belajar Web Designer dengan Figma
              </p>
              <p className="text-xs">by Angela Doe</p>
              <div className="flex text-xs font-normal gap-4 ">
                <div className="flex items-center gap-1">
                  <img src={level}/>
                  <p className="text-[#116E63] font-semibold">
                    Intermediate Level
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <img src={modul}/>
                  <p>10 Modul</p>
                </div>
                <div className="flex items-center gap-1">
                  <img src={time}/>
                  <p>120 Menit</p>
                </div>
              </div>
              <button className="flex bg-[#F2A227] text-xs px-4 py-1 rounded-full gap-8 text-white font-semibold">
                <div className="flex items-center gap-2">
                  <img src={premium}/>
                  <p>Beli</p>
                </div>
                <p>Rp 249.000</p>
              </button>
            </div>
          </div>

          {/* card 3 */}
          <div className="w-full h-52 shadow-lg rounded-3xl">
            <div className="bg-emerald-500 w-full h-2/5 rounded-t-3xl "></div>
            <div className="px-2 py-1 space-y-1 ">
              <div className="flex justify-between text-sm ">
                <p className="text-[#116E63] font-bold">UI/UX Design</p>
                <div className="flex items-center gap-1">
                  <svg
                    fill="#F4CE14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                  <p>4.7</p>
                </div>
              </div>
              <p className="text-sm font-bold">
                Belajar Web Designer dengan Figma
              </p>
              <p className="text-xs">by Angela Doe</p>
              <div className="flex text-xs font-normal gap-4 ">
                <div className="flex items-center gap-1">
                  <img src={level}/>
                  <p className="text-[#116E63] font-semibold">
                    Intermediate Level
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <img src={modul}/>
                  <p>10 Modul</p>
                </div>
                <div className="flex items-center gap-1">
                  <img src={time}/>
                  <p>120 Menit</p>
                </div>
              </div>
              <button className="flex bg-[#F2A227] text-xs px-4 py-1 rounded-full gap-8 text-white font-semibold">
                <div className="flex items-center gap-2">
                  <img src={premium}/>
                  <p>Beli</p>
                </div>
                <p>Rp 249.000</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
