import React from 'react';
import { shopItems } from "../../../constants";
import ProductListing from '../../Listings/ProductListing';

function SalesPage({selectedCategory}) {
    const catToCheck = selectedCategory;
  return (
    <div className=' flex flex-wrap w-full justify-between  '>
    {console.log(selectedCategory)}
    {shopItems.map((item) => {
        if ((item.category).includes(catToCheck))  {
          return (
            <div key={item._id} className="max-w-[400px] max-h-[400px] my-[20px]">
              <ProductListing
                _id={item._id}
                userImg={item.userImg}
                userName={item.userName}
                userRating={item.userRating}
                userSales={item.userSales}
                img={item.img}
                productName={item.productName}
                price={item.price}
                condition={item.condition}
                des={item.des}
                badge={true}
                category={item.category}
              />
            </div>
          );
      }
      if (catToCheck === "all") {
          return (
            <div key={item._id} className="max-w-[400px] max-h-[400px] my-[20px]">
              <ProductListing
                _id={item._id}
                userImg={item.userImg}
                userName={item.userName}
                userRating={item.userRating}
                userSales={item.userSales}
                img={item.img}
                productName={item.productName}
                price={item.price}
                condition={item.condition}
                des={item.des}
                badge={true}
                category={item.category}
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

export default SalesPage