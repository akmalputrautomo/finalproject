import { useMutation } from "@tanstack/react-query";
import { endpoint } from "../../utils/endpoint";
import http2 from "../../utils/Http2";
import { Navigate } from "react-router-dom";

// export const reduxProfile = async (input) => {
//   return await http.put(endpoint.AKUN_PROFILE, input);
// };

const DataProfil = async (input) => {
  return await http2
    .put(endpoint.AKUN_PROFILE, input)
    .then((result) => {
      alert("succes memperbarui akun");
    })
    .catch((err) => {
      alert("gagal memperbarui akun");
    });
};

const useDataProfil = () => {
  return useMutation(DataProfil);
};
export { DataProfil, useDataProfil };
