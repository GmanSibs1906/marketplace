import React from "react";
import Banner from "../../components/Banner/Banner";
import FindIt from "../../components/Banner/FindIt";
import Services from "../../components/home/Services/Services";
import Sales from "../../components/home/Sales/Sales";
import Sale from "../../components/home/Sale/Sale";
import Accomodation from "../../components/home/Accomodation/Accomodation";
import FindItAdd from "../../components/home/FindItAdd/FindItAdd";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <FindIt />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <Sales />
        <Services />
        <FindItAdd />
        <Accomodation />
      </div>
    </div>
  );
};

export default Home;
