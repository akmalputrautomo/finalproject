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
    <div className="bg-[#CFE2E080] px-[1rem] desktop:px-[9rem] py-[1.5rem]">
      <div className="flex justify-between">
        <span className="text-xl font-bold text-[#000000]">Kategori Belajar</span>
        <button className="text-xs font-bold text-[#116E63] hover:opacity-70">Lihat Semua</button>
      </div>

      {/* image map */}
      {/* {belajar.map((film) => (
        <h1>{film.title}</h1>
      ))} */}

      {/* .slice(0, 4).map */}

      <div className="grid grid-cols-2 desktop:grid-cols-6 py-5 gap-[2rem]">
        {/* card 1 */}
        <div className="space-y-5">
          <div className="flex w-full h-[136px] bg-emerald-500 rounded-3xl"></div>
          <div className="text-center font-bold text-sm">UI/UX Design</div>
        </div>
        {/* card 2 */}
        <div className="space-y-5">
          <div className="flex w-full h-[136px] bg-emerald-500 rounded-3xl"></div>
          <div className="text-center font-bold text-sm">Product Management</div>
        </div>
        {/* card 3 */}
        <div className="space-y-5">
          <div className="flex w-full h-[136px] bg-emerald-500 rounded-3xl"></div>
          <div className="text-center font-bold text-sm">Web Development</div>
        </div>
        {/* card 4 */}
        <div className="space-y-5">
          <div className="flex w-full h-[136px] bg-emerald-500 rounded-3xl"></div>
          <div className="text-center font-bold text-sm">Android Development</div>
        </div>
        {/* card 5 */}
        <div className="space-y-5">
          <div className="flex w-full h-[136px] bg-emerald-500 rounded-3xl"></div>
          <div className="text-center font-bold text-sm">IOS Development</div>
        </div>
        {/* card 6 */}
        <div className="space-y-5">
          <div className="flex w-full h-[136px] bg-emerald-500 rounded-3xl"></div>
          <div className="text-center font-bold text-sm">Data Science</div>
        </div>
        
      </div>
      {/* map */}
      {belajar && belajar.map((film) => <p key={film.id}>{film.name} </p>)}
    </div>
  );
};
