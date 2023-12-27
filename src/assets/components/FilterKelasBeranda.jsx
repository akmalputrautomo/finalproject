import React, { useEffect, useState } from "react";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { getDatakategori } from "../../redux/action/kategoribelajarrr";
import getDataAll from "../../redux/action/getAll";

export const FilterKelasBeranda = ({ setFilteredCourses, dataCourses }) => {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState([]);
  const courses = useSelector((state) => state.courseAll.coursesAll);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    dispatch(getDataAll());
  };

  const sortByCreatedAtNewest = (courses) => {
    return courses.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };

  const sortByRatingAscending = (courses) => {
    return courses.slice().sort((a, b) => b.rating - a.rating);
  };

  // useEffect(() => {
  //   handleBtn();
  // }, [checkedItems]);

  // const handleBtn = (filterType) => {
  //   let filteredData = [...courses];

  //   // console.log(filteredData, "Data Courses");

  //   if (filterType === "baru") {
  //     const currentDate = new Date();
  //     const oneWeekAgo = new Date();
  //     oneWeekAgo.setDate(currentDate.getDate() - 7);

  //     filteredData = filteredData.filter((course) => {
  //       const courseCreatedAt = new Date(course.createdAt);
  //       return courseCreatedAt >= oneWeekAgo;
  //     });
  //     console.log(filterType, "Filter Type");
  //     console.log(filteredData, "Filter Data");
  //   }

  //   // if (filterType === "popular") {
  //   //   const sortedData = [...filteredData];
  //   //   sortedData.sort((a, b) => b.rating - a.rating);
  //   //   filteredData = sortedData;
  //   //   console.log(filteredData, "Sorted Data");
  //   // }

  //   if (filterType !== "All") {
  //     filteredData = filteredData.filter((data) => {
  //       const isLevelMatch = (filterType === "beginner" && data.level === "Beginner") || (filterType === "intermediate" && data.level === "Intermediate") || (filterType === "advanced" && data.level === "Advanced");

  //       const isCategoryMatch =
  //         (filterType === "JavaScript" && data.category.name === "JavaScript") ||
  //         (filterType === "PHP" && data.category.name === "PHP") ||
  //         (filterType === "UI/UX Design" && data.category.name === "UI/UX Design") ||
  //         (filterType === "Java" && data.category.name === "Java") ||
  //         (filterType === "iOS Development" && data.category.name === "iOS Development") ||
  //         (filterType === "Flutter" && data.category.name === "Flutter") ||
  //         (filterType === "Python" && data.category.name === "Python") ||
  //         (filterType === "Kotlin" && data.category.name === "Kotlin") ||
  //         (filterType === "PHP" && data.category.name === "PHP");

  //       const isPopular = if (filterType === "popular"){
  //         const sortedData = [...filteredData];
  //     sortedData.sort((a, b) => b.rating - a.rating);
  //     filteredData = sortedData;
  //       }

  //       return isLevelMatch || isCategoryMatch;
  //     });
  //   }
  //   // const reversedData = filteredData.slice().sort((a, b) => new Date(b.assignedAt) - new Date(a.assignedAt));

  //   // const latestData = getLatestData(filteredData);
  //   // console.log(latestData, "Latest Data");
  //   // setData(latestData);
  //   // const sortedData = getSortedData(filteredData, sortBy);
  //   // console.log(sortedData, "Sorted Data");
  //   setFilteredCourses(filteredData);
  //   console.log(filteredData, "filter");
  // };

  const handleBtn = (filterType) => {
    let filteredData = [...courses];

    // if (filterType === "baru") {
    //   const currentDate = new Date();
    //   const oneWeekAgo = new Date();
    //   oneWeekAgo.setDate(currentDate.getDate() - 7);

    //   filteredData = filteredData.filter((course) => {
    //     const courseCreatedAt = new Date(course.createdAt);
    //     return courseCreatedAt >= oneWeekAgo;
    //   });
    //   console.log(filterType, "Filter Type");
    //   console.log(filteredData, "Filter Data");
    // }

    if (filterType === "baru") {
      filteredData = sortByCreatedAtNewest(courses);
      console.log(filteredData, "Baruuuu");
    }

    if (filterType === "popular") {
      filteredData = sortByRatingAscending(courses);
      console.log(filteredData, "popular");
    }

    // if (filterType === "popular") {
    //   filteredData.slice().sort((a, b) => b.rating - a.rating);
    //   console.log(filterType, "Sorted Data");
    //   console.log(filteredData, "Sorted Data");
    // }

    if (filterType !== "All" && filterType !== "popular" && filterType !== "baru") {
      filteredData = filteredData.filter((data) => {
        const isLevelMatch = (filterType === "beginner" && data.level === "Beginner") || (filterType === "intermediate" && data.level === "Intermediate") || (filterType === "advanced" && data.level === "Advanced");

        const isCategoryMatch = ["JavaScript", "PHP", "UI/UX Design", "Java", "iOS Development", "Flutter", "Python", "Kotlin"].includes(filterType) && data.category.name === filterType;

        return isLevelMatch || isCategoryMatch;
      });
    }

    setFilteredCourses(filteredData);
    console.log(filteredData, "filter");
  };

  const handleCheckboxClick = (filterType) => {
    if (checkedItems.includes(filterType)) {
      setCheckedItems(checkedItems.filter((item) => item !== filterType));
    } else {
      setCheckedItems([...checkedItems, filterType]);
    }

    handleBtn(filterType);
  };
  // const handleBtn = (result) => {
  //   let filteredData = [];

  //   if (result === "All") {
  //     filteredData = courses;
  //   } else {
  //     const levelChoices = ["beginner", "intermediate", "advanced"];
  //     const categoryChoices = [
  //       "JavaScript",
  //       "Python",
  //       "UI/UX Design",
  //       "Kotlin",
  //     ];

  //     filteredData = courses.filter((data) => {
  //       const isLevelMatch =
  //         levelChoices.includes(result.toLowerCase()) &&
  //         data.course.level.toLowerCase() === result.toLowerCase();

  //       const isCategoryMatch =
  //         categoryChoices.includes(result) && data.category.name === result;

  //       return isLevelMatch || isCategoryMatch;
  //     });
  //   }

  //   setFilteredCourses(filteredData);
  //   console.log(filteredData, "filter");
  // };

  const resetCheckboxChecked = () => {
    setCheckedItems([]);
  };
  return (
    <div>
      <div className="px-5 space-y-5">
        <div className="rounded-lg bg-white px-0 desktop:p-5 space-y-4">
          <div>
            <span className="text-lg font-bold text-black hidden desktop:block">Filter</span>
            <div className="pl-1 py-2 space-y-2 text-xs">
              <CheckboxGroup>
                <Checkbox value="baru" id="new" onClick={() => handleCheckboxClick("baru")}>
                  <span className="text-sm">Paling Baru</span>
                </Checkbox>
                <Checkbox value="populer" id="popular" onClick={() => handleCheckboxClick("popular")}>
                  <span className="text-sm">Paling Populer</span>
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>
          <div>
            <span className="text-lg font-bold text-black">Category</span>
            <div className="pl-1 py-2 space-y-2">
              <CheckboxGroup>
                <Checkbox value="UI/UX Design" id="UI/UX Design" checked={checkedItems.includes("UI/UX Design")} onClick={() => handleCheckboxClick("UI/UX Design")}>
                  <span className="text-sm">UI/UX Design</span>
                </Checkbox>
                <Checkbox value="Python" id="Python" checked={checkedItems.includes("Python")} onClick={() => handleCheckboxClick("Python")}>
                  <span className="text-sm">Python</span>
                </Checkbox>
                <Checkbox value="Kotlin" id="Kotlin" checked={checkedItems.includes("promo")} onClick={() => handleCheckboxClick("Kotlin")}>
                  <span className="text-sm">Kotlin</span>
                </Checkbox>
                <Checkbox value="Javascript" id="Javascript" checked={checkedItems.includes("promo")} onClick={() => handleCheckboxClick("JavaScript")}>
                  <span className="text-sm">Javascript</span>
                </Checkbox>
                <Checkbox value="Java" id="Java" onClick={() => handleCheckboxClick("Java")}>
                  <span className="text-sm">Java</span>
                </Checkbox>
                <Checkbox value="PHP" id="PHP" onClick={() => handleCheckboxClick("PHP")}>
                  <span className="text-sm">PHP</span>
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>

          <div>
            <span className="text-lg font-bold text-black">Level Kesulitan</span>
            <div className="pl-1 py-2 space-y-2">
              <CheckboxGroup>
                <Checkbox onClick={() => handleCheckboxClick("All")} value="allLevel" id="allLevel">
                  <span className="text-sm">Semua Level</span>
                </Checkbox>
                <Checkbox onClick={() => handleCheckboxClick("beginner")} value="beginner">
                  <span className="text-sm">Beginner Level</span>
                </Checkbox>
                <Checkbox value="intermmediate" id="intermmediate" onClick={() => handleCheckboxClick("intermediate")}>
                  <span className="text-sm">Intermediate Level</span>
                </Checkbox>
                <Checkbox value="advanced" id="advanced" onClick={() => handleCheckboxClick("advanced")}>
                  <span className="text-sm">Advanced level</span>
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>

          {/* kelas populer */}

          <button
            onClick={() => {
              resetCheckboxChecked();
            }}
            className="flex items-center h-10 text-white desktop:text-[#DB1B1B] text-md hover:opacity-70 flex justify-center w-full pt-2 desktop:pt-10 desktop:pb-5 bg-[#DB1B1B] desktop:bg-transparent rounded-md"
          >
            Hapus Filter
          </button>
        </div>
      </div>
    </div>
  );
};
