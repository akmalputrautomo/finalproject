import React, { useState } from "react";
import logo from "../img/Logo.png";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { useNavigate } from "react-router";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { useDispatch } from "react-redux";
import { LogOut } from "../../redux/action/auth/authLoginUser";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = CookieStorage.get(CookieKeys.AuthToken);
  console.log(token, "Ini Token");

  return (
    <div>
      <div className="bg-[#F8F8F8] flex justify-between p-4">
        <img className="w-[10rem] h-[3rem]" src={logo} />
        <form className="relative flex w-1/2 ">
          <input
            placeholder="cari kursus terbaik...."
            className="  border border-black px-3 rounded-md w-full"
            type="text"
          ></input>
          <button type="submit" className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 absolute right-3 cursor-pointer "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form>
        {/* <input className="w-[25rem] border rounded-md" placeholder="cari kursus terbaik"></input> */}
        {/* <button
          className="bg-[#116E63] text-white w-[6rem] rounded-md"
          onClick={() => {
            navigate("/login");
          }}
        >
          <i class="fa-solid fa-arrow-right-to-bracket "> Masuk</i>
        </button> */}
        <div className="me-5">
          {token && token.length ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    dispatch(LogOut());
                  }}
                  key="logout"
                  color="danger"
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <button
              className="bg-[#116E63] text-white w-[6rem] h-[3rem] rounded-md"
              onClick={() => {
                navigate("/login");
              }}
            >
              <i class="fa-solid fa-arrow-right-to-bracket "> Masuk</i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
