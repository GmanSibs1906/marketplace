import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { spfOne, spfTwo, spfThree, more } from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Accomodation" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Garden Cottage"
          price="3500.00"
          color="Bryanston"
          badge={true}
          des="Bachelors garden cottage. Price includes water and electricity"
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Breakfast & Bed"
          price="980.00"
          color="Sandton"
          badge={true}
          des="Safe location with beautiful views. Price is per night."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="1 bed Flat"
          price="6000.00"
          color="Midrand"
          badge={true}
          des="New building located close to Mall of Africa and freeway"
        />
        <img src={more} className="  " alt="" />
      </div>
    </div>
  );
};

export default SpecialOffers;
