import React from "react";
import NavbarNotifikasi from "./NavbarNotifikasi";
import { useNavigate } from "react-router-dom";

const WebNotifikasi = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavbarNotifikasi />
      <div className="w-full h-[10rem] bg-[#E7F0EF] text-[16px] font-bold">
        <button
          onClick={() => {
            navigate();
          }}
          className="text-[#116E63] flex gap-2 items-center text-[20px] font-serif pl-[10rem] pt-6"
        >
          <i class="fa-solid fa-arrow-left"> </i>
          kembali ke beranda
        </button>
      </div>

      <div className="flex justify-center items-center mt-[-4rem]  ">
        <div className="w-[75%] h-[30rem] flex border border-[#116E63] rounded-md flex-col ">
          <div className="w-full bg-[#116E63] h-[4rem] flex justify-center items-center ">
            <h1 className="text-white font-bold text-2xl">Notifikasi</h1>
          </div>
          <div className="flex flex-col gap-10 pt-4 pl-10">
            <div className="flex gap-2">
              <div className="bg-[#116E63] text-white w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-md ">
                <i class="fa-regular fa-bell"></i>
              </div>
              <div className="flex justify-between w-full pr-10">
                <div className="flex flex-col">
                  <h1 className="text-[#116E63]">Promosi</h1>
                  <h1>Dapatkan Potongan 50% selama Bulan Maret! </h1>
                  <h1>Syarat dan Ketentuan berlaku! </h1>
                </div>
                <h1>2 Maret, 12:00</h1>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-[#116E63] text-white w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-md ">
                <i class="fa-regular fa-bell"></i>
              </div>
              <div className="flex justify-between w-full pr-10">
                <div className="flex flex-col">
                  <h1 className="text-[#116E63]">Promosi</h1>
                  <h1>Dapatkan Potongan 50% selama Bulan Maret! </h1>
                  <h1>Syarat dan Ketentuan berlaku! </h1>
                </div>
                <h1>2 Maret, 12:00</h1>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-[#116E63] text-white w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-md ">
                <i class="fa-regular fa-bell"></i>
              </div>
              <div className="flex justify-between w-full pr-10">
                <div className="flex flex-col">
                  <h1 className="text-[#116E63]">Promosi</h1>
                  <h1>Dapatkan Potongan 50% selama Bulan Maret! </h1>
                  <h1>Syarat dan Ketentuan berlaku! </h1>
                </div>
                <h1>2 Maret, 12:00</h1>
              </div>
            </div>
            {/* <div className="bg-[#116E63] text-white w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-md ">
              <i class="fa-regular fa-bell"></i>
            </div>
            <div className="bg-[#116E63] text-white w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-md ">
              <i class="fa-regular fa-bell"></i>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WebNotifikasi;
