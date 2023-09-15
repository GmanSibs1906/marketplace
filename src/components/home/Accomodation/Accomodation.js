import React from "react";
import Heading from "../Products/Heading";
import AccomodationListing from "../../Listings/AccomodationListing";
import { spfOne, spfTwo, spfThree, more,  user7,
  user8,
  user9, } from "../../../assets/images/index";


const Accomodation = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Accomodation" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <AccomodationListing
          _id="1014"
          userImg={user7}
          userName={"Joe Wills"}
          userRating={2}
          userListings={5}
          img={spfOne}
          accomodationTitle="Garden Cottage"
          price="2500.00"
          location="Randburg"
          des="Bachelors garden cottage. Price includes water and electricity"
          badge={true}
        />
        <AccomodationListing
          _id="1015"
          userImg={user8}
          userName={"Mat Black"}
          userRating={4}
          userListings={5}
          img={spfTwo}
          accomodationTitle="Breakfast & Bed"
          price="1250.00"
          location="Sandton"
          des="Safe location with beautiful views. Price is per night."
          badge={true}
        />
         <AccomodationListing
          _id="1016"
          userImg={user9}
          userName={"Sarah Joe"}
          userRating={4}
          userListings={11}
          img={spfThree}
          accomodationTitle="1 bed Flat"
          price="6000.00"
          location="Midrand"
          des="New building located close to Mall of Africa and freeway."
          badge={true}
        />
        <img src={more} className="  " alt="" />
      </div>
    </div>
  );
};

export default Accomodation;
