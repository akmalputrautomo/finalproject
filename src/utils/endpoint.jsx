export const endpoint = {
  LOGIN_USER: "/api/v1/auth/login",
  REGISTER_USER: "/api/v1/auth/register",
  VERIFY_OTP: "/api/v1/auth/verify",
  RESEND_OTP: "/api/v1/auth/verify/newOtp",
  FORGET_PASS: "/api/v1/auth/forget-password",
  RESET_PASS: "/api/v1/auth/reset-password",
  COURSE_CATEGORIES: "/api/v1/categories",
  COURSE_POPULARALL: "/api/v1/course/populerall",
  COURSE_DETAILS: (id) => {
    return `/api/v1/course/details/${id}`;
  },
  UPDATE_ISDONE: (id) => {
    return `/api/v1/course/updateisdone/${id}`;
  },
  COURSE_POPULAR: (id) => {
    return `/api/v1/course/populer/${id}`;
  },
  AKUN_PROFILE: `/api/v1/accounts/updateprofile`,
  UPDATE_PASS: `/api/v1/accounts/updatepassword`,
  NOTIFIKASI: `/api/v1/accounts/notification`,
  COURSE_SEARCH: "/api/v1/course/search",
  FREE_KELASSAYA: "/api/v1/course/free",
  GET_USER: `/api/v1/auth/me`,
  COURSE_ALL: "/api/v1/course/all",
  FILTER_SIDEBAR: "/api/v1/course/all",
  CARD_ADM: `/api/v1/admin/dashboard`,
  ADD_MENTOR: `/api/v1/admin/mentor`,
  ADD_KATEGORI: `/api/v1/admin/category`,
  ADD_LESSON: `/api/v1/admin/lesson`,
  GET_CHAPTER: `/api/v1/admin/chapter`,
  GET_COURSE: `/api/v1/admin/course`,
  // PUT_COURSE: (id) => {
  //   return `/api/v1/admin/course/${id}`;
  // },
  KELOLA_KELAS: `/api/v1/admin/kelolakelas`,
  DELETE_COURSE: (id) => `/api/v1/admin/course/${id}`,
};
