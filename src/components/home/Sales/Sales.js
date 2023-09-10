import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  more,
} from "../../../assets/images/index";

const Sales = () => {
  return (
    <div className="w-full pb-16">
      <Heading heading="Sales" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={newArrOne}
          productName="Nike Airforce"
          price="350.00"
          color="New"
          badge={true}
          des="Original Size 8."
        />
        <Product
          _id="1102"
          img={newArrTwo}
          productName="Couch"
          price="650.00"
          color="Used"
          badge={false}
          des="4 seater couch still in usable condition."
        />
        <Product
          _id="1103"
          img={newArrThree}
          productName="Bicycle"
          price="2500.00"
          color="Used"
          badge={true}
          des="Used bicycle. As good as new."
        />
        <img src={more} className="  " alt="" />
      </div>
    </div>
  );
};

export default Sales;
