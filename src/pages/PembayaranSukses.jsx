import React from "react";
import Navbar from "../assets/components/navbar";
import illustration from "../assets/svg/Illustration.svg";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router";


const PembayaranSukses = () => {

    const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <Navbar></Navbar>
      <div>
      <div className="flex flex-col justify-center items-center space-y-12 mt-8">
        <div className="bg-[#45C440] w-2/4 h-12 font-semibold  rounded-xl align-middle text-white flex items-center justify-center   ">
          <p>Terimakasih atas pembayaran transaksi</p>
        </div>
        <p className="text-[#116E63] text-3xl font-bold">Selamat!</p>
        <img  src={illustration} />
        <p className="text-center font-bold">
          Transaksi pembayaran kelas premium berhasil!
          <p className="font-normal">E-receipt telah dikirimkan ke email.</p>
        </p>
        <Button className='bg-[#116E63] w-1/5 h-[2.5rem]  flex justify-center items-center rounded-3xl text-white font-semibold text-sm gap-2 ' >
               Mulai Belajar
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <button  className="text-[#F2A227] text-sm font-bold mt-4 "  onClick={() => {navigate("/detailKelas");}} >Kembali ke Beranda</button>
      </div>
      </div>
    </div>
  );
};

export default PembayaranSukses;