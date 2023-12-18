import { reduxProfile } from "../../../services/akun/akunprofile";
import { setakunprofile } from "../../reducer/akun/akunprofileredux";

const getakunprofile = (formData) => async (dispatch) => {
  return reduxProfile(formData)
    .then((result) => {
      dispatch(setakunprofile(formData));
      return result;
    })
    .catch((err) => console.error(err, "error"));
};

export default getakunprofile;
