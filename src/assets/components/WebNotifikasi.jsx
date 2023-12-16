import React, { useEffect } from "react";
import NavbarNotifikasi from "./NavbarNotifikasi";
import { useNavigate, useParams } from "react-router-dom";
import { NavbarResponsive } from "./elements/NavbarResponsive";
import { useDispatch, useSelector } from "react-redux";
import getDatanotifikasi from "../../redux/action/akun/notifikasiAkun";

const WebNotifikasi = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const dispatch = useDispatch();
  console.log(userId, "id notifikasi");

  const getnotifikasi = () => {
    dispatch(getDatanotifikasi(userId));
  };

  useEffect(() => {
    getnotifikasi();
  }, []);

  const notifikasi = useSelector((state) => state.Notifikasi.notif);
  console.log(notifikasi);

  return (
    <div>
      <div className="hidden desktop:block">
        <NavbarNotifikasi />
      </div>
      <div className="block desktop:hidden">
        <NavbarResponsive />
      </div>
      <div className="w-full h-[4rem] desktop:h-[10rem] bg-[#E7F0EF] font-bold">
        <button
          onClick={() => {
            navigate("/berandakelas");
          }}
          className="flex text-[#116E63] gap-3 items-center text-[16px] font-serif pl-[1rem] desktop:pl-[10rem] pt-6"
        >
          <i class="fa-solid fa-arrow-left"> </i>
          <p>Kembali ke Beranda</p>
        </button>
      </div>

      <div className="flex justify-center items-center mt-[-4rem] mobile:mt-0 desktop:mt-[-4rem] ">
        <div className="w-[75%] h-[30rem] flex border border-[#116E63] rounded-md flex-col mobile:w-full desktop:w-[75%] mobile:h-screen desktop:h-[30rem]">
          <div className="w-full bg-[#116E63] h-[4rem] flex justify-center items-center pl-4">
            <h1 className="text-white font-bold text-2xl ">Notifikasi</h1>
          </div>
          {notifikasi &&
            notifikasi.map((courses) => (
              <div className="flex flex-col gap-10 pt-4 pl-10 mobile:pl-4 desktop:pl-10">
                <div className="flex gap-2">
                  <div className="bg-[#116E63] text-white w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-md ">
                    <i class="fa-regular fa-bell"></i>
                  </div>
                  <div className="flex justify-between w-full pr-10 mobile:pr-0 desktop:pr-10">
                    <div className="flex flex-col w-full ">
                      <h1 className="text-[#116E63]">Promosi</h1>
                      <p>{courses.title} </p>
                      <h1 className="mobile:text-[#8A8A8A] desktop:w-1/2 mobile:w-full">{courses.body}</h1>
                    </div>
                    <div className="mobile:w-[50%] desktop:w-[15%] desktop:justify-end ">
                      <h1>{courses.createAt}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default WebNotifikasi;
