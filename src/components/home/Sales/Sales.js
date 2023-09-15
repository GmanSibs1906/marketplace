import React from "react";
import Heading from "../Products/Heading";
import ProductListing from "../../Listings/ProductListing";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  more,
  user1,
  user2,
  user3,
} from "../../../assets/images/index";

const Sales = () => {
  return (
    <div className="w-full pb-16">
      <Heading heading="Sales" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <ProductListing
          _id="1101"
          userImg={user1}
          userName={"Kwanele Maduna"}
          userRating={4}
          userSales={11}
          img={newArrOne}
          productName="Nike Airforce"
          price="350.00"
          condition="New"
          des="Original Size 8."
          badge={true}
        />
        <ProductListing
          _id="1102"
          userImg={user2}
          userName={"Themba Ndlovu"}
          userRating={3}
          userSales={11}
          img={newArrTwo}
          productName="Couch"
          price="650.00"
          condition="Used"
          des="4 seater couch still in usable condition."
          badge={true}
        />
        <ProductListing
          _id="1103"
          userImg={user3}
          userName={"Sarah Jones"}
          userRating={4}
          userSales={8}
          img={newArrThree}
          productName="Used bicycle."
          price="2500.00"
          condition="Used"
          des="Used bicycle. As good as new."
          badge={true}
        />
        <img src={more} className="  " alt="" />
      </div>
    </div>
  );
};

export default Sales;
