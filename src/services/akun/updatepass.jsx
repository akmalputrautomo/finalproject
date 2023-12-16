import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const reduxUpdatePass = async (userId, input) => {
  return await http.put(endpoint.UPDATE_PASS(userId), input);
};
