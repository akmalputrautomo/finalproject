import React, { useState } from "react";
import logo from "../../assets/img/Logo.png";
import { useNavigate } from "react-router-dom";
import { Form, Input } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import OTPInput from "react-otp-input";

const OtpRegister = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="login-section bg-slate-600 w-screen h-screen flex justify-center items-center">
        <div className="side bg-[#F8F8F8] w-[90vw] h-[70vh] lg:w-[30vw] rounded-tl-xl rounded-bl-xl shadow-xl lg:flex hidden justify-center flex-col items-center">
          <img src={logo} alt="" className="w-40 mt-3" />
          <h1 className="text-2xl text-white font-semibold font-serif">
            <span className="text-[#F2A227]">Learn</span>
            <span className="text-[#116E63]">Every</span>
            <span className="text-[#F2A227]">where</span>
            <span className="text-[#116E63]">Every</span>
            <span className="text-[#F2A227]">time</span>
          </h1>
        </div>

        {/* regiser */}
        <div className="wrapper-box bg-white w-[90vw] lg:h-[70vh] h-fit lg:w-[30vw] rounded-r-xl rounded-l-xl lg:rounded-l-none  drop-shadow-lg flex items-center  justify-center">
          <div className="content  flex flex-col items-center py-4 lg:mt-0">
            <div className="logo flex flex-row justify-center items-center lg:mt-4 ">
              <img src={logo} alt="" className="w-20 mt-3" />
            </div>
            <div className="form w-[70vw] lg:w-[20vw] ">
              <div className=" flex flex-col gap-5">
                <h1 className="text-center text-[#116E63] font-serif font-semibold text-xl">Masukan OTP</h1>
                {/* <button
                  className="flex justify-start"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <i class="fa-solid fa-arrow-left"></i>
                </button> */}
                <p>Ketik 6 digit kode yang dikirimkan ke</p>
                <OTPInput
                  inputStyle={"border rounded-lg border-black"}
                  // containerStyle={"bg-blue-100 w-[200px] h-[200px]"}
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
                <div className="flex justify-center items-center">
                  <button className="bg-[#116E63] w-full p-2 rounded-md text-white ">SIMPAN</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpRegister;
