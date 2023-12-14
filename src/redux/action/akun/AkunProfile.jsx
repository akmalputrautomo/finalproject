import { reduxAkunProfile } from "../../../services/akun/akunprofile";
import { setakunprofile } from "../../reducer/akun/akunprofileredux";

const getakunprofile = (userid, input) => async (dispatch) => {
  return reduxAkunProfile(userid, input)
    .then((result) => {
      dispatch(setakunprofile(input));
      return result;
    })
    .catch((err) => console.error(err, "error"));
};

export default getakunprofile;
