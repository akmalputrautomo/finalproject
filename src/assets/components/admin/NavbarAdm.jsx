import React from "react";
import { SearchBar } from "../../components/admin/elements/searchBar";

export const NavbarAdm = () => {
  return (
    <div className="flex flex-row justify-between bg-[#E7F0EF] p-4 ps-8 pe-9">
      <div className="flex items-center ps-[50px]">
        <button className="text-center text-[#116E63] font-serif font-semibold text-xl">
          Hi, Admin!
        </button>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavbarAdm;
