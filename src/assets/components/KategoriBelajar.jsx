import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDatakategori } from "../../redux/action/kategoribelajarrr";

export const KategoriBelajar = () => {
  const dispatch = useDispatch();

  const getkategoribelajarrrr = () => {
    dispatch(getDatakategori());
  };
  // console.log(getkategoribelajarrrr, "123");

  useEffect(() => {
    getkategoribelajarrrr();
  }, []);

  const belajar = useSelector((state) => state);
  // console.log(belajar, "belajar");

  return (
    <div className="bg-[#CFE2E080] px-[9rem] py-[1.5rem]">
      <div className="flex justify-between">
        <span className="text-[1.8rem] font-bold text-[#000000]">Kategori Belajar</span>
        <button className="text-[1.2rem] font-bold text-[#116E63] hover:opacity-80">Lihat Semua</button>
      </div>

      {/* image map */}
    </div>
  );
};
