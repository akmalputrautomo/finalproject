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
  COURSE_POPULAR: (id) => {
    return `/api/v1/course/populer/${id}`;
  },
  AKUN_PROFILE: (userId) => `/api/v1/accounts/updateprofile/${userId}`,
  UPDATE_PASS: (userId) => `/api/v1/accounts/updatepassword/${userId}`,
  NOTIFIKASI: (userId) => `/api/v1/accounts/notification/${userId}`,
};
