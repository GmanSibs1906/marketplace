import React from 'react';
import { accomodationItems } from "../../../constants";
import AccomodationListing from '../../Listings/AccomodationListing';

function ServicesPage({selectedCategory}) {
    const catToCheck = selectedCategory;
  return (
    <div className=' flex flex-wrap w-full justify-between  '>
    {console.log(selectedCategory)}
    {accomodationItems.map((item) => {
        if ((item.category).includes(catToCheck))  {
          return (
            <div key={item._id} className="max-w-[400px] max-h-[400px] my-[20px]">
              <AccomodationListing
                _id={item._id}
                userImg={item.userImg}
                userName={item.userName}
                userRating={item.userRating}
                userSales={item.userSales}
                img={item.img}
                accomodationTitle={item.accomodationTitle}
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
              <AccomodationListing
                _id={item._id}
                userImg={item.userImg}
                userName={item.userName}
                userRating={item.userRating}
                userSales={item.userSales}
                img={item.img}
                accomodationTitle={item.accomodationTitle}
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