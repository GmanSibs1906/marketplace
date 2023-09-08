import React from "react";
import { findLogo } from "../../assets/images/index";

const FindIt = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
        <div className="flex">
          <img
            src={findLogo}
            alt=""
            className=" w-[60px] object-contain  ml-[50%] "
          />
        </div>
        <div className=" flex border-[2px] border-[#157ef6] w-[150px] justify-center rounded-md items-center gap-2 shadow-sm hover:shadow-md duration-300">
          <button className="text-[#f47b46] text-base">Item</button>
        </div>
        <div className="flex border-[2px] border-[#157ef6] w-[150px] justify-center rounded-md items-center gap-2 shadow-sm hover:shadow-md duration-300">
          <button className="text-[#f47b46] text-base"> Service </button>
        </div>
        <div className="flex border-[2px] border-[#157ef6] w-[150px] justify-center rounded-md items-center gap-2 shadow-sm hover:shadow-md duration-300">
          <button className="text-[#f47b46] text-base">Accomodation</button>
        </div>
      </div>
    </div>
  );
};

export default FindIt;
