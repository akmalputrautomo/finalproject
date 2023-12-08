import React from "react";

import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";

export const FilterKelasBeranda = () => {
  return (
    <div>
      <div className="px-5 space-y-5">
        <div className="rounded-lg bg-white p-5 space-y-4">
          <div>
            <span className="text-[1.2rem] font-bold text-black">Filter</span>
            <div className="pl-1 py-2 space-y-2">
              <CheckboxGroup>
                <Checkbox value="baru">Paling Baru</Checkbox>
                <Checkbox value="populer">Paling Populer</Checkbox>
                <Checkbox value="promo">Promo</Checkbox>
              </CheckboxGroup>
            </div>
          </div>

          <div>
            <span className="text-[1.2rem] font-bold text-black">Kategori</span>
            <div className="pl-1 py-2 space-y-2">
              <CheckboxGroup>
                <Checkbox value="ui/ux">UI/UX Design</Checkbox>
                <Checkbox value="web">Web Development</Checkbox>
                <Checkbox value="android">Android Development</Checkbox>
                <Checkbox value="data">Data Science</Checkbox>
                <Checkbox value="business">Business Intelligence</Checkbox>
              </CheckboxGroup>
            </div>
          </div>

          <div>
            <span className="text-[1.2rem] font-bold text-black">Level Kesulitan</span>
            <div className="pl-1 py-2 space-y-2">
              <CheckboxGroup>
                <Checkbox value="ui/ux">Semua Level</Checkbox>
                <Checkbox value="web">Beginner Level</Checkbox>
                <Checkbox value="android">Intermediate Level</Checkbox>
                <Checkbox value="data">Advanced level</Checkbox>
              </CheckboxGroup>
            </div>
          </div>

          <button className="text-[#DB1B1B] text-md hover:opacity-80 flex justify-center w-full pt-10">Hapus Filter</button>
        </div>
      </div>
    </div>
  );
};
