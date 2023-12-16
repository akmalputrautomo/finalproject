import { reduxUpdatePass } from "../../../services/akun/updatepass";
import { setupdatepass } from "../../reducer/akun/UpdatePass";

const getupdate = (userId, input) => async (dispatch) => {
  return reduxUpdatePass(userId, input)
    .then((result) => {
      dispatch(setupdatepass(input));
      return result;
    })
    .catch((err) => console.error(err, "error"));
};

export default getupdate;
