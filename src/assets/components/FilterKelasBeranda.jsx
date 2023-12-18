import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { useState } from "react";

export const FilterKelasBeranda = () => {
  return (
    <div>
      <div className="px-5 space-y-5">
        <div className="rounded-lg bg-white px-0 desktop:p-5 space-y-4">
          <div>
            <span className="text-lg font-bold text-black hidden desktop:block">Filter</span>
            <div className="pl-1 py-2 space-y-2 text-xs">
              <CheckboxGroup>
                <Checkbox value="baru">
                  <span className="text-sm">Paling Baru</span>
                </Checkbox>
                <Checkbox value="populer">
                  <span className="text-sm">Paling Populer</span>
                </Checkbox>
                <Checkbox value="promo">
                  <span className="text-sm">Promo</span>
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>

          <div>
            <span className="text-lg font-bold text-black">Kategori</span>
            <div className="pl-1 py-2 space-y-2">
              <CheckboxGroup>
                <Checkbox value="ui/ux">
                  <span className="text-sm">UI/UX Design</span>
                </Checkbox>
                <Checkbox value="ui/ux">
                  <span className="text-sm">Web Development</span>
                </Checkbox>
                <Checkbox value="ui/ux">
                  <span className="text-sm">Android Development</span>
                </Checkbox>
                <Checkbox value="ui/ux">
                  <span className="text-sm">Data Science</span>
                </Checkbox>
                <Checkbox value="ui/ux">
                  <span className="text-sm">Business Intelligence</span>
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>

          <div>
            <span className="text-lg font-bold text-black">Level Kesulitan</span>
            <div className="pl-1 py-2 space-y-2">
              <CheckboxGroup>
                <Checkbox value="ui/ux">
                  <span className="text-sm">Semua Level</span>
                </Checkbox>
                <Checkbox value="web">
                  <span className="text-sm">Beginner Level</span>
                </Checkbox>
                <Checkbox value="android">
                  <span className="text-sm">Intermediate Level</span>
                </Checkbox>
                <Checkbox value="data">
                  <span className="text-sm">Advanced level</span>
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>

          {/* kelas populer */}

          <button className="flex items-center h-10 text-white desktop:text-[#DB1B1B] text-md hover:opacity-70 flex justify-center w-full pt-2 desktop:pt-10 desktop:pb-5 bg-[#DB1B1B] desktop:bg-transparent rounded-md">Hapus Filter</button>
        </div>
      </div>
    </div>
  );
};
