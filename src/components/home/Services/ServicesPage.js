import React from 'react';
import { serviceItems } from "../../../constants";
import ServiceListing from '../../Listings/ServiceListing';

function ServicesPage({selectedCategory}) {
    const catToCheck = selectedCategory;
  return (
    <div className=' flex flex-wrap w-full justify-between  '>
    {console.log(selectedCategory)}
    {serviceItems.map((item) => {
        if ((item.category).includes(catToCheck))  {
          return (
            <div key={item._id} className="max-w-[400px] max-h-[400px] my-[20px]">
              <ServiceListing
                _id={item._id}
                userImg={item.userImg}
                userName={item.userName}
                userRating={item.userRating}
                userSales={item.userSales}
                img={item.img}
                serviceName={item.serviceName}
                price={item.price}
                condition={item.condition}
                des={item.des}
                badge={true}
                location={item.location}
              />
            </div>
          );
        }
      if (catToCheck === "all") {
          return (
            <div key={item._id} className="max-w-[400px] max-h-[400px] my-[20px]">
              <ServiceListing
                _id={item._id}
                userImg={item.userImg}
                userName={item.userName}
                userRating={item.userRating}
                userSales={item.userSales}
                img={item.img}
                serviceName={item.serviceName}
                price={item.price}
                condition={item.condition}
                des={item.des}
                badge={true}
                location={item.location}
              />
            </div>
          );
        }
      return null;
    }
    )}
    </div>
  )
}

export default ServicesPage