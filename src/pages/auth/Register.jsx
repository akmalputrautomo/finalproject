import logo from "../../assets/img/Logo.png";
import { Form, Input, Select } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  // const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // const showPass = () => {
  //   setShowPassword(!showPassword);
  // };

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
        <div className="wrapper-box bg-white w-[90vw] lg:h-[70vh] h-fit lg:w-[30vw] rounded-r-xl rounded-l-xl lg:rounded-l-none  drop-shadow-lg flex items-center  justify-center">
          <div className="content  flex flex-col items-center py-4 lg:mt-0">
            <div className="logo flex flex-row justify-center items-center lg:mt-4 ">
              <img src={logo} alt="" className="w-20 mt-3" />
            </div>
            <div className="form w-[70vw] lg:w-[20vw]">
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
                  <p>Name</p>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                  </Form.Item>
                  <p>Email</p>
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
                    <Input prefix={<AiOutlineMail className="site-form-item-icon" />} placeholder="Email" />
                  </Form.Item>
                  <p>Nomor Telepone</p>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input addonBefore={prefixSelector} style={{ width: "100%" }} placeholder="Phone Number" />
                  </Form.Item>
                  <p>Password</p>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                  </Form.Item>
                  <div className="text-sm flex flex-row gap-1 font-medium text-gray-500 mt-6">
                    <p>Have account?</p>
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
                    <div className="button flex items-center flex justify-between mt-4 space-x-4">
                      <button htmlType="submit" className="login-form-button bg-[#116E63] rounded-xl w-full h-12 text-white text-sm">
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

    // <div>
    //   {/* section kiri */}
    //   <div className="bg-gray-100 h-screen flex items-center justify-center w-full p-10">
    //     <div className="bg-white px-[8rem] rounded shadow-md w-2/4 flex flex-col justify-center h-full">
    //       <h1 className="text-2xl font-bold mb-8 text-[#116E63]">Daftar</h1>

    //       <div className="mb-4">
    //         <label className=" text-gray-600">Nama</label>
    //         <input type="text" id="nama" placeholder="Nama Lengkap" className="mt-1 p-2 w-full border rounded-xl" />
    //       </div>

    //       <div className="mb-4">
    //         <label className=" text-gray-600">Email</label>
    //         <input type="email" id="email" placeholder="Contoh: ganteng123@gmail.com" className="mt-1 p-2 w-full border rounded-xl" />
    //       </div>

    //       <div className="mb-4">
    //         <label className=" text-gray-600">Nomor Telepon</label>
    //         <input type="tel" id="telepon" placeholder="+62" className="mt-1 p-2 w-full border rounded-xl" />
    //       </div>

    //       <div className="relative">
    //         <label className=" text-gray-600">Buat Password</label>
    //         <input id="password" type={showPassword ? "text" : "password"} placeholder="Password" className="w-full p-2 mb-2 border rounded"></input>
    //         <span className="absolute right-3 top-8 cursor-pointer" onClick={showPass}>
    //           {showPassword ? <i class="fa-regular fa-eye"></i> : <i class="fa-regular fa-eye-slash"></i>}
    //         </span>
    //       </div>

    //       <button type="button" className="bg-[#116E63] text-white px-4 py-2 w-full rounded hover:bg-green-800">
    //         Daftar
    //       </button>

    //       <div className="flex mt-4 justify-center">
    //         <h3 className="mr-2">Sudah punya akun?</h3>
    //         <button className="text-[#116E63] hover:underline rounded-xl">Masuk di sini</button>
    //       </div>
    //     </div>

    //     {/* section kanan */}
    //     <div className="bg-[#F8F8F8] w-2/4 h-full flex justify-center items-center p-10">
    //       <img src={logo} className="w-[25rem] h-[8rem]"></img>
    //     </div>
    //   </div>
    // </div>
  );
};
