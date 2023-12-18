export const endpoint = {
  LOGIN_USER: "/api/v1/auth/login",
  REGISTER_USER: "/api/v1/auth/register",
  VERIFY_OTP: "/api/v1/auth/verify",
  RESEND_OTP: "/api/v1/auth/verify/newOtp",
  FORGET_PASS: "/api/v1/auth/forget-password",
  RESET_PASS: "/api/v1/auth/reset-password",
  COURSE_CATEGORIES: "/api/v1/categories",
  COURSE_DETAILS: (id) => {
    return `/api/v1/course/details/${id}`;
  },
  COURSE_POPULAR: (id) => {
    return `/api/v1/course/populer/${id}`;
  },
  AKUN_PROFILE: `/api/v1/accounts/updateprofile`,
  UPDATE_PASS: `/api/v1/accounts/updatepassword`,
  NOTIFIKASI: `/api/v1/accounts/notification`,
  COURSE_SEARCH: "/api/v1/course/search",
  FREE_KELASSAYA: "/api/v1/course/free",
};
