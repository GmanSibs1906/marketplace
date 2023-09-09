import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { findLogo } from "../../assets/images/index";

function FindAccomodation() {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="FindAccomodation" prevLocation={prevLocation} />
      <div className="pb-10">
        <p className="max-w-[600px] text-base text-lightText mb-2">
          <img src={findLogo} className=" h-[40px] object-contain " alt="" /> is
          one of the world's leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool
          looking style.
        </p>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FindAccomodation;
