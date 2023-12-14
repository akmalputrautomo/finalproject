import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const reduxAkunProfile = async (userid, input) => {
  return await http.put(endpoint.AKUN_PROFILE(userid, input));
};
