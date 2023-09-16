import React from "react";
import Location from "./shopBy/Location";
import Category from "./shopBy/Category";
import Seller from "./shopBy/Seller";
import Price from "./shopBy/Price";

const ServiceSideNav = ({onSelectCategory}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} onSelectCategory={onSelectCategory} />
      <Seller />
      {/* <Location /> 
  <Price /> */}
    </div>
  );
};

export default ServiceSideNav;
