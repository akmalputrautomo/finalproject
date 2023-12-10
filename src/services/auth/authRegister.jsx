import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";
import { useMutation } from "@tanstack/react-query";

const RegisterUser = async (input) => {
  try {
    await http.post(endpoint.REGISTER_USER, input);
  } catch (error) {}
};

const useCreateUser = () => {
  return useMutation(RegisterUser);
};
export { RegisterUser, useCreateUser };
