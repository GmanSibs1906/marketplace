import React from "react";
import Heading from "../Products/Heading";
import ServiceListing from "../../Listings/ServiceListing";
import {
  serviceOne,
  serviceTwo,
  serviceThree,
  more,
  user4,
  user5,
  user6,
} from "../../../assets/images/index";


const Services = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Services" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <ServiceListing
          _id="1111"
          userImg={user4}
          userName={"Sarah Brown "}
          userRating={4}
          userSales={11}
          img={serviceOne}
          serviceName="Garden Services"
          price="350.00"
          location="Johannesburg North"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.."
          badge={true}
        />
        <ServiceListing
          _id="1112"
          userImg={user5}
          userName={"Amanda Botha"}
          userRating={3}
          userSales={6}
          img={serviceTwo}
          serviceName="Solar System Installers"
          price="2000.00"
          location="Gauteng"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.."
          badge={true}
        />
        <ServiceListing
          _id="1013"
          userImg={user6}
          userName={"Sally Stone"}
          userRating={5}
          userSales={11}
          img={serviceThree}
          serviceName="Machanic"
          price="250.00"
          location="KZN"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.."
          badge={true}
        />
        <img src={more} className="  " alt="" />
      </div>
    </div>
  );
};

export default Services;
