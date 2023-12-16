import React, { useEffect, useRef, useState } from "react";
import { NavbarAkun } from "../../assets/components/elements/NavbarAkun";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import NavbarBurger from "../../assets/components/elements/NavbarBurger";
import logo from "../../assets/img/foto.png";
import { useDispatch, useSelector } from "react-redux";
import getakunprofile from "../../redux/action/akun/AkunProfile";
import { LogOut } from "../../redux/action/auth/authLoginUser";

export const WebAkunProfil = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  console.log(userId, "id user");
  const [isEditingNama, setIsEditingNama] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingTelepon, setIsEditingTelepon] = useState(false);
  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [no_hp, setno_hp] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const id = useSelector((state) => state.loginUser.name.id);

  const namauser = useSelector((state) => state.loginUser.name.name);
  const emailuser = useSelector((state) => state.loginUser.name.email);
  const notelpuser = useSelector((state) => state.loginUser.name.no_hp);

  const handleEditNamaClick = () => {
    setIsEditingNama(!isEditingNama);
  };
  const handleEditEmailClick = () => {
    setIsEditingEmail(!isEditingEmail);
  };
  const handleEditTeleponClick = () => {
    setIsEditingTelepon(!isEditingTelepon);
  };

  const profilakun = async () => {
    const success = await dispatch(
      getakunprofile(userId, {
        image: image,
        name: name,
        email: email,
        no_hp: no_hp,
        country: country,
        city: city,
      })
    );
    if (success) {
    }
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setimage(e.target.files[0]);
    console.log(file);
  };

  return (
    <>
      <div className="mobile:hidden desktop:block">
        <NavbarAkun />
        {/* <NavbarBurger /> */}
      </div>
      <div className="w-full h-[8rem] bg-[#E7F0EF] text-[16px] font-bold mobile:hidden desktop:block">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-[#116E63] flex gap-2 items-center text-[20px] font-serif pl-[10rem] pt-6  "
        >
          <i class="fa-solid fa-arrow-left"> </i>
          kembali ke beranda
        </button>
      </div>

      <div className="flex justify-center items-center mt-[-4rem] mobile:mt-0 desktop:mt-[-4rem] ">
        <div className="w-[65%] h-[37rem] flex border border-[#116E63] rounded-md flex-col mobile:w-full desktop:w-[65%] mobile:h-screen desktop:h-[40rem] ">
          <div className="w-full bg-[#116E63] h-[4rem] flex justify-center items-center mobile:justify-between desktop:justify-center">
            <h1 className="text-white font-bold text-2xl mobile:pl-4 desktop:pl-0">Akun</h1>
            <div className="mobile:block desktop:hidden ">
              <NavbarBurger />
            </div>
          </div>

          {/* button */}
          <div className="flex w-full ">
            <div className="w-[50%] flex flex-col items-start gap-10 p-8 mobile:hidden desktop:flex  ">
              <button className="text-[1.3rem] w-[80%] flex items-center gap-3 border-b-2 ">
                <i class="fa-solid fa-pen text-[#116E63] text-[1.5rem]  "></i>Profil Saya
              </button>
              <button
                key={id}
                onClick={() => {
                  navigate(`/WebUbahPassword/${id}`);
                }}
                className="text-[1.3rem] w-[80%] flex items-center gap-3 border-b-2"
              >
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
              <button
                onClick={() => {
                  dispatch(LogOut());
                }}
                className="text-[1.3rem] w-[80%] flex items-center gap-3 border-b-2"
              >
                <i class="fa-solid fa-arrow-right-from-bracket text-[#116E63] text-[1.5rem] "></i>Keluar
              </button>
            </div>

            {/* page  */}
            <div className="w-[50%] desktop:w-[50%] mobile:w-full mobile:px-2 desktop:px-0  ">
              {/* Profil Saya */}

              <div className="flex flex-col gap-1 mobile:gap-4 desktop:gap-1 ">
                <div className="pt-3 flex justify-center items-center cursor-pointer" onClick={handleImageClick}>
                  {image ? <img src={URL.createObjectURL(image)} alt="" className="rounded-full object-cover w-1/4 h-1/4" /> : <img src={logo} alt="Profile" className="mr-2" />}
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    ref={inputRef}
                    onChange={handleImageChange}
                    className="hidden" // Tambahkan class hidden untuk menyembunyikan input file
                  />
                </div>
                <div>
                  <p>Nama</p>
                  {isEditingNama ? (
                    <div className="flex items-center gap-2">
                      <input onChange={(e) => setname(e.target.value)} id="name" placeholder="John Doe" className="border rounded-xl w-[60%] h-[3rem] mobile:w-[90%] desktop:w-[60%]" />
                      <button onClick={handleEditNamaClick} className="text-[#116E63]">
                        Cancel Edit
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center border w-[60%] mobile:w-[90%] h-[3rem] rounded-xl">
                      <p>{namauser}</p>
                      <button onClick={handleEditNamaClick} className="pl-[24rem] mobile:pl-[20rem] desktop:pl-[24rem] text-[#116E63]">
                        Edit
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  <p>Email</p>
                  {isEditingEmail ? (
                    <div className="flex items-center gap-2">
                      <input onChange={(e) => setemail(e.target.value)} id="email" placeholder="Johndoe@gmail.com" className="border rounded-xl w-[60%] h-[3rem] mobile:w-[90%] desktop:w-[60%]" />
                      <button onClick={handleEditEmailClick} className="text-[#116E63]">
                        Cancel Edit
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center border w-[60%] mobile:w-[90%] h-[3rem] rounded-xl">
                      <p>{emailuser}</p>
                      <button onClick={handleEditEmailClick} className="pl-[16.5rem] mobile:pl-[20rem] desktop:pl-[16.5rem] text-[#116E63]">
                        Edit
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  <p>Nomor Telepon</p>
                  {isEditingTelepon ? (
                    <div className="flex items-center gap-2">
                      <input onChange={(e) => setno_hp(e.target.value)} id="no_hp" placeholder="+62 812121121121" className="border rounded-xl w-[60%] h-[3rem] mobile:w-[90%] desktop:w-[60%]" />
                      <button onClick={handleEditTeleponClick} className="text-[#116E63]">
                        Cancel Edit
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center border w-[60%] mobile:w-[90%] h-[3rem] rounded-xl">
                      <p>{notelpuser}</p>
                      <button onClick={handleEditTeleponClick} className="pl-[22rem] mobile:pl-[20rem] desktop:pl-[22rem] text-[#116E63]">
                        Edit
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  <p>Negara</p>
                  <input onChange={(e) => setcountry(e.target.value)} id="country" placeholder="Masukkan Negara tempat tinggal" className="border rounded-xl w-[60%] h-[3rem] mobile:w-[90%] desktop:w-[60%]"></input>
                </div>
                <div>
                  <p>Kota</p>
                  <input onChange={(e) => setcity(e.target.value)} id="city" placeholder="Masukkan kota tempat tinggal" className="border rounded-xl w-[60%] h-[3rem] mobile:w-[90%] desktop:w-[60%]"></input>
                </div>
                <div>
                  <button
                    onClick={() => {
                      profilakun();
                    }}
                    className="flex justify-center items-center  bg-[#116E63] text-white w-[75%] rounded-xl h-[3rem] text-[1rem] font-bold mobile:w-full desktop:w-[75%]"
                  >
                    Simpan Profil Saya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
