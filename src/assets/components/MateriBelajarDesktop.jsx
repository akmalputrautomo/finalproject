import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, Progress, Tab, Tabs } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
// import PostUpdateIsDone from "../redux/reducer/PostUpdateIsDone";
import getDataDetail from "../../redux/action/getDetail";

export const MateriBelajarDesktop = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [id, setId] = useState(1);

  useEffect(() => {
    dispatch(getDataDetail(params.courseId));
  }, [dispatch, params.courseId]);

  // useEffect(() => {
  //   dispatch(PostUpdateIsDone(id))
  // }, [dispatch, id]);

  const dataDetail = useSelector((state) => state.courseDetail.coursesDetail);
//   console.log(dataDetail, "Materi");

//   console.log(params, "params");

  const totalNilai =
    dataDetail &&
    dataDetail.chapter[0] &&
    dataDetail.chapter[0].lessons.reduce(
      (total, objek) => total + objek.duration,
      0
    );
  const totalNilai2 =
    dataDetail &&
    dataDetail.chapter[1] &&
    dataDetail.chapter[1].lessons.reduce(
      (total, objek) => total + objek.duration,
      0
    );

  const [activeVideo, setActiveVideo] = useState(null);

  const changeVideo = (newVideoUrl) => {
    setActiveVideo(newVideoUrl);
  };

  return (
    <div className=" mobile:hidden desktop:block desktop:ml-4  desktop:w-3/4 mobile:full flex justify-center">
      <div className="bg-white  desktop:w-5/6 mobile:w-full h-fit py-6 rounded-3xl shadow-lg ">
        <div className="flex h-full  justify-center content-center items-center ">
          <div className=" space-y-4 w-full mx-6 ">
            {/* Materi Belajar */}
            <div className="flex justify-between items-center gap-2">
              <p className="text-xl font-bold">Materi Belajar</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#45C440"
                height="32"
                width="32"
                viewBox="0 0 512 512">
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
              </svg>
              <Progress
                aria-label="Loading..."
                value={60}
                className="max-w-md"
              />
            </div>
            {/*Chapter  */}
            <div className="mx-4 ">
              <div className="flex mb-2 justify-between items-center text-sm font-semibold  ">
                <p className="text-[#116E63]">
                  Chapter 1 -{" "}
                  {dataDetail &&
                    dataDetail.chapter &&
                    dataDetail.chapter[0] &&
                    dataDetail.chapter[0].name}
                </p>
                <p className=" text-[#F2A227] ">{totalNilai} Menit</p>
              </div>
              {dataDetail &&
                dataDetail.chapter[0].lessons.map((courses, indeks) => (
                  <div className=" mb-2 " key={[]}>
                    <div className="flex justify-between items-center text-sm gap-2 font-medium">
                      <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">
                        {indeks + 1}
                      </p>
                      <p className="w-full flex justify-start">
                        {courses.name}
                      </p>

                      <button onClick={() => changeVideo(courses.video)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#45C440"
                          height="20"
                          width="20"
                          viewBox="0 0 512 512">
                          <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              <div className="flex justify-between items-center text-sm font-semibold mb-2 ">
                <p className="text-[#116E63]">
                  Chapter 2 -{" "}
                  {dataDetail &&
                    dataDetail.chapter &&
                    dataDetail.chapter[1] &&
                    dataDetail.chapter[1].name}
                </p>
                <p className=" text-[#F2A227] ">{totalNilai2} Menit</p>
              </div>
              {dataDetail &&
                dataDetail.chapter[1].lessons.map((courses, indeks) => (
                  <div className="mb-2 " key={[]}>
                    <div className="flex gap-2 justify-between items-center text-sm font-medium">
                      <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">
                        {dataDetail.chapter[0].lessons.length + indeks + 1}
                      </p>
                      <p className="w-full flex justify-start">
                        {courses.name}
                      </p>

                      <button onClick={() => changeVideo(courses.video)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#45C440"
                          height="20"
                          width="20"
                          viewBox="0 0 512 512">
                          <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
