import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";

const Category = ({onSelectCategory}) => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);

  const items = [
    {
      _id: 990,
      title: "Popular",
      icons: true,
    },
    {
      _id: 991,
      title: "Clothing",
    },
    {
      _id: 992,
      title: "House Items",
      icons: true,
    },
    {
      _id: 993,
      title: "Electronics",
    },
  ];

  // Function to handle item click and set the selected category
  const handleItemClick = (title) => {
    onSelectCategory(title);
  }


  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={false} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {items.map(({ _id, title, icons }) => (
            <li
              key={_id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
              onClick={() => handleItemClick(title)} // Call the function on item click
            >
              {title}
              {icons && (
                <span
                  onClick={() => setShowSubCatOne(!showSubCatOne)}
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                >
                  {/* <ImPlus /> */}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;