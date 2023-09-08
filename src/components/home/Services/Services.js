import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  serviceOne,
  serviceTwo,
  serviceThree,
  more,
} from "../../../assets/images/index";

const Services = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Services" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={serviceOne}
          productName="Garden Services"
          price="150.00"
          color="Blank and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img={serviceTwo}
          productName="New Backpack"
          price="180.00"
          color="Gray"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img={serviceThree}
          productName="Household materials"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <img src={more} className="  " alt="" />
      </div>
    </div>
  );
};

export default Services;
