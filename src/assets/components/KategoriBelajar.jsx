import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDatakategori } from "../../redux/action/kategoribelajarrr";

export const KategoriBelajar = () => {
  const dispatch = useDispatch();

  const getkategoribelajarrrr = () => {
    dispatch(getDatakategori());
  };

  const belajar = useSelector((state) => state.kategori.kategori.categories);
  console.log(belajar, "belajar");

  useEffect(() => {
    getkategoribelajarrrr();
  }, []);

  return (
    <div className="bg-[#CFE2E080] px-[9rem] py-[1.5rem]">
      <div className="flex justify-between">
        <span className="text-[1.8rem] font-bold text-[#000000]">Kategori Belajar</span>
        <button className="text-[1.2rem] font-bold text-[#116E63] hover:opacity-80">Lihat Semua</button>
      </div>

      {/* map */}
      {belajar && belajar.map((film) => <p key={film.id}>{film.name} </p>)}
    </div>
  );
};
