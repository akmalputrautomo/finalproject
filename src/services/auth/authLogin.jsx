import { endpoint } from "../../utils/endpoint";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { useMutation } from "@tanstack/react-query";
import http from "../../utils/Http";

const fetchLogin = async (input) => {
  return await http
    .post(endpoint.LOGIN_USER, input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      window.location.href = "/home";
      return result;
    })
    .catch((err) => {
      alert("Error Boss");
    });
};

const useLoginUser = () => {
  return useMutation(fetchLogin);
};

// export const reduxLoginUser = async (input) => {
//   return await httpbinar.post(API_ENDPOINT.LOGIN_USER, input);
// };

// const useLogin = () => {
//   return useMutation(fetchLogin);
// };

export { useLoginUser, fetchLogin };
