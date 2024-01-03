import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getDataCourseMe from "../../redux/action/getCourseMe";

export const FilterBerandaSaya = ({ setFilteredCourses }) => {
  // const dispatch = useDispatch();
  // const [checkedItems, setCheckedItems] = useState([]);
  const dataCoursesMeAll = useSelector((state) => state.CourseMe.coursesMe.result);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    dispatch(getDataCourseMe());
  };

  // const sortByCreatedAtNewest = (dataCoursesMeAll) => {
  //   return dataCoursesMeAll.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  // };

  // const sortByRatingAscending = (dataCoursesMeAll) => {
  //   return dataCoursesMeAll.slice().sort((a, b) => b.rating - a.rating);
  // };

  // const handleBtn = (filterType) => {
  //   let filteredData = [...dataCoursesMeAll];

  //   if (filterType === "baru") {
  //     filteredData = sortByCreatedAtNewest(dataCoursesMeAll);
  //     // console.log(filteredData, "Baruuuu");
  //   }

  //   if (filterType === "popular") {
  //     filteredData = sortByRatingAscending(dataCoursesMeAll);
  //     // console.log(filteredData, "popular");
  //   }

  //   if (filterType !== "All" && filterType !== "popular" && filterType !== "baru") {
  //     filteredData = filteredData.filter((data) => {
  //       const isLevelMatch = (filterType === "beginner" && data.level === "Beginner") || (filterType === "intermediate" && data.level === "Intermediate") || (filterType === "advanced" && data.level === "Advanced");

  //       const isCategoryMatch = ["JavaScript", "PHP", "UI/UX Design", "Java", "iOS Development", "Flutter", "Python", "Kotlin"].includes(filterType) && data.category.name === filterType;

  //       return isLevelMatch || isCategoryMatch;
  //     });
  //   }

  //   setFilteredCourses(filteredData);
  //   // console.log(filteredData, "filter");
  // };

  // const handleCheckboxClick = (filterType) => {
  //   // if (checkedItems.includes(filterType)) {
  //   //   setCheckedItems(checkedItems.filter((item) => item !== filterType));
  //   // } else {
  //   //   setCheckedItems([...checkedItems, filterType]);
  //   // }

  //   const updatedCheckedItems = checkedItems.includes(filterType) ? checkedItems.filter((item) => item !== filterType) : [...checkedItems, filterType];

  //   setCheckedItems(updatedCheckedItems);
  //   handleBtn(filterType);
  // };

  // const resetCheckboxChecked = () => {
  //   setCheckedItems([]);
  //   handleBtn();
  // };

  const dispatch = useDispatch();
  const [checkedFilters, setCheckedFilters] = useState({
    filter: [],
    category: [],
    level: [],
  });
  // const courses = useSelector((state) => state.courseAll.coursesAll);

  // useEffect(() => {
  //   getCourses();
  // }, []);

  // const getCourses = () => {
  //   dispatch(getDataAll());
  // };

  const sortByCreatedAtNewest = (dataCoursesMeAll) =>
    dataCoursesMeAll
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const sortByRatingAscending = (dataCoursesMeAll) =>
    dataCoursesMeAll.slice().sort((a, b) => b.rating - a.rating);

  const applyFilters = () => {
    let filteredData = [...dataCoursesMeAll];

    checkedFilters.filter.forEach((filterType) => {
      if (filterType === "baru") {
        filteredData = sortByCreatedAtNewest(filteredData);
      }

      if (filterType === "populer") {
        filteredData = sortByRatingAscending(filteredData);
      }
    });

    if (checkedFilters.category.length > 0) {
      filteredData = filteredData.filter((data) =>
        checkedFilters.category.includes(data.category.name)
      );
    }

    if (checkedFilters.level.length > 0) {
      filteredData = filteredData.filter((data) =>
        checkedFilters.level.includes(data.level)
      );
    }

    setFilteredCourses(filteredData);
    console.log(filteredData, "filter");
  };

  const handleCheckboxClick = (type, value) => {
    setCheckedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      const index = updatedFilters[type].indexOf(value);

      if (index !== -1) {
        updatedFilters[type].splice(index, 1);
      } else {
        updatedFilters[type].push(value);
      }

      return updatedFilters;
    });

    applyFilters();
  };

  const resetCheckboxChecked = () => {
    setCheckedFilters({ filter: [], category: [], level: [] });
    applyFilters();
  };
  return (
    // <div>
    //   <div className="px-5 space-y-5">
    //     <div className="rounded-lg bg-white px-0 desktop:p-5 space-y-4">
    //       <div>
    //         <span className="text-lg font-bold text-black hidden desktop:block">Filter</span>
    //         <div className="pl-1 py-2 space-y-2 text-xs">
    //           <CheckboxGroup>
    //             <Checkbox value="baru" id="new" onClick={() => handleCheckboxClick("baru")}>
    //               <span className="text-sm">Paling Baru</span>
    //             </Checkbox>
    //             <Checkbox value="populer" id="popular" onClick={() => handleCheckboxClick("popular")}>
    //               <span className="text-sm">Paling Populer</span>
    //             </Checkbox>
    //           </CheckboxGroup>
    //         </div>
    //       </div>
    //       <div>
    //         <span className="text-lg font-bold text-black">Category</span>
    //         <div className="pl-1 py-2 space-y-2">
    //           <CheckboxGroup>
    //             <Checkbox value="UI/UX Design" id="UI/UX Design" checked={checkedItems.includes("UI/UX Design")} onClick={() => handleCheckboxClick("UI/UX Design")}>
    //               <span className="text-sm">UI/UX Design</span>
    //             </Checkbox>
    //             <Checkbox value="Python" id="Python" checked={checkedItems.includes("Python")} onClick={() => handleCheckboxClick("Python")}>
    //               <span className="text-sm">Python</span>
    //             </Checkbox>
    //             <Checkbox value="Kotlin" id="Kotlin" checked={checkedItems.includes("promo")} onClick={() => handleCheckboxClick("Kotlin")}>
    //               <span className="text-sm">Kotlin</span>
    //             </Checkbox>
    //             <Checkbox value="Javascript" id="Javascript" checked={checkedItems.includes("promo")} onClick={() => handleCheckboxClick("JavaScript")}>
    //               <span className="text-sm">Javascript</span>
    //             </Checkbox>
    //             <Checkbox value="Java" id="Java" onClick={() => handleCheckboxClick("Java")}>
    //               <span className="text-sm">Java</span>
    //             </Checkbox>
    //             <Checkbox value="PHP" id="PHP" onClick={() => handleCheckboxClick("PHP")}>
    //               <span className="text-sm">PHP</span>
    //             </Checkbox>
    //           </CheckboxGroup>
    //         </div>
    //       </div>

    //       <div>
    //         <span className="text-lg font-bold text-black">Level Kesulitan</span>
    //         <div className="pl-1 py-2 space-y-2">
    //           <CheckboxGroup>
    //             <Checkbox onClick={() => handleCheckboxClick("All")} value="allLevel" id="allLevel">
    //               <span className="text-sm">Semua Level</span>
    //             </Checkbox>
    //             <Checkbox onClick={() => handleCheckboxClick("beginner")} value="beginner">
    //               <span className="text-sm">Beginner Level</span>
    //             </Checkbox>
    //             <Checkbox value="intermmediate" id="intermmediate" onClick={() => handleCheckboxClick("intermediate")}>
    //               <span className="text-sm">Intermediate Level</span>
    //             </Checkbox>
    //             <Checkbox value="advanced" id="advanced" onClick={() => handleCheckboxClick("advanced")}>
    //               <span className="text-sm">Advanced level</span>
    //             </Checkbox>
    //           </CheckboxGroup>
    //         </div>
    //       </div>

    //       {/* kelas populer */}

    //       <button
    //         onClick={() => {
    //           resetCheckboxChecked();
    //         }}
    //         className="flex items-center h-10 text-white desktop:text-[#DB1B1B] text-md hover:opacity-70 flex justify-center w-full pt-2 desktop:pt-10 desktop:pb-5 bg-[#DB1B1B] desktop:bg-transparent rounded-md"
    //       >
    //         Hapus Filter
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="px-5 space-y-5">
        <div className="rounded-lg bg-white px-0 desktop:p-5 space-y-4">
          {/* Filter Section */}
          <div>
            <span className="text-lg font-bold text-black hidden desktop:block">
              Filter
            </span>
            <div className="pl-1 py-2 space-y-2 text-xs">
              <CheckboxGroup>
                <Checkbox
                  value="baru"
                  id="new"
                  checked={checkedFilters.filter.includes("baru")}
                  onClick={() => handleCheckboxClick("filter", "baru")}
                >
                  <span className="text-sm">Paling Baru</span>
                </Checkbox>
                <Checkbox
                  value="populer"
                  id="popular"
                  checked={checkedFilters.filter.includes("populer")}
                  onClick={() => handleCheckboxClick("filter", "populer")}
                >
                  <span className="text-sm">Paling Populer</span>
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>

          {/* Category Section */}
          <div>
            <span className="text-lg font-bold text-black">Category</span>
            <div className="pl-1 py-2 space-y-2">
              <CheckboxGroup>
                {[
                  "UI/UX Design",
                  "Python",
                  "Kotlin",
                  "JavaScript",
                  "Java",
                  "PHP",
                  "Flutter",
                  "iOS Development",
                  "HTML & CSS",
                ].map((category) => (
                  <Checkbox
                    key={category}
                    value={category}
                    id={category}
                    checked={checkedFilters.category.includes(category)}
                    onClick={() => handleCheckboxClick("category", category)}
                  >
                    <span className="text-sm">{category}</span>
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </div>
          </div>

          {/* Level Section */}
          <div>
            <span className="text-lg font-bold text-black">
              Level Kesulitan
            </span>
            <div className="pl-1 py-2 space-y-2">
              <CheckboxGroup>
                {["All", "Beginner", "Intermediate", "Advanced"].map(
                  (level) => (
                    <Checkbox
                      key={level}
                      checked={checkedFilters.level.includes(level)}
                      onClick={() => handleCheckboxClick("level", level)}
                      value={level}
                      id={level}
                    >
                      <span className="text-sm">
                        {level === "All" ? "Semua Level" : `${level} Level`}
                      </span>
                    </Checkbox>
                  )
                )}
              </CheckboxGroup>
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetCheckboxChecked}
            className="flex items-center h-10 text-white desktop:text-[#DB1B1B] text-md hover:opacity-70 flex justify-center w-full pt-2 desktop:pt-10 desktop:pb-5 bg-[#DB1B1B] desktop:bg-transparent rounded-md"
          >
            Hapus Filter
          </button>
        </div>
      </div>
    </div>
  );
};
