import { getDataKategoriBelajar } from "../../services/kategoribelajar";
import { setkategoribelajar } from "../reducer/kategoribelajarr";

export const getDatakategori = () => async (dispatch) => {
  return getDataKategoriBelajar()
    .then((Response) => {
      const kategori12 = Response.data.results;
      console.log(kategori12, "kategori belajar");
      dispatch(setkategoribelajar(kategori12));
    })
    .catch((err) => {});
};
