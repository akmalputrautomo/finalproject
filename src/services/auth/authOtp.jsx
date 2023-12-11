import { toast } from "react-toastify";
import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";
import { useMutation } from "@tanstack/react-query";

const RegisterOtp = async (input) => {
  try {
    await http.put(endpoint.REGISTER_OTP, input);
    window.location.href = "/";
  } catch (error) {}
};

const useCreateOtp = () => {
  return useMutation(RegisterOtp);
};
export { RegisterOtp, useCreateOtp };
