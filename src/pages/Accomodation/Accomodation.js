import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ShopSideNav from "../../components/pageProps/accomodationPage/AccomodationSideNav";
import AccomodationPage from "../../components/home/Accomodation/AccomodationPage";

const Accomodation = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Accomodation" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav onSelectCategory={handleCategorySelect}/>
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          {/* <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} /> */}
          <AccomodationPage selectedCategory= {selectedCategory}/>
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Accomodation;
