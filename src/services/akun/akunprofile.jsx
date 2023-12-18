import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const reduxProfile = async (formData) => {
  return await http.put(endpoint.AKUN_PROFILE, formData);
};
