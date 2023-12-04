import React from "react";
import 'flowbite/dist/flowbite.min.js';

export const FilterKelasBeranda = () => {

  return (
    <div>
      <div className="px-5 space-y-5">
        <div className="rounded-lg bg-white p-5 space-y-4">
          <div>
            <span className="text-[1.3rem] font-bold text-black">Filter</span>
            <div className="pl-1 py-2 space-y-2">
              <div className="space-x-4 flex items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-[#116E63] bg-[#E8F1FF] border-[#B4BDC4] rounded focus:ring-[#116E63] focus:ring-2"/>
                <label for="default-checkbox" class="ms-2 text-md">Paling Baru</label>
              </div>
              <div className="space-x-4 flex items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-[#116E63] bg-[#E8F1FF] border-[#B4BDC4] rounded focus:ring-[#116E63] focus:ring-2"/>
                <label for="default-checkbox" class="ms-2 text-md">Paling Popular</label>
              </div>
              <div className="space-x-4 flex items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-[#116E63] bg-[#E8F1FF] border-[#B4BDC4] rounded focus:ring-[#116E63] focus:ring-2"/>
                <label for="default-checkbox" class="ms-2 text-md">Promo</label>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[1.3rem] font-bold text-black">Kategori</span>
            <div className="pl-1 py-2 space-y-2">
              <div className="space-x-4 flex items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-[#116E63] bg-[#E8F1FF] border-[#B4BDC4] rounded focus:ring-[#116E63] focus:ring-2"/>
                <label for="default-checkbox" class="ms-2 text-md">UI/UX Design</label>
              </div>
              <div className="space-x-4 flex items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-[#116E63] bg-[#E8F1FF] border-[#B4BDC4] rounded focus:ring-[#116E63] focus:ring-2"/>
                <label for="default-checkbox" class="ms-2 text-md">Web Development</label>
              </div>
              <div className="space-x-4 flex items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-[#116E63] bg-[#E8F1FF] border-[#B4BDC4] rounded focus:ring-[#116E63] focus:ring-2"/>
                <label for="default-checkbox" class="ms-2 text-md">Android Development</label>
              </div>
              <div className="space-x-4 flex items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-[#116E63] bg-[#E8F1FF] border-[#B4BDC4] rounded focus:ring-[#116E63] focus:ring-2"/>
                <label for="default-checkbox" class="ms-2 text-md">Data Science</label>
              </div>
              <div className="space-x-4 flex items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-[#116E63] bg-[#E8F1FF] border-[#B4BDC4] rounded focus:ring-[#116E63] focus:ring-2"/>
                <label for="default-checkbox" class="ms-2 text-md">Business Intelligence</label>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[1.3rem] font-bold text-black">Level Kesulitan</span>
            <div className="pl-1 py-2 space-y-2">
              <div className="space-x-4 flex items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-[#116E63] bg-[#E8F1FF] border-[#B4BDC4] rounded focus:ring-[#116E63] focus:ring-2"/>
                <label for="default-checkbox" class="ms-2 text-md">Semua Level</label>
              </div>
              <div className="space-x-4 flex items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-[#116E63] bg-[#E8F1FF] border-[#B4BDC4] rounded focus:ring-[#116E63] focus:ring-2"/>
                <label for="default-checkbox" class="ms-2 text-md">Beginner Level</label>
              </div>
              <div className="space-x-4 flex items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-[#116E63] bg-[#E8F1FF] border-[#B4BDC4] rounded focus:ring-[#116E63] focus:ring-2"/>
                <label for="default-checkbox" class="ms-2 text-md">Intermediate Level</label>
              </div>
              <div className="space-x-4 flex items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-[#116E63] bg-[#E8F1FF] border-[#B4BDC4] rounded focus:ring-[#116E63] focus:ring-2"/>
                <label for="default-checkbox" class="ms-2 text-md">Advanced level</label>
              </div>
            </div>
          </div>

          <button className="text-[#DB1B1B] text-md hover:opacity-80 flex justify-center w-full pt-10">Hapus Filter</button>

        </div>
      </div>
    </div>
  );
};
