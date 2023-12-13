import logo from "../../assets/img/Logo.png";
import { Form, Input, Select } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUserrr } from "../../redux/action/auth/authRegister";
import { toast } from "react-toastify";

export const Register = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [no_hp, setno_hp] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  const registerUser = async () => {
    const success = await dispatch(
      RegisterUserrr({
        name: name,
        email: email,
        no_hp: no_hp,
        password: password,
      })
    );
    if (success) {
      navigate("/otp");
    }
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
    <>
      <div className="login-section bg-slate-600 w-screen h-screen flex justify-center items-center">
        {/* section kiri */}
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

        {/* section kanan */}
        <div className="wrapper-box bg-white w-[90vw] h-fit rounded-r-xl rounded-l-xl drop-shadow-lg flex items-center justify-center desktop:w-[30vw] desktop:h-[70vh] desktop:rounded-l-none">
          <div className="content  flex flex-col items-center py-4 desktop:mt-0">
            <div className="logo flex flex-row justify-center items-center desktop:mt-4 ">
              <img src={logo} alt="" className="w-20 mt-3" />
            </div>
            <div className="form w-[70vw] desktop:w-[20vw]">
              <div className="">
                <h1 className="text-center text-[#116E63] font-serif font-semibold text-xl">Register</h1>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                >
                  <Form.Item
                    onChange={(e) => setname(e.target.value)}
                    id="name"
                    name="username"
                    label="Username"
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                    onChange={(e) => setemail(e.target.value)}
                    id="email"
                    name="email"
                    label="Email"
                    labelCol={{ span: 24 }}
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
                    hasFeedback
                  >
                    <Input prefix={<AiOutlineMail className="site-form-item-icon" />} placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    onChange={(e) => setno_hp(e.target.value)}
                    id="no_hp"
                    name="phone"
                    label="Phone Number"
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input addonBefore={prefixSelector} style={{ width: "100%" }} placeholder="Phone Number" />
                  </Form.Item>
                  <Form.Item
                    onChange={(e) => setpassword(e.target.value)}
                    id="password"
                    name="password"
                    label="Password"
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      {
                        min: 6,
                        message: "Password must have a minimum length of 6",
                      },
                      {
                        pattern: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"),
                        message: "Password must contain at least one lowercase letter, uppercase letter, number, and special character",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                  </Form.Item>
                  <div className="text-sm flex flex-row gap-1 font-medium text-gray-500 mt-6">
                    <p>Have an account?</p>
                    <button
                      className="text-[#116E63] "
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Login
                    </button>
                  </div>
                  <Form.Item>
                    <div className="button flex items-center justify-between mt-4 space-x-4">
                      <button
                        onClick={() => {
                          registerUser();
                        }}
                        htmlType="submit"
                        className="login-form-button bg-[#116E63] rounded-xl w-full h-12 text-white text-sm"
                      >
                        Register
                      </button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
