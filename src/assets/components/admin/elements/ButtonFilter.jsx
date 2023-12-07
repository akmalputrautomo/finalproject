import React from "react";
import Filter from "../../../img/Prefix icon.png";
import IcSearch from '../../../img/Vector.png'

export const ButtonFilter = () => {
  return (
    <div className="flex flex-row gap-2">
      <button className="flex flex-row gap-1 p-1 rounded-[10px] border-1 border-[#116E63] font-bold text-base text-[#116E63]">
        <img src={Filter} alt="" />
        Filter
      </button>
      <button>
        <img src={IcSearch} alt="" />
      </button>
    </div>
  );
};
