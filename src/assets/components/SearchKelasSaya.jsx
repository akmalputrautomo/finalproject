import React, { useEffect } from "react";
import search from "../img/search.png";
import { Button } from "@nextui-org/button";
import { useDispatch } from "react-redux";
import getDataAll from "../../redux/action/getAll";
import getDataCourseMe from "../../redux/action/getCourseMe";

export const SearchKelasSaya = ({ setFilteredCourses, dataCoursesMe, setSearchInput }) => {
  const dispatch = useDispatch();

  // console.log(dataCoursesMe, "SearchKelasSaya")

  useEffect(() => {
    dispatch(getDataCourseMe());
  }, [dispatch]);

  const handleBtn = (tipe) => {
    let filteredData = [];

    if (tipe === "All") {
      filteredData = dataCoursesMe;
    } else if (tipe === "Premium") {
      filteredData = dataCoursesMe.filter((item) => item.price !== 0);
    } else if (tipe === "Free") {
      filteredData = dataCoursesMe.filter((item) => item.price === 0);
    }
    setFilteredCourses(filteredData);
    console.log(filteredData, "filterNibos");
  };

  // const handleSearch = (e) => {
  //   setSearchInput(e.target.value);
  // };
  return (
    <div className="py-5 px-[1rem] desktop:px-16">
      {/* search */}
      <div className="flex justify-end relative w-[100%]">
        <div className="flex items-center w-full desktop:w-[30%]">
          <input className="flex border border-2 border-[#116E63] rounded-full px-4 h-11 focus:outline-none w-full" placeholder="Cari Kelas..." />
          <img src={search} className="flex right-3 w-7 h-7 absolute cursor-pointer" alt="Search Icon" />
        </div>
      </div>

      {/* button filter */}
      <div className="flex justify-between py-6 gap-3 desktop:gap-6">
        <Button onClick={() => handleBtn("All")} className="bg-white w-[25%] focus:bg-[#116E63] focus:text-white">
          All
        </Button>
        <Button onClick={() => handleBtn("Premium")} className="bg-white w-[40%] focus:bg-[#116E63] focus:text-white">
          In Progress
        </Button>
        <Button onClick={() => handleBtn("Free")} className="bg-white w-[35%] focus:bg-[#116E63] focus:text-white">
          Selesai
        </Button>
      </div>
    </div>
  );
};
