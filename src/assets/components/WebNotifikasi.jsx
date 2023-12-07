import React from "react";
import NavbarNotifikasi from "./NavbarNotifikasi";
import { useNavigate } from "react-router-dom";

const WebNotifikasi = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mobile:hidden desktop:block">
        <NavbarNotifikasi />
      </div>
      <div className="w-full h-[10rem] bg-[#E7F0EF] text-[16px] font-bold mobile:hidden desktop:block">
        <button
          onClick={() => {
            navigate();
          }}
          className="text-[#116E63] flex gap-2 items-center text-[20px] font-serif pl-[10rem] pt-6 mobile:hidden desktop:block"
        >
          <i class="fa-solid fa-arrow-left"> </i>
          kembali ke beranda
        </button>
      </div>

      <div className="flex justify-center items-center mt-[-4rem] mobile:mt-0 desktop:mt-[-4rem] ">
        <div className="w-[75%] h-[30rem] flex border border-[#116E63] rounded-md flex-col mobile:w-full desktop:w-[75%] mobile:h-screen desktop:h-[30rem]">
          <div className="w-full bg-[#116E63] h-[4rem] flex justify-center items-center mobile:justify-start pl-4 desktop:justify-center">
            <h1 className="text-white font-bold text-2xl ">Notifikasi</h1>
          </div>
          <div className="flex flex-col gap-10 pt-4 pl-10 mobile:pl-4 desktop:pl-10">
            <div className="flex gap-2">
              <div className="bg-[#116E63] text-white w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-md ">
                <i class="fa-regular fa-bell"></i>
              </div>
              <div className="flex justify-between w-full pr-10 mobile:pr-0 desktop:pr-10">
                <div className="flex flex-col w-full ">
                  <h1 className="text-[#116E63]">Promosi</h1>
                  <p>Dapatkan Potongan 50% selama Bulan Maret! </p>
                  <h1 className="mobile:text-[#8A8A8A]">Syarat dan Ketentuan berlaku! </h1>
                </div>
                <div className="mobile:w-[50%] desktop:w-[15%] desktop:justify-end ">
                  <h1>2 Maret, 12:00</h1>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-[#116E63] text-white w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-md ">
                <i class="fa-regular fa-bell"></i>
              </div>
              <div className="flex justify-between w-full pr-10 mobile:pr-0 desktop:pr-10">
                <div className="flex flex-col w-full ">
                  <h1 className="text-[#116E63]">Promosi</h1>
                  <p>Dapatkan Potongan 50% selama Bulan Maret! </p>
                  <h1 className="mobile:text-[#8A8A8A]">Syarat dan Ketentuan berlaku! </h1>
                </div>
                <div className="mobile:w-[50%] desktop:w-[15%] desktop:justify-end ">
                  <h1>2 Maret, 12:00</h1>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-[#116E63] text-white w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-md ">
                <i class="fa-regular fa-bell"></i>
              </div>
              <div className="flex justify-between w-full pr-10 mobile:pr-0 desktop:pr-10">
                <div className="flex flex-col w-full ">
                  <h1 className="text-[#116E63]">Promosi</h1>
                  <p>Dapatkan Potongan 50% selama Bulan Maret! </p>
                  <h1 className="mobile:text-[#8A8A8A]">Syarat dan Ketentuan berlaku! </h1>
                </div>
                <div className="mobile:w-[50%] desktop:w-[15%] desktop:justify-end ">
                  <h1>2 Maret, 12:00</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WebNotifikasi;
