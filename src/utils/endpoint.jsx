export const endpoint = {
  LOGIN_USER: "/api/v1/auth/login",
  REGISTER_USER: "/api/v1/auth/register",
  COURSE_CATEGORIES: "/api/v1/categories",
  COURSE_DETAILS: "/api/v1/categories/detail",
  COURSE_POPULAR :(id)=> `/api/v1/course/populer/${id}`
};
