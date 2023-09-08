import React from "react";
import { findLogo } from "../../../assets/images/index";

const ShopNow = () => {
  return (
    <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold flex justify-center items-center">
      <img
        src={findLogo}
        alt=""
        className=" flex justify-center items-center h-[30px] object-contain "
      />
    </button>
  );
};

export default ShopNow;
