import React from "react";
import { Link } from "react-router-dom";
import { findAdd } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";

const FindItAdd = () => {
  return (
    <Link to="/shop" className=" flex-col ">
      <div className=" flex justify-center items-center  h-80 mb-20 ">
        <Image className="h-[100%] hidden md:inline-block" imgSrc={findAdd} />
      </div>
      <div className=" w-full flex justify-center mt-[-70px] mb-[50px] ">
        <ShopNow />
      </div>
    </Link>
  );
};

export default FindItAdd;
