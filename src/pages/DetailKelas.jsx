import React, { Fragment, useEffect, useState } from "react";
import { BeliMateriPremium } from "../assets/components/BeliMateriPremium";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import getDataDetail from "../redux/action/getDetail";

export const DetailKelas = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataDetail(params.courseId));
  }, [dispatch, params.courseId]);

  const dataDetail = useSelector((state) => state.courseDetail.coursesDetail);
  console.log(dataDetail, "Detail");

  const [showBeli, setShowBeli] = useState(false);

  return (
    <Fragment>
      <div>
        <div className="bg-gradient-to-b from-[#CFE2E0] via-white to-white">
          <div className=" desktop:mx-[8rem] desktop:pt-4 desktop:space-y-8">
            {/* Button Keluar */}
            <div className=" flex gap-2 px-4 pt-4 ">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
              </button>
              <p>Kelas Lainnya</p>
            </div>
            {/* Konten */}
            <div className="desktop:mx-[1rem]">
              <div className="desktop:flex justify-center ">
                {/* Kiri Detail Belajar */}
                <div className="  w-full  ">
                  <div className=" flex desktop:flex-col mobile:flex-col-reverse  ">
                    <div className="mobile:p-4 desktop:p-0 ">
                      <div className="flex justify-between">
                        <p className="text-lg font-medium text-[#116E63]">{dataDetail && dataDetail.category && dataDetail.category[0] && dataDetail.category[0].category.name}</p>
                        <div className="flex items-center gap-1">
                          <svg fill="#F4CE14" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <p> {dataDetail.rating} </p>
                        </div>
                      </div>
                      <p className="text-lg font-medium">
                        {dataDetail.title}
                        <p className="text-sm font-normal align-top">{dataDetail && dataDetail.category && dataDetail.category[0] && dataDetail.category[0].category.name}</p>
                      </p>

                      <div className="flex text-xs font-normal gap-4">
                        <div className="flex items-center gap-1">
                          <svg fill="#45C440" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <p className="text-[#116E63] font-semibold">{dataDetail.level}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg fill="#45C440" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <p>{dataDetail.modul} Modul</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg fill="#45C440" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <p>{dataDetail.duration} Menit</p>
                        </div>
                      </div>
                    </div>
                    <a href="https://t.me/+dN88eEKBRfE2Mzc1" className="mt-4 mobile:hidden desktop:block">
                      <button className="flex items-center gap-4 rounded-2xl px-10 py-1 text-base font-bold text-white bg-[#45C440]">
                        <p>Join Grup Telegram</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="white" viewBox="0 0 512 512">
                          <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
                        </svg>
                      </button>
                    </a>
                    <div className="flex justify-center">
                      <div className="bg-black w-full h-[20rem] desktop:rounded-3xl desktop:my-6 mobile:mt-2 desktop:mx-2"></div>
                    </div>
                  </div>
                  <div className="desktop:hidden mobile:block flex flex-col w-full">
                    <Tabs aria-label="light" fullWidth radius="none" color="hijau" className=" flex justify-center   ">
                      <Tab key="photos" title="Tentang" className="">
                        <Card className=" max-w-full">
                          <CardBody>
                            <div className="flex flex-col justify-center items-center ">
                              <a href="https://t.me/+dN88eEKBRfE2Mzc1" className="mt-4 mobile:block desktop:hidden mb-4 ">
                                <button className="flex items-center gap-4 rounded-2xl px-10 py-1 text-base font-bold text-white bg-[#45C440]">
                                  <p>Join Grup Telegram</p>
                                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="white" viewBox="0 0 512 512">
                                    <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
                                  </svg>
                                </button>
                              </a>
                              <p className="text-lg font-medium flex justify-start items-start w-full">Tentang Kelas</p>
                              <p className="text-xs indent-6 leading-loose ">{dataDetail.desc}</p>
                            </div>
                            <div className="">
                              <p className="text-lg font-medium">Kelas Ini Ditujukan Untuk</p>
                              <ol className="list-decimal text-xs  leading-loose ">{dataDetail.intended_for}</ol>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#45C440" height="16" width="16" viewBox="0 0 512 512">
                                          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                                        </svg>
                                        <div className="bg-slate-300 rounded-2xl flex justify-between ">
                                          <p className="bg-[#116E63] rounded-2xl px-2">10%</p>
                                          <p className="pr-20">Complete</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mx-4">
                                      <div className="flex justify-between items-center text-sm font-semibold space-y-2 ">
                                        <p className="text-[#116E63]">Chapter 1 - Pendahuluan</p>
                                        <p className=" text-[#F2A227] ">60 Menit</p>
                                      </div>
                                      <div className="space-y-2">
                                        <div className="flex justify-between items-center text-sm font-medium">
                                          <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                                          <p>Tujuan Mengikuti Kelas Design System</p>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="#45C440" height="20" width="20" viewBox="0 0 512 512">
                                            <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                                          </svg>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between items-center text-sm font-medium">
                                          <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">2</p>
                                          <p>Tujuan Mengikuti Kelas Design System</p>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="#45C440" height="20" width="20" viewBox="0 0 512 512">
                                            <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                                          </svg>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between items-center text-sm font-medium">
                                          <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">3</p>
                                          <p>Tujuan Mengikuti Kelas Design System</p>
                                          <button onClick={() => setShowBeli(true)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#45C440" height="20" width="20" viewBox="0 0 512 512">
                                              <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                                            </svg>
                                          </button>
                                        </div>
                                        <hr />
                                      </div>
                                      <br />
                                      <div className="flex justify-between items-center text-sm font-semibold space-y-2 ">
                                        <p className="text-[#116E63]">Chapter 2 - Pendahuluan</p>
                                        <p className=" text-[#F2A227] ">60 Menit</p>
                                      </div>
                                      <div className="space-y-2">
                                        <div className="flex justify-between items-center text-sm font-medium">
                                          <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                                          <p>Tujuan Mengikuti Kelas Design System</p>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                                          </svg>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between items-center text-sm font-medium">
                                          <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                                          <p>Tujuan Mengikuti Kelas Design System</p>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                                          </svg>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between items-center text-sm font-medium">
                                          <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                                          <p>Tujuan Mengikuti Kelas Design System</p>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                                          </svg>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between items-center text-sm font-medium">
                                          <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                                          <p>Tujuan Mengikuti Kelas Design System</p>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                                          </svg>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between items-center text-sm font-medium">
                                          <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                                          <p>Tujuan Mengikuti Kelas Design System</p>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                                          </svg>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between items-center text-sm font-medium">
                                          <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                                          <p>Tujuan Mengikuti Kelas Design System</p>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                                          </svg>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between items-center text-sm font-medium">
                                          <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                                          <p>Tujuan Mengikuti Kelas Design System</p>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                                          </svg>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between items-center text-sm font-medium">
                                          <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                                          <p>Tujuan Mengikuti Kelas Design System</p>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                                          </svg>
                                        </div>
                                        <hr />
                                      </div>
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
                  <div className="mobile:hidden desktop:block">
                    <p className="text-lg font-medium flex justify-start items-start w-full">Tentang Kelas</p>
                    <p className="text-xs indent-6 leading-loose ">{dataDetail.desc}</p>
                  </div>
                  <div className="mobile:hidden desktop:block">
                    <p className="text-lg font-medium">Kelas Ini Ditujukan Untuk</p>
                    <ol className="list-decimal text-xs  leading-loose ">{dataDetail.intended_for}</ol>
                  </div>
                </div>
                {/* Kanan Materi Belajar*/}
                <div className=" mobile:hidden desktop:block desktop:ml-4  desktop:w-3/4 mobile:full flex justify-center">
                  <div className="bg-white  desktop:w-5/6 mobile:w-full h-full py-6 rounded-3xl shadow-lg ">
                    <div className="flex h-full  justify-center content-center items-center ">
                      <div className=" space-y-4 w-full mx-6 ">
                        <div className="flex justify-between">
                          <p className="text-xl font-bold">Materi Belajar</p>
                          <div className="flex items-center gap-2 text-xs text-white  ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#45C440" height="16" width="16" viewBox="0 0 512 512">
                              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                            </svg>
                            <div className="bg-slate-300 rounded-2xl flex justify-between ">
                              <p className="bg-[#116E63] rounded-2xl px-2">10%</p>
                              <p className="pr-20">Complete</p>
                            </div>
                          </div>
                        </div>
                        <div className="mx-4">
                          <div className="flex justify-between items-center text-sm font-semibold space-y-2 ">
                            <p className="text-[#116E63]">Chapter 1 - Pendahuluan</p>
                            <p className=" text-[#F2A227] ">60 Menit</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm font-medium">
                              <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                              <p>Tujuan Mengikuti Kelas Design System</p>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#45C440" height="20" width="20" viewBox="0 0 512 512">
                                <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                              </svg>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center text-sm font-medium">
                              <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">2</p>
                              <p>Tujuan Mengikuti Kelas Design System</p>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#45C440" height="20" width="20" viewBox="0 0 512 512">
                                <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                              </svg>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center text-sm font-medium">
                              <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">3</p>
                              <p>Tujuan Mengikuti Kelas Design System</p>
                              <button onClick={() => setShowBeli(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#45C440" height="20" width="20" viewBox="0 0 512 512">
                                  <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                                </svg>
                              </button>
                            </div>
                            <hr />
                          </div>
                          <br />
                          <div className="flex justify-between items-center text-sm font-semibold space-y-2 ">
                            <p className="text-[#116E63]">Chapter 2 - Pendahuluan</p>
                            <p className=" text-[#F2A227] ">60 Menit</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm font-medium">
                              <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                              <p>Tujuan Mengikuti Kelas Design System</p>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                              </svg>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center text-sm font-medium">
                              <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                              <p>Tujuan Mengikuti Kelas Design System</p>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                              </svg>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center text-sm font-medium">
                              <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                              <p>Tujuan Mengikuti Kelas Design System</p>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                              </svg>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center text-sm font-medium">
                              <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                              <p>Tujuan Mengikuti Kelas Design System</p>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                              </svg>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center text-sm font-medium">
                              <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                              <p>Tujuan Mengikuti Kelas Design System</p>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                              </svg>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center text-sm font-medium">
                              <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                              <p>Tujuan Mengikuti Kelas Design System</p>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                              </svg>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center text-sm font-medium">
                              <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                              <p>Tujuan Mengikuti Kelas Design System</p>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                              </svg>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center text-sm font-medium">
                              <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">1</p>
                              <p>Tujuan Mengikuti Kelas Design System</p>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#D9D9D9" height="16" width="14" viewBox="0 0 448 512">
                                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                              </svg>
                            </div>
                            <hr />
                          </div>
                        </div>
                      </div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <BeliMateriPremium isVisible={showBeli} onClose={() => setShowBeli(false)} />
    </Fragment>
  );
};
