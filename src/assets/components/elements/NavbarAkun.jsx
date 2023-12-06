import React from "react";
import logo from "../../img/Logo.png";
import { useNavigate } from "react-router-dom";

export const NavbarAkun = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#F8F8F8] flex justify-between p-4">
        <img className="w-[10rem] h-[3rem]" src={logo} />
        <form className="relative flex w-1/2 ">
          <input placeholder="cari kursus terbaik...." className="  border border-black px-3 rounded-md w-full" type="text"></input>
          <button type="submit" className="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute right-3 cursor-pointer ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </form>
        <div className="flex gap-2 items-center ">
          <button className=" w-[3rem] h-[2.5rem] rounded-md">
            <i class="fa-solid fa-list text-[#116E63] text-[16px]"> </i>
          </button>
          <button
            className="w-[3rem] h-[2.5rem] rounded-md "
            onClick={() => {
              navigate("/WebNotifikasi");
            }}
          >
            <i class="fa-regular fa-bell text-[#116E63]"></i>
          </button>
          <button className="bg-[#116E63] w-[8rem] h-[2.5rem] rounded-md">
            <i class="fa-solid fa-user text-white "> Akun</i>
          </button>
        </div>
      </div>
    </div>
  );
};
