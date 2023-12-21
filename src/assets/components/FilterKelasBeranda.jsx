import React, { useEffect, useState } from "react";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { getDatakategori } from "../../redux/action/kategoribelajarrr";
import getDataAll from "../../redux/action/getAll";

export const FilterKelasBeranda = () => {
  // const [id, setId] = useState(1);
  const dispatch = useDispatch();
  // const [filters, setFilters] = useState(() => {
  //   const savedFilters = localStorage.getItem("savedFilters");
  //   return savedFilters ? JSON.parse(savedFilters) : {};
  // });

  const categories = useSelector((state) => state.kategori.kategori.categories);
  const courses = useSelector((state) => state.courseAll.coursesAll);
  const [filterData, setFilterData] = useState(courses);
  console.log(categories, "categories");
  console.log(courses, "courses");

  useEffect(() => {
    getkategoribelajarrrr();
    getCourses();
  }, []);

  const getkategoribelajarrrr = () => {
    dispatch(getDatakategori());
  };
  const getCourses = () => {
    dispatch(getDataAll());
  };

  const handleBtn = (tipe) => {
    let filteredData = []
  
    if (tipe === 'All') {
      filteredData = courses
    } else if (tipe === 'Beginner') {
      filteredData = courses.filter((item) => item.course.level === 'Beginner')
    } else if (tipe === 'Free') {
      filteredData = courses.filter((item) => item.course.type === 'isFree')
    }
    setFilterData(filterData)
    console.log(filterData, "filter");
  }

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

          {/* <div>
            <span className="text-lg font-bold text-black">Kategori</span>
            <div className="pl-1 py-2 space-y-2">
              {belajar &&
                belajar.map((course) => (
                  <CheckboxGroup key={course.id}>
                    <Checkbox
                      value="ui/ux"
                      onClick={() => {
                        setId(course.id);
                      }}
                    >
                      <span className="text-sm">{course.name}</span>
                    </Checkbox>
                  </CheckboxGroup>
                ))}
            </div>
          </div> */}

          <div>
            <span className="text-lg font-bold text-black">
              Category
            </span>
            <div className="pl-1 py-2 space-y-2">
              <CheckboxGroup>
                <Checkbox value="allLevel" id="allLevel">
                  <span className="text-sm">UI/UX Design</span>
                </Checkbox>
                <Checkbox value="beginner" id="beginner">
                  <span className="text-sm">Python</span>
                </Checkbox>
                <Checkbox value="intermmediate" id="intermmediate">
                  <span className="text-sm">Kotlin</span>
                </Checkbox>
                <Checkbox value="advanced" id="advanced">
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
                <Checkbox onClick={() => handleBtn('All')} value="allLevel" id="allLevel">
                  <span className="text-sm">Semua Level</span>
                </Checkbox>
                <Checkbox onClick={() => handleBtn('Beginner')} value="beginner" id="beginner">
                  <span className="text-sm">Beginner Level</span>
                </Checkbox>
                <Checkbox value="intermmediate" id="intermmediate">
                  <span className="text-sm">Intermediate Level</span>
                </Checkbox>
                <Checkbox value="advanced" id="advanced">
                  <span className="text-sm">Advanced level</span>
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>

          {/* kelas populer */}

          <button className="flex items-center h-10 text-white desktop:text-[#DB1B1B] text-md hover:opacity-70 flex justify-center w-full pt-2 desktop:pt-10 desktop:pb-5 bg-[#DB1B1B] desktop:bg-transparent rounded-md">
            Hapus Filter
          </button>
        </div>
      </div>
    </div>
  );
};
