import React, { useEffect, useState } from "react";
import logo from "../../assets/img/Logo.png";
import google from "../../assets/img/google.png";
import facebook from "../../assets/img/facebook.png";
import "react-toastify/dist/ReactToastify.css";
import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { authLoginUser } from "../../redux/action/auth/authLoginUser";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { CookieKeys, CookieStorage } from "../../utils/cookies";

export const Login = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [getErrMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();

  const handleloginUser = () => {
    dispatch(
      authLoginUser({
        email: Email,
        password: Password,
      })
    )
      .then((result) => {
        console.log(result, "result");
        if (result.data.data.users.is_admin === false) {
          navigate("/");
        } else if (result.data.data.users.is_admin === true) {
          navigate("/HomeAdm");
        }
      })
      .catch((err) => {
        if (err.response.status >= 400 && err.response.status <= 500) {
          setErrMsg(err.response.data.err);
        }
      });
  };

  useEffect(() => {
    if (getErrMsg) {
      toast.error(getErrMsg, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [getErrMsg]);

  // const Token = CookieStorage.get(CookieKeys.AuthToken);
  // useEffect(() => {
  //   if (Token) {
  //     toast.success("Register Berhasil, Silahkan Login!", {
  //       position: "top-right",
  //       autoClose: 3500,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // }, [Token]);

  const register = () => {
    navigate("/register");
  };

  const forgotpswd = () => {
    navigate("/forgetpass");
  };

  return (
    <div className="login-section bg-slate-600 w-screen h-screen flex justify-center items-center">
      <div className="fixed">
        <ToastContainer position="top-right" autoClose={3500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      </div>
      <div className="side bg-[#F8F8F8] w-[90vw] h-[70vh] rounded-tl-xl rounded-bl-xl shadow-xl justify-center flex-col items-center desktop:flex hidden desktop:w-[30vw]">
        <img src={logo} alt="" className="w-40 mt-3" />
        <h1 className="text-2xl text-white font-semibold font-serif">
          <span className="text-[#F2A227]">Learn</span>
          <span className="text-[#116E63]">Every</span>
          <span className="text-[#F2A227]">where</span>
          <span className="text-[#116E63]">Every</span>
          <span className="text-[#F2A227]">time</span>
        </h1>
      </div>
      <div className="wrapper-box bg-white w-[90vw] h-fit rounded-r-xl rounded-l-xl drop-shadow-lg flex items-center justify-center desktop:rounded-l-none desktop:h-[70vh] desktop:w-[30vw]">
        <div className="content flex flex-col items-center py-4 desktop:mt-0">
          <div className="logo flex flex-row justify-center items-center desktop:mt-4 ">
            <img src={logo} alt="" className="w-20 mt-3" />
          </div>

          <div className="form w-[70vw] desktop:w-[20vw]">
            <div className="">
              <h1 className="text-center text-[#116E63] font-serif font-semibold text-xl">Login</h1>
              <Form
                name="normal_login"
                className="login-form pt-3"
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  name="username"
                  label="Username"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username",
                    },
                  ]}
                  hasFeedback
                >
                  <Input className={`focus:outline-none focus:ring-2 focus:ring-green-800`} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                </Form.Item>
                <div className="mt-1">
                  <p className="text-sm font-medium text-[#116E63] cursor-pointer text-end" onClick={forgotpswd}>
                    Forgot Password?
                  </p>
                </div>
                <div className="text-sm flex flex-row font-medium text-gray-500 mt-3 gap-1 cursor-pointer">
                  Don't have an account?{" "}
                  <p className="text-[#116E63]  " onClick={register}>
                    Regist here
                  </p>
                </div>

                <div className="button  items-center  flex flex-col mt-4 ">
                  <button onClick={handleloginUser} htmlType="submit" className="login-form-button bg-[#116E63] w-full h-12 rounded-xl text-white text-sm">
                    Log in
                  </button>

                  {/* Oauth Google & Facebook */}
                  <div className="flex items-center gap-4">
                    <hr className="w-full bg-[#116E63]" />
                    <div>OR</div>
                    <hr className="w-full bg-green-800" />
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-center">
                    <div className="flex items-center justify-center shadow-lg bg-slate-800 hover:bg-[#116E63] border-2 border-inherit rounded-2xl w-[50px] h-[50px] cursor-pointer">
                      <div>
                        <img className="w-[20px] h-[20px]" src={google} alt="google" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center shadow-lg bg-slate-800 hover:bg-[#116E63] border-2 border-inherit rounded-2xl w-[50px] h-[50px] cursor-pointer">
                      <div>
                        <img className="w-[28px] h-[28px]" src={facebook} alt="facebook" />
                      </div>
                    </div>
                  </div>
                  {/* Oauth End */}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
