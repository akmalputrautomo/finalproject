import logo from "../../assets/img/Logo.png";
// import { Form } from "antd";
// import { InputOTP } from "antd-input-otp";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getResendOtp, getVerifyOtp } from "../../redux/action/auth/otpregister";

const OtpRegister = () => {
  // const [form] = Form.useForm();
  const [otp, setotp] = useState("");
  const dispatch = useDispatch();
  const emailFromRedux = useSelector((state) => state.regis.user.email);
  const [Email, setEmail] = useState(emailFromRedux || "");
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  // redux otp
  const handleSave = async () => {
    const otpData = await dispatch(
      getVerifyOtp({
        email: Email,
        otp: otp,
      })
    );
    if (otpData) {
      navigate("/login");
    }
  };

  useEffect(() => {
    setEmail(emailFromRedux);
  }, [emailFromRedux]);

  // redux resend otp
  const handleResend = async () => {
    const resendData = await dispatch(
      getResendOtp({
        email: Email,
      })
    );
    if (resendData) {
      setSeconds(5);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // const handleFinish = (value) => {};
  return (
    <>
      <div className="login-section bg-slate-600 w-screen h-screen flex justify-center items-center">
        <div className="side bg-[#F8F8F8] w-[90vw] h-[70vh] justify-center flex-col items-center rounded-tl-xl rounded-bl-xl shadow-xl desktop:w-[30vw] desktop:flex hidden">
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
        <div className="wrapper-box bg-white w-[90vw] h-fit rounded-r-xl rounded-l-xl drop-shadow-lg flex items-center justify-center desktop:w-[30vw] desktop:h-[70vh] desktop:rounded-l-none">
          <div className="content  flex flex-col items-center py-4 desktop:mt-0">
            <div className="logo flex flex-row justify-center items-center desktop:mt-4 ">
              <img src={logo} alt="" className="w-20 mt-3" />
            </div>
            <div className="form w-[70vw] desktop:w-[20vw] ">
              <div className=" flex flex-col gap-5">
                <h1 className="text-center text-[#116E63] font-serif font-semibold text-xl">Masukan OTP</h1>
                <p>Ketik 6 digit kode yang dikirimkan ke</p>
                <div className="flex justify-center items-center">
                  <input
                    id="otp"
                    type="otp"
                    value={otp}
                    onChange={(e) => {
                      setotp(e.target.value);
                    }}
                    maxLength={6}
                    className="border border-gray-400 p-2 rounded-md text-[#116E63] text-center"
                  />
                </div>

                <div className="flex justify-center items-center">
                  <button
                    onClick={() => {
                      handleSave();
                    }}
                    className="bg-[#116E63] w-full p-2 rounded-md text-white "
                  >
                    SIMPAN
                  </button>
                </div>
                <div>
                  {seconds > 0 ? (
                    <span className="py-4 pb-5 text-lg text-center">
                      Kirim ulang OTP dalam <span className="text-primary font-bold">{seconds}</span> detik
                    </span>
                  ) : (
                    <span className="py-4 pb-5 text-xl text-center font-bold cursor-pointer" onClick={handleResend}>
                      Kirim Ulang OTP
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Form onFinish={handleFinish} form={form}>
  <Form.Item name="otp" rules={[{ required: true, message: "Masukkan OTP" }]}>
    <InputOTP autoSubmit={form} inputType="numeric" />
  </Form.Item>
</Form> */}
    </>
  );
};

export default OtpRegister;
