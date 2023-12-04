import React from 'react'
import search from "../img/search.png";

export const SearchKelasSaya = () => {
  return (
    <div className="py-5 px-16">
        {/* search */}
      <div className="flex justify-end relative pr-5">
        <div className="flex items-center w-[25%]">
          <input className="flex border border-2 border-[#116E63] rounded-full h-11 px-4 focus:outline-none" placeholder="Cari Kelas..."/>
          <img src={search} className="w-7 h-7 absolute right-3 cursor-pointer" alt="Search Icon"/>
        </div>
      </div>

      {/* button filter */}
      <div className="flex justify-between py-6 gap-6">
        <button className="border bg-white w-[25%] h-10 rounded-2xl text-md focus:bg-[#116E63] focus:text-white hover:opacity-70">All</button>
        <button className="border bg-white w-[40%] h-10 rounded-2xl text-md focus:bg-[#116E63] focus:text-white hover:opacity-70">In Progress</button>
        <button className="border bg-white w-[35%] h-10 rounded-2xl text-md focus:bg-[#116E63] focus:text-white hover:opacity-70">Selesai</button>
      </div>

    </div>
  )
}
