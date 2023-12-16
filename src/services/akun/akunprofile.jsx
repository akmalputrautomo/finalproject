import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const reduxProfile = async (userId, formData) => {
  return await http.put(endpoint.AKUN_PROFILE(userId), formData);
};
