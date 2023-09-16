import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";

const Seller = () => {
  const [showColors, setShowColors] = useState(true);
  const colors = [
    {
      _id: 9001,
      title: "Trusted",
    },
    {
      _id: 9002,
      title: "Popular",
    },
    // {
    //   _id: 9003,
    //   title: "New",
    // },
    // {
    //   _id: 9004,
    //   title: "4+ ⭐️",
    // },
    // {
    //   _id: 9005,
    //   title: "Blue",
    //   base: "#3b82f6",
    // },
  ];

  return (
    <div>
      <div
        onClick={() => setShowColors(!showColors)}
        className="cursor-pointer"
      >
        <NavTitle title="Search by Advertiser" icons={false} />
      </div>
      {showColors && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {colors.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Seller;
