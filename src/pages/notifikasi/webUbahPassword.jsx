import React from "react";
import { NavbarAkun } from "../../assets/components/elements/NavbarAkun";
import { Navigate, useNavigate } from "react-router-dom";

export const WebUbahPassword = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <NavbarAkun />
      </div>
      <div className="w-full h-[8rem] bg-[#E7F0EF] text-[16px] font-bold">
        <button
          onClick={() => {
            Navigate();
          }}
          className="text-[#116E63] flex gap-2 items-center text-[20px] font-serif pl-[10rem] pt-6  "
        >
          <i class="fa-solid fa-arrow-left"> </i>
          kembali ke beranda
        </button>
      </div>

      <div className="flex justify-center items-center mt-[-4rem]  ">
        <div className="w-[65%] h-[37rem] flex border border-[#116E63] rounded-md flex-col  ">
          <div className="w-full bg-[#116E63] h-[4rem] flex justify-center items-center ">
            <h1 className="text-white font-bold text-2xl">Akun</h1>
          </div>

          {/* button */}
          <div className="flex w-full ">
            <div className="w-[50%] flex flex-col items-start gap-10 p-8  ">
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
            <div className="w-[50%] ">
              {/* Ubah Password */}
              <div>
                <h1 className="font-bold text-2xl flex justify-center pt-4">Ubah Password</h1>
                <div className="flex flex-col gap-4 pt-4">
                  <div>
                    <p>Masukkan Password Lama</p>
                    <input type="password" className=" border rounded-xl w-[80%] h-[3rem]"></input>
                  </div>
                  <div>
                    <p>Masukkan Password Baru</p>
                    <input type="password" className="border rounded-xl w-[80%] h-[3rem]"></input>
                  </div>
                  <div>
                    <p>Ulangi Password Baru</p>
                    <input type="password" className="border rounded-xl w-[80%] h-[3rem]"></input>
                  </div>
                  <div className="flex justify-start items-center w-full">
                    <button className="rounded-full bg-[#116E63] text-white w-[80%] h-[2.5rem]">Ubah Password</button>
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
