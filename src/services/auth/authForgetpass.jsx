import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const reduxForgetPass = async (input) => {
    return await http.post(endpoint.FORGET_PASS, input);
  };
  
  export const reduxUpdatePass = async (input, token) => {
    return await http.put(`${endpoint.UPDATE_PASS}?token=${token ? token : ""}`,
    input,);
  };