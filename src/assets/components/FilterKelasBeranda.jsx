import React, { useEffect, useState } from "react";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { getDatakategori } from "../../redux/action/kategoribelajarrr";
import getDataAll from "../../redux/action/getAll";

export const FilterKelasBeranda = ({ setFilteredCourses }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.kategori.kategori.categories);
  const courses = useSelector((state) => state.courseAll.coursesAll);
  // const [filterData, setFilterData] = useState(courses);
  // console.log(categories, "categories");
  // console.log(courses, "courses");

  useEffect(() => {
    // getkategoribelajarrrr();
    getCourses();
  }, []);

  // const getkategoribelajarrrr = () => {
  //   dispatch(getDatakategori());
  // };
  const getCourses = () => {
    dispatch(getDataAll());
  };

  // const handleBtn = (result) => {
  //   let filteredData = [];

  //    if (
  //     result === "All" ||
  //     result === "beginner" ||
  //     result === "intermmediate" ||
  //     result === "advanced"
  //   ) {
  //     filteredData = courses.filter((data) => {
  //       return (
  //         (result === "All") ||
  //         (result === "beginner" && data.course.level === "Beginner") ||
  //         (result === "intermmediate" &&
  //           data.course.level === "Intermediate") ||
  //         (result === "advanced" && data.course.level === "Advanced")
  //       );
  //     });
  //   }

  //   if (
  //     result === "JavaScript" ||
  //     result === "Python" ||
  //     result === "UI/UX Design" ||
  //     result === "Kotlin"
  //   ) {
  //     filteredData = courses.filter((data) => {
  //       return (
  //         (result === "JavaScript" && data.category === "JavaScript") ||
  //         (result === "Python" && data.category === "Python") ||
  //         (result === "UI/UX Design" && data.category === "UI/UX Design") ||
  //         (result === "Kotlin" && data.category === "Kotlin")
  //       );
  //     });
  //   }
  //   setFilteredCourses(filteredData);
  //   console.log(filteredData, "filter");
  // };

  // const handleBtn = (result) => {
  //   let filteredData = [];

  //   if (
  //     result === "All" ||
  //     result === "beginner" ||
  //     result === "intermmediate" ||
  //     result === "advanced"
  //   ) {
  //     filteredData = courses.filter((data) => {
  //       return (
  //         result === "All" ||
  //         (result === "beginner" && data.course.level === "Beginner") ||
  //         (result === "intermmediate" && data.course.level === "Intermediate") ||
  //         (result === "advanced" && data.course.level === "Advanced")
  //       );
  //     });
  //   }

  //   if (
  //     result === "JavaScript" ||
  //     result === "Python" ||
  //     result === "UI/UX Design" ||
  //     result === "Kotlin"
  //   ) {
  //     filteredData = courses.filter((data) => {
  //       return (
  //         (result === "JavaScript" && data.category === "JavaScript") ||
  //         (result === "Python" && data.category === "Python") ||
  //         (result === "UI/UX Design" && data.category === "UI/UX Design") ||
  //         (result === "Kotlin" && data.category === "Kotlin")
  //       );
  //     });
  //   }
  //   setFilteredCourses(filteredData);
  //   console.log(filteredData, "filter");
  // };

  // const handleBtn = (result) => {
  //   let filteredData = [];

  //   if (result === "All") {
  //     filteredData = courses;
  //   } else {
  //     filteredData = courses.filter((data) => {
  //       if (
  //         (result === "beginner" && data.course.level === "Beginner") ||
  //         (result === "intermediate" && data.course.level === "Intermediate") ||
  //         (result === "advanced" && data.course.level === "Advanced")
  //       ) {
  //         return true;
  //       }

  //       if (
  //         (result === "JavaScript" && data.category.name === "JavaScript") ||
  //         (result === "Python" && data.category.name === "Python") ||
  //         (result === "UI/UX Design" && data.category.name === "UI/UX Design") ||
  //         (result === "Kotlin" && data.category.name === "Kotlin")
  //       ) {
  //         return true;
  //       }

  //       return false;
  //     });
  //   }

  //   setFilteredCourses(filteredData);
  //   console.log(filteredData, "filter");
  // };

  // const handleBtn = (result) => {
  //   let filteredData = [];

  //   if (result === "All") {
  //     filteredData = courses;
  //   } else {
  //     filteredData = courses.filter((data) => {
  //       const isLevelMatch = (
  //         (result === "beginner" && data.course.level === "Beginner") ||
  //         (result === "intermediate" && data.course.level === "Intermediate") ||
  //         (result === "advanced" && data.course.level === "Advanced")
  //       );

  //       const isCategoryMatch = (
  //         (result === "JavaScript" && data.category.name === "JavaScript") ||
  //         (result === "Python" && data.category.name === "Python") ||
  //         (result === "UI/UX Design" && data.category.name === "UI/UX Design") ||
  //         (result === "Kotlin" && data.category.name === "Kotlin")
  //       );

  //       return isLevelMatch || isCategoryMatch;
  //     });
  //   }

  //   setFilteredCourses(filteredData);
  //   console.log(filteredData, "filter");
  // };

  const handleBtn = (result) => {
    let filteredData = [];

    if (result === "All") {
      filteredData = courses;
    } else {
      const levelChoices = ["beginner", "intermediate", "advanced"];
      const categoryChoices = [
        "JavaScript",
        "Python",
        "UI/UX Design",
        "Kotlin",
      ];

      filteredData = courses.filter((data) => {
        const isLevelMatch =
          levelChoices.includes(result.toLowerCase()) &&
          data.course.level.toLowerCase() === result.toLowerCase();

        const isCategoryMatch =
          categoryChoices.includes(result) && data.category.name === result;

        return isLevelMatch || isCategoryMatch;
      });
    }

    setFilteredCourses(filteredData);
    console.log(filteredData, "filter");
  };

  const handleReset = () => {
    setFilteredCourses({});
  };
  return (
    <div>
      <div className="px-5 space-y-5">
        <div className="rounded-lg bg-white px-0 desktop:p-5 space-y-4">
          <div>
            <span className="text-lg font-bold text-black hidden desktop:block">
              Filter
            </span>
            <div className="pl-1 py-2 space-y-2 text-xs">
              <CheckboxGroup>
                <Checkbox value="baru" id="new">
                  <span className="text-sm">Paling Baru</span>
                </Checkbox>
                <Checkbox value="populer" id="popular">
                  <span className="text-sm">Paling Populer</span>
                </Checkbox>
                <Checkbox value="promo" id="promo">
                  <span className="text-sm">Promo</span>
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>
          <div>
            <span className="text-lg font-bold text-black">Category</span>
            <div className="pl-1 py-2 space-y-2">
              <CheckboxGroup>
                <Checkbox
                  value="UI/UX Design"
                  id="UI/UX Design"
                  onClick={() => handleBtn("UI/UX Design")}
                >
                  <span className="text-sm">UI/UX Design</span>
                </Checkbox>
                <Checkbox
                  value="Python"
                  id="Python"
                  onClick={() => handleBtn("Python")}
                >
                  <span className="text-sm">Python</span>
                </Checkbox>
                <Checkbox
                  value="Kotlin"
                  id="Kotlin"
                  onClick={() => handleBtn("Kotlin")}
                >
                  <span className="text-sm">Kotlin</span>
                </Checkbox>
                <Checkbox
                  value="Javascript"
                  id="Javascript"
                  onClick={() => handleBtn("JavaScript")}
                >
                  <span className="text-sm">Javascript</span>
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>

          <div>
            <span className="text-lg font-bold text-black">
              Level Kesulitan
            </span>
            <div className="pl-1 py-2 space-y-2">
              <CheckboxGroup>
                <Checkbox
                  onClick={() => handleBtn("All")}
                  value="allLevel"
                  id="allLevel"
                >
                  <span className="text-sm">Semua Level</span>
                </Checkbox>
                <Checkbox
                  onClick={() => handleBtn("beginner")}
                  value="beginner"
                >
                  <span className="text-sm">Beginner Level</span>
                </Checkbox>
                <Checkbox
                  value="intermmediate"
                  id="intermmediate"
                  onClick={() => handleBtn("intermediate")}
                >
                  <span className="text-sm">Intermediate Level</span>
                </Checkbox>
                <Checkbox
                  value="advanced"
                  id="advanced"
                  onClick={() => handleBtn("advanced")}
                >
                  <span className="text-sm">Advanced level</span>
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>

          {/* kelas populer */}

          <button 
          onClick={()=>{handleReset()}}
          className="flex items-center h-10 text-white desktop:text-[#DB1B1B] text-md hover:opacity-70 flex justify-center w-full pt-2 desktop:pt-10 desktop:pb-5 bg-[#DB1B1B] desktop:bg-transparent rounded-md">
            Hapus Filter
          </button>
        </div>
      </div>
    </div>
  );
};
