import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, Progress, Tab, Tabs } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import getDataDetail from "../../redux/action/getDetail";
import postUpdateIsDone from "../../redux/action/postupdateIsDone";

export const MateriBelajarMobile = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [id, setId] = useState(1);

  useEffect(() => {
    dispatch(getDataDetail(params.courseId));
  }, [dispatch, params.courseId]);

  useEffect(() => {
    dispatch(postUpdateIsDone(id));
  }, [dispatch, id]);

  const updateIsDone = useSelector((state) => state)

  console.log(updateIsDone,"done");

//   const handleUpdateIsDone = (id) => {
//     dispatch(PostUpdateIsDone(id))
//   }

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
    <div className="desktop:hidden mt-4 mobile:block flex flex-col w-full">
      <Tabs
        aria-label="light"
        fullWidth
        radius="none"
        color="hijau"
        className=" flex justify-center   ">
        <Tab key="photos" title="Tentang" className="">
          <Card className=" max-w-full">
            <CardBody>
              <div className="flex flex-col justify-center items-center  ">
                <a
                  href="https://t.me/+dN88eEKBRfE2Mzc1"
                  className="mt-4 mobile:block desktop:hidden mb-4 ">
                  <button className="flex items-center gap-4 rounded-2xl px-10 py-1 text-base font-bold text-white bg-[#45C440]">
                    <p>Join Grup Telegram</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      fill="white"
                      viewBox="0 0 512 512">
                      <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
                    </svg>
                  </button>
                </a>
                <p className=" text-lg font-medium flex justify-start items-start w-full">
                  Tentang Kelas
                </p>
                <p className="text-xs indent-6 leading-loose ">
                  {dataDetail.desc}
                </p>
              </div>
              <div className="">
                <p className="text-lg font-medium">Kelas Ini Ditujukan Untuk</p>
                <ol className="list-decimal text-xs  leading-loose ">
                  {dataDetail.intended_for}
                </ol>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="Materi Kelas">
          <Card>
            <CardBody>
              <div className=" desktop:w-3/4 mobile:full flex justify-center">
                <div className="bg-white  desktop:w-5/6 mobile:w-full h-4/5 rounded-3xl shadow-lg ">
                  <div className="flex h-full  justify-center content-center items-center ">
                    <div className=" space-y-4 w-full mx-6 ">
                      <div className="flex justify-between">
                        <p className="text-xl font-bold">Materi Belajar</p>
                        <div className="flex items-center gap-2 text-xs text-white  ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#45C440"
                            height="16"
                            width="16"
                            viewBox="0 0 512 512">
                            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                          </svg>
                          <div className="bg-slate-300 rounded-2xl flex justify-between ">
                            <Progress
                              aria-label="Loading..."
                              value={60}
                              className="max-w-md"
                            />
                          </div>
                        </div>
                      </div>
                      {/* Materi Kelas Mobile */}
                      <div className="mx-4">
                        <div className="flex justify-between items-center text-sm font-semibold ">
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
                          dataDetail.chapter[0].lessons.map(
                            (courses, indeks) => (
                              <div className="mb-2" key={courses.id}>
                                <div className="flex gap-2 justify-between items-center text-sm font-medium">
                                  <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">
                                    {indeks + 1}
                                  </p>
                                  <p className="w-full flex justify-start">
                                    {courses.name}
                                  </p>
                                  {/* Play Video */}
                                  <button
                                    onClick={() => {
                                      changeVideo(courses.video);
                                      setId(courses.id);
                                    }}>
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
                            )
                          )}
                        <div className="flex justify-between items-center text-sm font-semibold  ">
                          <p className="text-[#116E63]">
                            {dataDetail &&
                              dataDetail.chapter &&
                              dataDetail.chapter[1] &&
                              dataDetail.chapter[1].name}
                          </p>
                          <p className=" text-[#F2A227] ">
                            {totalNilai2} Menit
                          </p>
                        </div>
                        {dataDetail &&
                          dataDetail.chapter[1].lessons.map(
                            (courses, indeks) => (
                              <div className="mb-2" key={courses.id}>
                                <div className="flex gap-2 justify-between items-center text-sm font-medium">
                                  <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">
                                    {dataDetail.chapter[0].lessons.length +
                                      indeks +
                                      1}
                                  </p>
                                  <p className="w-full flex justify-start">
                                    {courses.name}
                                  </p>
                                  {/* Play Video */}
                                  <button
                                    onClick={() => {
                                      changeVideo(courses.video);
                                      setId(courses.id);
                                    }}>
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
                            )
                          )}
                      </div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};
