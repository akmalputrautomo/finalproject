import React, { useState } from "react";
import { NavbarAkun } from "../../assets/components/elements/NavbarAkun";
import { Navigate } from "react-router-dom";

export const WebAkunProfil = () => {
  const [states, setStates] = useState({
    ProfilSaya: true,
    UbahPassword: false,
    RiwayatPembayaran: false,
  });

  function handleclick(clickedState) {
    setStates((prevState) => {
      // Mengatur semua state menjadi false
      const newStates = {
        ProfilSaya: false,
        UbahPassword: false,
        RiwayatPembayaran: false,
      };

      // Mengatur state yang diklik menjadi true
      newStates[clickedState] = true;

      return newStates;
    });
  }

  return (
    <>
      <NavbarAkun />
      <div className="w-full h-[8rem] bg-[#E7F0EF] text-[16px] font-bold">
        <button
          onClick={() => {
            Navigate();
          }}
          className="text-[#116E63] flex gap-2 items-center text-[20px] font-serif pl-[10rem] pt-6"
        >
          <i class="fa-solid fa-arrow-left"> </i>
          kembali ke beranda
        </button>
      </div>

      <div className="flex justify-center items-center mt-[-4rem]  ">
        <div className="w-[65%] h-[37rem] flex border border-[#116E63] rounded-md flex-col ">
          <div className="w-full bg-[#116E63] h-[4rem] flex justify-center items-center ">
            <h1 className="text-white font-bold text-2xl">Akun</h1>
          </div>

          {/* button */}
          <div className="flex w-full ">
            <div className="w-[50%] flex flex-col items-start gap-10 p-8 ">
              <button onClick={() => handleclick("ProfilSaya")} className="text-[1.3rem] w-[80%] flex items-center gap-3 border-b-2 ">
                <i class="fa-solid fa-pen text-[#116E63] text-[1.5rem]  "></i>Profil Saya
              </button>
              <button onClick={() => handleclick("UbahPassword")} className="text-[1.3rem] w-[80%] flex items-center gap-3 border-b-2">
                <i class="fa-solid fa-gear text-[#116E63] text-[1.5rem]"></i>Ubah Password
              </button>
              <button onClick={() => handleclick("RiwayatPembayaran")} className="text-[1.3rem] w-[80%] flex items-center gap-3 border-b-2">
                <i class="fa-solid fa-cart-shopping text-[#116E63] text-[1.5rem]"></i>Riwayat Pembayaran
              </button>
              <button className="text-[1.3rem] w-[80%] flex items-center gap-3 border-b-2">
                <i class="fa-solid fa-arrow-right-from-bracket text-[#116E63] text-[1.5rem] "></i>Keluar
              </button>
            </div>

            {/* page  */}
            <div className="w-[50%] ">
              {/* Profil Saya */}
              {states.ProfilSaya && (
                <div className="flex flex-col gap-4">
                  <div>
                    <p>Nama</p>
                    <input placeholder="John Doe" className="border rounded-xl w-[60%] h-[3rem]"></input>
                  </div>
                  <div>
                    <p>Email</p>
                    <input placeholder="Johndoe@gmail.com" className="border rounded-xl w-[60%] h-[3rem]"></input>
                  </div>
                  <div>
                    <p>Nomor Telepon</p>
                    <input placeholder="+62 812121121121" className="border rounded-xl w-[60%] h-[3rem]"></input>
                  </div>
                  <div>
                    <p>Negara</p>
                    <input placeholder="Masukkan Negara tempat tinggal" className="border rounded-xl w-[60%] h-[3rem]"></input>
                  </div>
                  <div>
                    <p>Kota</p>
                    <input placeholder="Masukkan kota tempat tinggal" className="border rounded-xl w-[60%] h-[3rem]"></input>
                  </div>
                  <div>
                    <button className="flex justify-center items-center  bg-[#116E63] text-white w-[75%] rounded-xl h-[3rem] text-[1rem] font-bold">Simpan Profil Saya</button>
                  </div>
                </div>
              )}
              {/* ubah password */}
              {states.UbahPassword && (
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
                  </div>
                </div>
              )}
              {/* riwayat pembayaran */}
              {states.RiwayatPembayaran && (
                <div>
                  <h1 className="font-bold text-2xl flex justify-center pt-4">Riwayat Pembayaran</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
