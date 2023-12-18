import { reduxLoginUser } from "../../../services/auth/authLogin";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";
import { setIsLoggedIn, setName, setToken, setUserLogin } from "../../reducer/auth/authSliceLoginUser";

export const authLoginUser = (input) => async (dispatch) => {
  return reduxLoginUser(input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsLoggedIn("true"));
      dispatch(setUserLogin(input));
      dispatch(setName(result.data.data.users));
      return result;
    })
    .catch((err) => {
      alert("salah");
    });
};

export const LogOut = () => (dispatch) => {
  dispatch(setToken(""));
  dispatch(setIsLoggedIn(false));
  CookieStorage.remove(CookieKeys.AuthToken);
  window.location.href = "/";
};
