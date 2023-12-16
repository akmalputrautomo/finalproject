import { reduxNotifikasi } from "../../../services/akun/notifikasi";
import { setnontifakun } from "../../reducer/akun/NotifikasiRedux";

const getDatanotifikasi = (courseId) => async (dispatch) => {
  return reduxNotifikasi(courseId)
    .then((result) => {
      dispatch(setnontifakun(result.data.data));
    })
    .catch((err) => console.error(err, "error"));
};

export default getDatanotifikasi;
