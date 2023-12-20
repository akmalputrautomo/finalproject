import http from "../utils/Http"
import { endpoint } from "../utils/endpoint"

export const reduxGetCourseAll = async () => {
  // const queryString = `?categoryId=${categoryId || ''}&level=${level || ''}&sortBy=${sortBy || ''}`;
  return await http.get(endpoint.COURSE_ALL);
} 