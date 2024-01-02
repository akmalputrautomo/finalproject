import { Accordion, AccordionItem, Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import postEnrollment from "../../redux/action/postEnrollment";
import getDataDetail from "../../redux/action/getDetail";
import { toast } from "react-toastify";

export const DetailKelasPembayaran = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pembayaran, setPembayaran] = useState("creditCard");
  const [number, setNumber] = useState(null);
  const [name, setName] = useState('');
  const [Cvv, setCvv] = useState(null);
  const [exp, setExp] = useState('');

  // useEffect(() => {
  // enrollment();
  // }, [dispatch, params.courseId]);
  // console.log(params.courseId, "params");

  // const enrollment = async () => { 
  //   await dispatch(postEnrollment(parseInt(params.courseId)));
  // }
  useEffect(() => {
    dispatch(getDataDetail(params.courseId));
  }, [dispatch, params.courseId]);

  const handleInput = async () => {
   const success = await dispatch(postEnrollment(parseInt(params.courseId),
      {
        metode_pembayaran: pembayaran ,
        card_number:parseInt(number),
        card_name: name ,
        cvv: parseInt(Cvv) ,
        expired: exp,
      }
    ))
    if (success) {
      toast.success("Pembayaran Berhasil");
      navigate (`/pembayaranSukses/${dataDetail.id}`);
    } else {
      toast.warning("Pembayaran Gagal");
    }
  }
  const formatToRupiah = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const dataDetail = useSelector((state) => state.courseDetail.coursesDetail);
   
  console.log(dataDetail, "detail");

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="w-full bg-gradient-to-b from-[#CFE2E0] via-white to-white ">
      <div className="flex flex-col justify-center items-center ">
        <div className="w-full ml-10  px-[8rem] pt-4 mobile:px-1 desktop:px-[8rem]">
          <button
            className="flex items-center  gap-2"
            onClick={() => {
              navigate(`/detailKelas/${dataDetail.id}`);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            <p>Kembali</p>
          </button>
        </div>
        <div className="flex flex-col  w-full justify-center items-center desktop:space-y-20 mobile:space-y-8 mobile:px-2 desktop:px-0 mobile:py-4 desktop:py-0">
          <div className="bg-[#DB1B1B] desktop:w-2/4 mobile:w-[23rem] mobile:text-sm desktop:text-base  h-12  rounded-xl align-middle text-white flex items-center justify-center   ">
            <p>Selesaikan Pembayaran sampai 04 Maret 2024 24:00</p>
          </div>
          <div className=" flex desktop:flex-row mobile:flex-col-reverse gap-6 mobile:justify-center mobile:items-center desktop:items-start ">
            <div className="flex-row  justify-center items-center desktop:w-[40rem] mobile:w-[25rem] ">
              <Accordion className="">
                <AccordionItem key="1" aria-label="1"  title="Transfer Bank"  className="bg-[#3C3C3C] px-4 mb-2 text-white rounded-lg font-semibold ">
                  {defaultContent}
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Credit Card" className="bg-[#116E63] px-4 mt-2 rounded-lg text-white font-semibold ">
                  <div className="w-full h-[23rem] p-8 mb-2 bg-white rounded-xl ">
                    <div className=" space-y-4 ">
                      <div className=" flex justify-center items-center ">
                        <svg width="296" height="20" viewBox="0 0 296 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_91_9102)">
                            <path
                              d="M72.168 18.8889C72.168 18.5369 72.4072 18.2478 72.7982 18.2478C73.1718 18.2478 73.424 18.5245 73.424 18.8889C73.424 19.2534 73.1718 19.5301 72.7982 19.5301C72.4072 19.5301 72.168 19.2409 72.168 18.8889ZM73.8499 18.8889V17.8873H73.3981V18.1313C73.2549 17.951 73.0375 17.8379 72.742 17.8379C72.1598 17.8379 71.7028 18.2781 71.7028 18.8894C71.7028 19.5008 72.1595 19.941 72.742 19.941C73.0374 19.941 73.2549 19.8278 73.3981 19.6476V19.8907H73.8494V18.8889H73.8499ZM89.1136 18.8889C89.1136 18.5369 89.3528 18.2478 89.7439 18.2478C90.118 18.2478 90.3697 18.5245 90.3697 18.8889C90.3697 19.2534 90.118 19.5301 89.7439 19.5301C89.3529 19.5301 89.1136 19.2409 89.1136 18.8889ZM90.796 18.8889V17.0833H90.3439V18.1313C90.2006 17.951 89.9833 17.8379 89.6877 17.8379C89.1055 17.8379 88.6486 18.2781 88.6486 18.8894C88.6486 19.5008 89.1052 19.941 89.6877 19.941C89.9833 19.941 90.2006 19.8278 90.3439 19.6476V19.8907H90.796V18.8889ZM79.4566 18.2272C79.7477 18.2272 79.9346 18.4031 79.9824 18.7129H78.9045C78.9527 18.4237 79.1348 18.2272 79.4567 18.2272H79.4566ZM79.4657 17.8368C78.8569 17.8368 78.4309 18.2638 78.4309 18.8883C78.4309 19.5251 78.874 19.9399 79.4959 19.9399C79.8088 19.9399 80.0954 19.8646 80.3475 19.6593L80.1261 19.3366C79.952 19.4708 79.7302 19.5461 79.5218 19.5461C79.2306 19.5461 78.9656 19.4161 78.9004 19.0556H80.443C80.4474 19.0014 80.4519 18.9468 80.4519 18.8882C80.4474 18.2639 80.0469 17.8366 79.4654 17.8366L79.4657 17.8368ZM84.9195 18.8882C84.9195 18.5362 85.1587 18.2471 85.5497 18.2471C85.9233 18.2471 86.1755 18.5238 86.1755 18.8882C86.1755 19.2526 85.9233 19.5293 85.5497 19.5293C85.1587 19.5293 84.9193 19.2402 84.9193 18.8882H84.9195ZM86.6012 18.8882V17.8873H86.1498V18.1313C86.006 17.951 85.7892 17.8379 85.4936 17.8379C84.9114 17.8379 84.4544 18.2781 84.4544 18.8894C84.4544 19.5008 84.9111 19.941 85.4936 19.941C85.7892 19.941 86.006 19.8278 86.1498 19.6476V19.8907H86.6014V18.8889L86.6012 18.8882ZM82.3684 18.8882C82.3684 19.4957 82.8071 19.9398 83.4767 19.9398C83.7895 19.9398 83.998 19.8727 84.2234 19.701L84.0065 19.349C83.8369 19.4665 83.6588 19.5293 83.4622 19.5293C83.1016 19.5251 82.8365 19.2737 82.8365 18.8882C82.8365 18.5027 83.1016 18.2515 83.4622 18.2471C83.6583 18.2471 83.8364 18.3099 84.0065 18.4274L84.2234 18.0754C83.9976 17.9037 83.7892 17.8366 83.4767 17.8366C82.8071 17.8366 82.3684 18.2806 82.3684 18.8882ZM88.192 17.8366C87.9314 17.8366 87.7617 17.9541 87.6443 18.1301V17.8873H87.1966V19.8896H87.6489V18.7672C87.6489 18.4358 87.7966 18.2517 88.0919 18.2517C88.1886 18.2504 88.2846 18.2675 88.3744 18.3021L88.5136 17.8917C88.4136 17.8537 88.2833 17.837 88.1918 17.837L88.192 17.8366ZM76.0833 18.0465C75.8659 17.9084 75.5665 17.837 75.2361 17.837C74.7098 17.837 74.371 18.0802 74.371 18.478C74.371 18.8045 74.6232 19.0059 75.0878 19.0688L75.3012 19.098C75.5489 19.1316 75.6658 19.1944 75.6658 19.3075C75.6658 19.4624 75.5013 19.5507 75.1923 19.5507C74.8794 19.5507 74.6536 19.4543 74.5014 19.3412L74.2891 19.6807C74.5368 19.8567 74.8497 19.9406 75.1885 19.9406C75.7885 19.9406 76.1362 19.6683 76.1362 19.287C76.1362 18.9351 75.8625 18.7509 75.4104 18.6881L75.1975 18.6583C75.002 18.6339 74.8453 18.596 74.8453 18.4618C74.8453 18.3154 74.993 18.2273 75.2408 18.2273C75.506 18.2273 75.7627 18.3237 75.8885 18.399L76.084 18.047L76.0833 18.0465ZM81.9121 17.8374C81.6515 17.8374 81.4817 17.9549 81.3649 18.1308V17.8873H80.9172V19.8896H81.369V18.7672C81.369 18.4358 81.5167 18.2517 81.812 18.2517C81.9087 18.2504 82.0047 18.2675 82.0945 18.3021L82.2337 17.8917C82.1337 17.8537 82.0033 17.837 81.9118 17.837L81.9121 17.8374ZM78.0572 17.8873H77.3185V17.2798H76.8618V17.8873H76.4405V18.2852H76.8618V19.1987C76.8618 19.6633 77.0489 19.94 77.5833 19.94C77.7793 19.94 78.0052 19.8814 78.1484 19.7852L78.0179 19.4123C77.8831 19.4876 77.7354 19.5256 77.618 19.5256C77.3922 19.5256 77.3185 19.3914 77.3185 19.1904V18.2856H78.0572V17.8873ZM71.3034 19.8901V18.6335C71.3034 18.1602 70.9905 17.8418 70.4861 17.8375C70.2209 17.8332 69.9474 17.9128 69.7559 18.1937C69.6126 17.9717 69.3868 17.8375 69.0693 17.8375C68.8475 17.8375 68.6306 17.9003 68.4609 18.1348V17.8873H68.0088V19.8896H68.4645V18.7794C68.4645 18.4318 68.6644 18.2471 68.9733 18.2471C69.2733 18.2471 69.425 18.4356 69.425 18.775V19.8894H69.8817V18.7791C69.8817 18.4315 70.0902 18.2468 70.39 18.2468C70.6985 18.2468 70.8457 18.4353 70.8457 18.7747V19.8891L71.3034 19.8901Z"
                              fill="#231F20"
                            />
                            <path d="M82.5923 14.1667H75.9258V1.66675H82.5924L82.5923 14.1667Z" fill="#FF5F00" />
                            <path
                              d="M76.6262 7.91667C76.6262 5.39159 77.8186 3.14224 79.6753 1.69266C78.2699 0.593783 76.5315 -0.00261366 74.7417 8.61048e-06C70.3328 8.61048e-06 66.7588 3.54436 66.7588 7.91667C66.7588 12.289 70.3328 15.8333 74.7417 15.8333C76.5316 15.836 78.27 15.2396 79.6755 14.1407C77.8189 12.6914 76.6262 10.4419 76.6262 7.91667Z"
                              fill="#DB1B1B"
                            />
                            <path
                              d="M92.1755 7.91667C92.1755 12.289 88.6017 15.8333 84.1929 15.8333C82.403 15.8359 80.6645 15.2395 79.2588 14.1407C81.1159 12.6911 82.3082 10.4419 82.3082 7.91667C82.3082 5.39146 81.1159 3.14224 79.2588 1.69266C80.6644 0.593816 82.4029 -0.0025677 84.1928 8.31014e-06C88.6015 8.31014e-06 92.1753 3.54436 92.1753 7.91667"
                              fill="#F79E1B"
                            />
                          </g>
                          <g clip-path="url(#clip1_91_9102)">
                            <path
                              d="M121.404 8.55756C121.39 9.67194 122.397 10.2938 123.156 10.6636C123.936 11.043 124.198 11.2862 124.195 11.6254C124.189 12.1447 123.573 12.3738 122.996 12.3827C121.99 12.3984 121.406 12.1112 120.941 11.894L120.578 13.5894C121.045 13.8044 121.909 13.9918 122.804 14C124.906 14 126.282 12.9622 126.289 11.3532C126.298 9.31114 123.465 9.19807 123.484 8.28529C123.491 8.00856 123.755 7.71322 124.334 7.63809C124.62 7.60015 125.411 7.57114 126.307 7.98401L126.659 6.34369C126.177 6.16812 125.557 6 124.786 6C122.807 6 121.415 7.05189 121.404 8.55756ZM130.04 6.14134C129.656 6.14134 129.333 6.36526 129.188 6.70895L126.185 13.8795H128.286L128.704 12.7242L131.271 12.7242L131.514 13.8795H133.365L131.75 6.14134H130.04ZM130.334 8.23173L130.94 11.1374H129.28L130.334 8.23173ZM118.857 6.14134L117.201 13.8795H119.203L120.858 6.14134L118.857 6.14134ZM115.895 6.14134L113.812 11.4082L112.969 6.92989C112.87 6.42998 112.479 6.14134 112.046 6.14134H108.639L108.592 6.366C109.291 6.51776 110.086 6.76251 110.567 7.02436C110.861 7.1843 110.946 7.32416 111.042 7.7043L112.639 13.8795H114.754L117.998 6.14134H115.895Z"
                              fill="#1B2073"
                            />
                            <path d="M108.592 0H134.082V2.66667H108.592V0Z" fill="#1B2073" />
                            <path d="M108.592 17.3333H134.082V19.9999H108.592V17.3333Z" fill="#F7B802" />
                          </g>
                          <g clip-path="url(#clip2_91_9102)">
                            <path
                              d="M152.442 0H180.442C181.325 0 182.042 0.71636 182.042 1.6V18.4C182.042 19.2837 181.325 20 180.442 20H152.442C151.558 20 150.842 19.2837 150.842 18.4V1.6C150.842 0.71636 151.558 0 152.442 0Z"
                              fill="#2557D6"
                            />
                            <path
                              d="M150.852 9.4277H152.349L152.687 8.6473H153.443L153.78 9.4277H156.727V8.8311L156.99 9.4303H158.519L158.782 8.82222V9.42774H166.106L166.102 8.1467H166.244C166.343 8.15002 166.372 8.15878 166.372 8.31574V9.42774H170.16V9.12954C170.465 9.28634 170.94 9.42774 171.566 9.42774H173.159L173.5 8.64734H174.256L174.589 9.42774H177.66V8.68646L178.125 9.42774H180.586V4.52734H178.15V5.10606L177.81 4.52734H175.311V5.10606L174.998 4.52734H171.622C171.058 4.52734 170.561 4.6029 170.16 4.81346V4.52734H167.831V4.81346C167.575 4.59642 167.227 4.52734 166.841 4.52734H158.331L157.76 5.79298L157.174 4.52734H154.493V5.10606L154.199 4.52734H151.913L150.852 6.85718V9.42762H150.852L150.852 9.4277ZM160.305 8.7209H159.407L159.403 5.96914L158.132 8.72086H157.363L156.089 5.9667V8.72086H154.306L153.969 7.93718H152.144L151.804 8.72086H150.852L152.421 5.20738H153.724L155.214 8.53394V5.20738H156.645L157.792 7.59086L158.846 5.20738H160.305L160.305 8.7209ZM153.669 7.20798L153.069 5.8073L152.473 7.20798H153.669ZM163.881 8.72082H160.953V5.20734H163.881V5.93898H161.83V6.5723H163.832V7.2925H161.83V7.99418H163.881L163.881 8.72082ZM168.008 6.15362C168.008 6.71378 167.618 7.00322 167.39 7.0901C167.582 7.16002 167.746 7.28362 167.824 7.38598C167.948 7.56074 167.969 7.71682 167.969 8.03062V8.72082H167.085L167.081 8.27774C167.081 8.06634 167.103 7.7623 166.943 7.59326C166.815 7.46966 166.62 7.44286 166.304 7.44286H165.363V8.72086H164.487V5.20734H166.503C166.951 5.20734 167.281 5.21866 167.564 5.37562C167.841 5.53258 168.008 5.7617 168.008 6.15362ZM166.9 6.6753C166.779 6.74538 166.637 6.7477 166.466 6.7477H165.401V5.9673H166.481C166.633 5.9673 166.793 5.97386 166.896 6.03066C167.01 6.08186 167.08 6.19078 167.08 6.34126C167.08 6.49486 167.013 6.61842 166.9 6.6753ZM169.414 8.72082H168.519V5.20734H169.414V8.72082ZM179.796 8.72082H178.554L176.892 6.08374V8.72082H175.107L174.766 7.93714H172.945L172.615 8.72082H171.589C171.163 8.72082 170.623 8.63054 170.318 8.33222C170.01 8.0339 169.849 7.62982 169.849 6.9909C169.849 6.46982 169.945 5.99346 170.322 5.61702C170.605 5.33662 171.049 5.20734 171.653 5.20734H172.502V5.96018H171.671C171.351 5.96018 171.17 6.00578 170.996 6.1683C170.847 6.31626 170.744 6.5959 170.744 6.96418C170.744 7.34058 170.822 7.61202 170.985 7.7893C171.12 7.92834 171.366 7.9705 171.596 7.9705H171.99L173.225 5.20746H174.539L176.023 8.5307V5.2075H177.357L178.898 7.65446V5.2075H179.796V8.72082ZM174.468 7.20802L173.861 5.80734L173.258 7.20802H174.468ZM182.03 14.3312C181.817 14.6295 181.402 14.7807 180.84 14.7807H179.147V14.0271H180.833C181 14.0271 181.117 14.0061 181.188 13.9401C181.255 13.8812 181.292 13.798 181.292 13.711C181.292 13.6085 181.249 13.5273 181.185 13.4785C181.121 13.4249 181.028 13.4005 180.876 13.4005C180.053 13.3737 179.026 13.4249 179.026 12.3128C179.026 11.8031 179.364 11.2665 180.283 11.2665H182.029V10.5674H180.407C179.918 10.5674 179.562 10.6798 179.31 10.8543V10.5673H176.911C176.527 10.5673 176.077 10.6585 175.864 10.8543V10.5673H171.579V10.8543C171.238 10.6187 170.662 10.5673 170.397 10.5673H167.571V10.8543C167.301 10.604 166.701 10.5673 166.335 10.5673H163.172L162.448 11.3179L161.77 10.5673H157.045V15.4709H161.681L162.427 14.7085L163.13 15.4709L165.987 15.4734V14.3199H166.268C166.647 14.3255 167.094 14.3107 167.489 14.1474V15.4708H169.846V14.1927H169.96C170.105 14.1927 170.119 14.1985 170.119 14.3373V15.4706H177.28C177.734 15.4706 178.209 15.3592 178.473 15.1568V15.4706H180.744C181.216 15.4706 181.678 15.4071 182.029 15.2447L182.029 14.3311L182.03 14.3312ZM167.832 12.445C167.832 13.4213 167.072 13.6228 166.306 13.6228H165.212V14.8016H163.508L162.429 13.6381L161.307 14.8016H157.835V11.2872H161.361L162.439 12.4392L163.554 11.2872H166.355C167.05 11.2872 167.832 11.4717 167.832 12.445ZM160.863 14.0624H158.708V13.3632H160.632V12.6461H158.708V12.0072H160.906L161.864 13.0313L160.863 14.0624ZM164.336 14.4648L162.99 13.0332L164.336 11.6472V14.4648ZM166.326 12.9021H165.193V12.0072H166.336C166.652 12.0072 166.872 12.1308 166.872 12.4381C166.872 12.742 166.663 12.9021 166.326 12.9021ZM172.26 11.2872H175.186V12.014H173.133V12.6529H175.136V13.37H173.133V14.0692L175.186 14.0724V14.8016H172.26L172.26 11.2872ZM171.135 13.1684C171.331 13.2374 171.49 13.361 171.565 13.4634C171.689 13.635 171.707 13.7951 171.71 14.1049V14.8016H170.83V14.3619C170.83 14.1505 170.851 13.8374 170.688 13.674C170.56 13.5481 170.365 13.518 170.045 13.518H169.108V14.8016H168.228V11.2873H170.251C170.695 11.2873 171.018 11.3061 171.306 11.4531C171.583 11.6133 171.757 11.8326 171.757 12.2335C171.757 12.7944 171.366 13.0807 171.135 13.1684ZM170.64 12.7241C170.523 12.7908 170.378 12.7965 170.207 12.7965H169.142V12.0073H170.222C170.378 12.0073 170.534 12.0105 170.64 12.0707C170.754 12.1277 170.822 12.2366 170.822 12.3869C170.822 12.5372 170.754 12.6583 170.64 12.7241ZM178.553 12.948C178.724 13.1171 178.815 13.3308 178.815 13.6925C178.815 14.4485 178.322 14.8014 177.438 14.8014H175.731V14.0478H177.431C177.598 14.0478 177.715 14.0268 177.789 13.9608C177.85 13.9065 177.893 13.8275 177.893 13.7317C177.893 13.6292 177.846 13.548 177.786 13.4992C177.719 13.4456 177.626 13.4213 177.474 13.4213C176.654 13.3945 175.627 13.4456 175.627 12.3336C175.627 11.8238 175.962 11.2873 176.881 11.2873H178.638V12.0353H177.03C176.871 12.0353 176.767 12.0411 176.679 12.0987C176.583 12.1556 176.547 12.2401 176.547 12.3515C176.547 12.4841 176.629 12.5743 176.739 12.6133C176.831 12.6441 176.931 12.6531 177.08 12.6531L177.552 12.6654C178.028 12.6764 178.354 12.7553 178.553 12.948ZM182.031 12.0072H180.434C180.274 12.0072 180.168 12.0129 180.079 12.0707C179.986 12.1276 179.951 12.212 179.951 12.3235C179.951 12.4561 180.029 12.5463 180.142 12.5853C180.235 12.6161 180.334 12.6251 180.48 12.6251L180.955 12.6373C181.435 12.6487 181.755 12.7276 181.95 12.9202C181.985 12.947 182.007 12.9771 182.031 13.0072V12.0072H182.031Z"
                              fill="white"
                            />
                          </g>
                          <path
                            d="M204.777 6.77397C204.441 6.54301 204.003 6.42725 203.462 6.42725H201.368C201.202 6.42725 201.111 6.51017 201.093 6.67585L200.243 12.015C200.234 12.0675 200.247 12.1154 200.282 12.159C200.317 12.2027 200.361 12.2244 200.413 12.2244H201.408C201.582 12.2244 201.678 12.1417 201.695 11.9758L201.931 10.5364C201.94 10.4666 201.97 10.4099 202.023 10.3662C202.075 10.3226 202.14 10.2941 202.219 10.2811C202.297 10.2681 202.371 10.2616 202.441 10.2616C202.511 10.2616 202.594 10.266 202.69 10.2747C202.786 10.2834 202.847 10.2876 202.873 10.2876C203.624 10.2876 204.212 10.0762 204.64 9.65297C205.067 9.22993 205.281 8.64329 205.281 7.89281C205.281 7.37809 205.113 7.00517 204.777 6.77385V6.77397ZM203.698 8.37717C203.654 8.68257 203.541 8.88313 203.358 8.97913C203.174 9.07525 202.913 9.12309 202.572 9.12309L202.14 9.13613L202.363 7.73585C202.38 7.63997 202.437 7.59197 202.533 7.59197H202.782C203.131 7.59197 203.384 7.64225 203.541 7.74241C203.698 7.84281 203.75 8.05445 203.698 8.37717Z"
                            fill="#003087"
                          />
                          <path
                            d="M226.873 6.42725H225.905C225.809 6.42725 225.752 6.47525 225.735 6.57129L224.884 12.0153L224.871 12.0414C224.871 12.0853 224.889 12.1265 224.924 12.1658C224.958 12.205 225.002 12.2246 225.054 12.2246H225.918C226.084 12.2246 226.175 12.1419 226.193 11.976L227.044 6.62365V6.61065C227.044 6.48845 226.987 6.42741 226.873 6.42741V6.42725Z"
                            fill="#009CDE"
                          />
                          <path
                            d="M215.174 8.53452C215.174 8.491 215.157 8.44948 215.122 8.41032C215.087 8.37108 215.048 8.35132 215.004 8.35132H213.996C213.9 8.35132 213.822 8.39516 213.761 8.48216L212.374 10.5237L211.798 8.56076C211.754 8.42128 211.658 8.35132 211.51 8.35132H210.528C210.485 8.35132 210.445 8.371 210.411 8.41032C210.376 8.44948 210.358 8.49108 210.358 8.53452C210.358 8.55208 210.443 8.80936 210.614 9.30664C210.784 9.80408 210.967 10.3406 211.163 10.9165C211.359 11.4922 211.462 11.7977 211.471 11.8323C210.755 12.8096 210.398 13.333 210.398 13.4027C210.398 13.5162 210.454 13.5729 210.568 13.5729H211.575C211.671 13.5729 211.75 13.5294 211.811 13.4421L215.148 8.62608C215.165 8.6088 215.174 8.5784 215.174 8.53448V8.53452Z"
                            fill="#003087"
                          />
                          <path
                            d="M224.557 8.35112H223.563C223.44 8.35112 223.366 8.49512 223.34 8.78308C223.113 8.4342 222.699 8.25952 222.097 8.25952C221.469 8.25952 220.934 8.49512 220.494 8.96624C220.053 9.43736 219.833 9.99152 219.833 10.6283C219.833 11.1432 219.983 11.5532 220.284 11.8584C220.585 12.164 220.989 12.3164 221.495 12.3164C221.748 12.3164 222.005 12.264 222.267 12.1594C222.529 12.0547 222.734 11.9152 222.882 11.7406C222.882 11.7494 222.873 11.7885 222.856 11.8583C222.838 11.9282 222.83 11.9807 222.83 12.0153C222.83 12.1551 222.886 12.2247 223 12.2247H223.903C224.069 12.2247 224.165 12.142 224.191 11.9761L224.727 8.56048C224.736 8.50808 224.723 8.4602 224.688 8.41652C224.653 8.373 224.61 8.35112 224.557 8.35112ZM222.849 10.9293C222.627 11.1474 222.359 11.2564 222.045 11.2564C221.791 11.2564 221.587 11.1867 221.43 11.047C221.272 10.9078 221.194 10.7158 221.194 10.4712C221.194 10.1487 221.303 9.8758 221.521 9.65336C221.739 9.43088 222.01 9.31968 222.332 9.31968C222.577 9.31968 222.779 9.39164 222.941 9.53552C223.102 9.67952 223.183 9.878 223.183 10.1311C223.183 10.4451 223.072 10.7113 222.849 10.9293Z"
                            fill="#009CDE"
                          />
                          <path
                            d="M209.691 8.35112H208.697C208.574 8.35112 208.5 8.49512 208.474 8.78308C208.238 8.4342 207.824 8.25952 207.231 8.25952C206.603 8.25952 206.068 8.49512 205.628 8.96624C205.187 9.43736 204.967 9.99152 204.967 10.6283C204.967 11.1432 205.117 11.5532 205.418 11.8584C205.719 12.164 206.123 12.3164 206.629 12.3164C206.873 12.3164 207.126 12.264 207.388 12.1594C207.65 12.0547 207.859 11.9152 208.016 11.7406C207.981 11.8452 207.964 11.9369 207.964 12.0153C207.964 12.1551 208.02 12.2247 208.134 12.2247H209.037C209.202 12.2247 209.298 12.142 209.325 11.9761L209.861 8.56048C209.87 8.50808 209.857 8.4602 209.822 8.41652C209.787 8.373 209.743 8.35112 209.691 8.35112ZM207.983 10.9358C207.761 11.1498 207.488 11.2564 207.165 11.2564C206.912 11.2564 206.709 11.1867 206.557 11.047C206.404 10.9078 206.328 10.7158 206.328 10.4712C206.328 10.1487 206.437 9.8758 206.655 9.65336C206.873 9.43088 207.143 9.31964 207.466 9.31964C207.711 9.31964 207.913 9.39164 208.075 9.53552C208.236 9.67952 208.317 9.878 208.317 10.1311C208.317 10.4539 208.206 10.7222 207.983 10.9358Z"
                            fill="#003087"
                          />
                          <path
                            d="M219.644 6.77397C219.308 6.54301 218.869 6.42725 218.328 6.42725H216.248C216.073 6.42725 215.977 6.51017 215.96 6.67585L215.109 12.015C215.1 12.0675 215.113 12.1154 215.148 12.159C215.183 12.2027 215.227 12.2244 215.279 12.2244H216.352C216.457 12.2244 216.527 12.1678 216.562 12.0544L216.797 10.5364C216.806 10.4666 216.836 10.4099 216.889 10.3662C216.941 10.3226 217.007 10.2941 217.085 10.2811C217.164 10.2681 217.238 10.2616 217.308 10.2616C217.377 10.2616 217.46 10.266 217.556 10.2747C217.652 10.2834 217.713 10.2876 217.739 10.2876C218.49 10.2876 219.079 10.0762 219.506 9.65297C219.934 9.22993 220.147 8.64329 220.147 7.89281C220.147 7.37809 219.979 7.00513 219.644 6.77385V6.77397ZM218.302 8.92673C218.11 9.05757 217.822 9.12297 217.439 9.12297L217.02 9.13609L217.242 7.73577C217.26 7.63993 217.316 7.59185 217.412 7.59185H217.648C217.84 7.59185 217.992 7.60061 218.106 7.61801C218.219 7.63553 218.328 7.68997 218.433 7.78153C218.538 7.87317 218.59 8.00629 218.59 8.18069C218.59 8.54725 218.494 8.79577 218.302 8.92673Z"
                            fill="#009CDE"
                          />
                          <defs>
                            <clipPath id="clip0_91_9102">
                              <rect width="25.8333" height="20" fill="white" transform="translate(66.7588)" />
                            </clipPath>
                            <clipPath id="clip1_91_9102">
                              <rect width="26.25" height="20" fill="white" transform="translate(108.592)" />
                            </clipPath>
                            <clipPath id="clip2_91_9102">
                              <rect width="31.2" height="20" fill="white" transform="translate(150.842)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-black">
                        <p>Card number</p>
                        <Input type="number" id="number"   onChange={(e) => setNumber(e.target.value) }  fill="none" label="" placeholder="4480 0000 0000 0000" className=" border border-slate-300 rounded-md " />
                      </div>
                      <div className="text-black ">
                        <p>Card holder name</p>
                        <Input type="text" id="name" fill="none" onChange={(e) => setName(e.target.value)} label="" placeholder="John Doe" className=" border border-slate-300 rounded-md" />
                      </div>
                      <div className="text-black flex w-full gap-4">
                        <div className="w-1/2">
                          <p>CVV</p>
                          <Input type="number" id="Cvv" onChange={(e) => setCvv(e.target.value)} fill="none" label="" placeholder="000" className=" border border-slate-300 rounded-md" />
                        </div>
                        <div className="w-1/2">
                          <p>Expiry date</p>
                          <Input type="text" id="exp" onChange={(e) => setExp(e.target.value)} fill="none" label="" placeholder="07/24" className=" border border-slate-300 rounded-md" />
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
              <div className="mobile:block desktop:hidden flex justify-center items-center ">
                  <Button onClick={handleInput}  className="bg-[#DB1B1B] ml-2 w-[24rem] h-[2.5rem] px-4 mt-6  flex justify-center items-center rounded-3xl text-white font-semibold text-sm gap-2 ">
                    <p>Bayar dan Ikutan Kelas Selamanya</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="20" width="20" viewBox="0 0 512 512">
                      <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
                    </svg>
                  </Button>
                </div>
            </div>

            <div className=" desktop:w-2/5  h-fit  px-6 py-6 rounded-3xl bg-white shadow-2xl  ">
              <div className="relative flex w-full  flex-col justify-center items-center space-y-4 ">
                <p className="flex justify-start w-full  text-xl font-bold">Pembayaran Kelas</p>
                <div className=" h-fit pb-2 shadow-lg rounded-3xl">
                <img className="w-full h-[5rem] bg-cover rounded-t-3xl" src={dataDetail.category.image} />
                  <div className="px-3 py-1  ">
                    <p className="text-[#116E63] font-bold">{dataDetail.category.name}</p>
                    <p className="text-sm font-bold">{dataDetail.title}</p>
                    <p className="text-xs">{dataDetail.mentor.name}</p>
                  </div>
                </div>
                <div className="w-full flex justify-around  gap-6 text-sm font-bold">
                  <div>
                    <p>Harga</p>
                    <p className="font-normal">{formatToRupiah(dataDetail.price)}</p>
                  </div>
                  <div>
                    <p>PPN 11%</p>
                    <p className="font-normal">{formatToRupiah(dataDetail.price * 11 / 100)}</p>
                  </div>
                  <div>
                    <p>Total Bayar</p>
                    <p className="text-[#116E63]">{formatToRupiah(dataDetail.price * 11 / 100 + dataDetail.price)}</p>
                  </div>
                </div>
                <div className="mobile:hidden desktop:block">
                  <Button onClick={handleInput} className="bg-[#DB1B1B] w-full h-[2.5rem] px-4 mt-6  flex justify-center items-center rounded-3xl text-white font-semibold text-sm gap-2 ">
                    <p>Bayar dan Ikutan Kelas Selamanya</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="20" width="20" viewBox="0 0 512 512">
                      <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
