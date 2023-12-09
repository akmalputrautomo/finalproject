import React, { useState } from "react";
import { NavbarAkun } from "../../assets/components/elements/NavbarAkun";
import { Navigate, useNavigate } from "react-router-dom";
import NavbarBurger from "../../assets/components/elements/NavbarBurger";

export const WebUbahPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const showpass = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="mobile:hidden desktop:block">
        <NavbarAkun />
      </div>
      <div className="w-full h-[8rem] bg-[#E7F0EF] text-[16px] font-bold mobile:hidden desktop:block ">
        <button
          onClick={() => {
            Navigate();
          }}
          className="text-[#116E63] flex gap-2 items-center text-[20px] font-serif pl-[10rem] pt-6 mobile:pl-2 desktop:pl-[10rem]  "
        >
          <i class="fa-solid fa-arrow-left"> </i>
          kembali ke beranda
        </button>
      </div>

      <div className="flex justify-center items-center mt-[-4rem] mobile:mt-0 desktop:mt-[-4rem] ">
        <div className="w-[65%] h-[37rem] flex border border-[#116E63] rounded-md flex-col mobile:w-full desktop:w-[65%]  mobile:h-screen desktop:h-[37rem]">
          <div className="w-full bg-[#116E63] h-[4rem] flex mobile:justify-between desktop:justify-center items-center  ">
            <h1 className="text-white font-bold text-2xl mobile:pl-4 desktop:pl-0">Akun</h1>
            <div className="mobile:block desktop:hidden">
              <NavbarBurger />
            </div>
          </div>

          {/* button */}
          <div className="flex w-full ">
            <div className="w-[50%] flex flex-col items-start gap-10 p-8 mobile:hidden desktop:flex  ">
              <button
                onClick={() => {
                  navigate("/WebAkunProfil");
                }}
                className="text-[1.3rem] w-[80%] flex items-center gap-3 border-b-2 "
              >
                <i class="fa-solid fa-pen text-[#116E63] text-[1.5rem]  "></i>Profil Saya
              </button>
              <button className="text-[1.3rem] w-[80%] flex items-center gap-3 border-b-2">
                <i class="fa-solid fa-gear text-[#116E63] text-[1.5rem]"></i>Ubah Password
              </button>
              <button
                onClick={() => {
                  navigate("/WebRiwayatPembayaran");
                }}
                className="text-[1.3rem] w-[80%] flex items-center gap-3 border-b-2"
              >
                <i class="fa-solid fa-cart-shopping text-[#116E63] text-[1.5rem]"></i>Riwayat Pembayaran
              </button>
              <button className="text-[1.3rem] w-[80%] flex items-center gap-3 border-b-2">
                <i class="fa-solid fa-arrow-right-from-bracket text-[#116E63] text-[1.5rem] "></i>Keluar
              </button>
            </div>

            {/* page  */}
            <div className="w-[50%] mobile:w-full desktop:w-[50%] ">
              {/* Ubah Password */}
              <div>
                <h1 className="font-bold text-2xl flex justify-center pt-4">Ubah Password</h1>
                <div className="flex flex-col gap-4 pt-4 mobile:pl-4 desktop:pl-0">
                  <div className="relative">
                    <p>Masukkan Password Lama</p>
                    <input type={showPassword ? "text" : "password"} className=" border rounded-xl w-[80%] h-[3rem] mobile:w-[95%] desktop:w-[80%]"></input>
                    <span className="absolute right-[7rem] top-[2.3rem] cursor-pointer mobile:right-7 desktop:right-[7rem]" onClick={showpass}>
                      {showPassword ? "Hide" : "Show"}
                    </span>
                  </div>
                  <div>
                    <p>Masukkan Password Baru</p>
                    <input type="password" className="border rounded-xl w-[80%] h-[3rem] mobile:w-[95%] desktop:w-[80%]"></input>
                  </div>
                  <div>
                    <p>Ulangi Password Baru</p>
                    <input type="password" className="border rounded-xl w-[80%] h-[3rem] mobile:w-[95%] desktop:w-[80%]"></input>
                  </div>
                  <div className="flex justify-start items-center w-full">
                    <button className="rounded-full bg-[#116E63] text-white w-[80%] h-[2.5rem] mobile:w-[90%] desktop:w-[80%]">Ubah Password</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
