import { reduxGetCourseDetail } from "../../services/get-data-courses-detail";
import { setCourseDetail } from "../reducer/GetCourseDetail";


const getDataDetail = (courseId) => async (dispatch) => {
    return reduxGetCourseDetail(courseId).then((result) => {
      dispatch(setCourseDetail(result.data.data.data))
      console.log(result)
    }).catch((err) => 
    console.error(err, "error")
    );
  };
  
  export default getDataDetail;