import React, { useState } from "react";
import logo from "../../assets/img/Logo.png";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const showPass = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      {/* section kiri */}
      <div className="bg-gray-100 h-screen flex items-center justify-center w-full p-10">
        <div className="bg-white px-[8rem] rounded shadow-md w-2/4 flex flex-col justify-center h-full">
          <h1 className="text-2xl font-bold mb-8 text-[#116E63]">Daftar</h1>

          <div className="mb-4">
            <label className=" text-gray-600">Nama</label>
            <input type="text" id="nama" placeholder="Nama Lengkap" className="mt-1 p-2 w-full border rounded-xl" />
          </div>

          <div className="mb-4">
            <label className=" text-gray-600">Email</label>
            <input type="email" id="email" placeholder="Contoh: ganteng123@gmail.com" className="mt-1 p-2 w-full border rounded-xl" />
          </div>

          <div className="mb-4">
            <label className=" text-gray-600">Nomor Telepon</label>
            <input type="tel" id="telepon" placeholder="+62" className="mt-1 p-2 w-full border rounded-xl" />
          </div>

          <div className="relative">
            <label className=" text-gray-600">Buat Password</label>
            <input id="password" type={showPassword ? "text" : "password"} placeholder="Password" className="w-full p-2 mb-2 border rounded"></input>
            <span className="absolute right-3 top-8 cursor-pointer" onClick={showPass}>
              {showPassword ? <i class="fa-regular fa-eye"></i> : <i class="fa-regular fa-eye-slash"></i>}
            </span>
          </div>

          <button type="button" className="bg-[#116E63] text-white px-4 py-2 w-full rounded hover:bg-green-800">
            Daftar
          </button>

          <div className="flex mt-4 justify-center">
            <h3 className="mr-2">Sudah punya akun?</h3>
            <button className="text-[#116E63] hover:underline rounded-xl">Masuk di sini</button>
          </div>
        </div>

        {/* section kanan */}
        <div className="bg-[#F8F8F8] w-2/4 h-full flex justify-center items-center p-10">
          <img src={logo} className="w-[25rem] h-[8rem]"></img>
        </div>
      </div>
    </div>
  );
};
