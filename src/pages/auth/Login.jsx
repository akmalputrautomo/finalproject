import React, { useState } from "react";
import logo from "../../assets/img/Logo.png";
import google from "../../assets/img/google.png";
import facebook from "../../assets/img/facebook.png";
import { Form, Input, Select } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { AiOutlineMail } from "react-icons/ai";

export const Login = () => {
  const [regist, setRegist] = useState();
  const register = () => {
    setRegist(true);
  };
  const { Option } = Select;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="62">+62</Option>
        <Option value="12">+12</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="login-section bg-slate-600 w-screen h-screen flex justify-center items-center">
      <div className="side bg-[#F8F8F8] w-[90vw] h-[70vh] lg:w-[30vw] rounded-tl-xl rounded-bl-xl shadow-xl lg:flex hidden justify-center flex-col items-center">
        <img src={logo} alt="" className="w-40 mt-3" />
        <h1 className="text-2xl text-white font-semibold font-serif">
          <span className="text-[#F2A227]">Learn</span>{" "}
          <span className="text-[#116E63]">Every</span>
          <span className="text-[#F2A227]">where</span>,{" "}
          <span className="text-[#116E63]">Every</span>
          <span className="text-[#F2A227]">time</span>
        </h1>
      </div>
      <div className="wrapper-box bg-white w-[90vw] lg:h-[70vh] h-fit lg:w-[30vw] rounded-r-xl rounded-l-xl lg:rounded-l-none  drop-shadow-lg flex items-center  justify-center">
        <div className="content  flex flex-col items-center py-4 lg:mt-0">
          <div className="logo flex flex-row justify-center items-center lg:mt-4 ">
            <img src={logo} alt="" className="w-20 mt-3" />
          </div>

          <div className="form w-[70vw] lg:w-[20vw]">
            {regist ? (
              // Regist Section
              <div className="">
                <h1 className="text-center text-[#116E63] font-serif font-semibold text-xl">Register</h1>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  // onFinish={onRegist}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<AiOutlineMail className="site-form-item-icon" />}
                      placeholder="Email"
                    />
                  </Form.Item>

                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input
                      addonBefore={prefixSelector}
                      style={{ width: "100%" }}
                      placeholder="Phone Number"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Password"
                    />
                  </Form.Item>
                  <div className="text-sm flex flex-row gap-1 font-medium text-gray-500 mt-6">
                    Have Account?{" "}
                    <p
                      className="text-[#116E63] hover:underline dark:text-blue-500 cursor-pointer"
                      onClick={() => setRegist(false)}
                    >
                      Login
                    </p>
                  </div>
                  <Form.Item>
                    <div className="button flex items-center flex justify-between mt-4 space-x-4">
                      <button
                        htmlType="submit"
                        className="login-form-button bg-[#116E63] rounded-xl w-full h-12 text-white text-sm"
                      >
                        Register
                      </button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            ) : (
              // Login Section
              <div className="">
                <h1 className="text-center text-[#116E63] font-serif font-semibold text-xl">Login</h1>
                <Form
                  name="normal_login"
                  className="login-form pt-3"
                  initialValues={{
                    remember: true,
                  }}
                  // onFinish={onLogin}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username",
                      },
                    ]}
                  >
                    <Input
                      className={`focus:outline-none focus:ring-2 focus:ring-green-800`}
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Password"
                    />
                  </Form.Item>
                  <div className="mt-1">
                    <p
                      className="text-sm font-medium text-[#116E63] cursor-pointer text-end"
                      // onClick={forgotpswd}
                    >
                      Forgot Password?
                    </p>
                  </div>
                  <div className="text-sm flex flex-row font-medium text-gray-500 mt-3 gap-1 cursor-pointer">
                    Don't have an account?{" "}
                    <p
                      className="text-[#116E63] hover:underline dark:text-blue-500 "
                      onClick={register}
                    >
                      Regist here
                    </p>
                  </div>

                  <div className="button  items-center  flex flex-col mt-4 ">
                    <button
                      htmlType="submit"
                      className="login-form-button bg-[#116E63] w-full h-12 rounded-xl text-white text-sm"
                    >
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
                          <img
                            className="w-[20px] h-[20px]"
                            src={google}
                            alt="google"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-center shadow-lg bg-slate-800 hover:bg-[#116E63] border-2 border-inherit rounded-2xl w-[50px] h-[50px] cursor-pointer">
                        <div>
                          <img
                            className="w-[28px] h-[28px]"
                            src={facebook}
                            alt="facebook"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Oauth End */}
                  </div>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
