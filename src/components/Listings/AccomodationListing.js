import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../designLayouts/Image";
import Badge from "../home/Products/Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/orebiSlice";

const AccomodationListing = (props) => {
  const dispatch = useDispatch();
  const _id = props.accomodationTitle;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const accomodationItem = props;
  const handleAccomodationDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: accomodationItem,
      },
    });
  };
  return (
    <div className="w-full relative group border rounded-[5px]">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div>
          <Image className="w-full h-full" imgSrc={props.img} />
        </div>
        <div className="absolute top-6 left-8">
          {props.userRating > 3 && props.userListings > 9
            ? props.badge && <Badge text="Trusted" />
            : null}
        </div>
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    name: props.accomodationTitle,
                    quantity: 1,
                    image: props.img,
                    badge: props.badge,
                    price: props.price,
                    location: props.location,
                  })
                )
              }
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li className="text-[#767676] hover:text-primeColor h-[50px] text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-between gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              <div className="flex items-center w-[120%] justify-start px-[10px]">
                <button className=" border border-slate-300 px-[4px] py-[2px] rounded-md ">
                  Follow
                </button>
              </div>
              <div className="flex items-center w-[120%] justify-end px-[10px]">
                <p className=" mr-[4px] w-[150px] flex justify-end ">
                  {props.userName}
                </p>
                <img
                  src={props.userImg}
                  className=" h-[23px] object-contains mr-[-2px] rounded-[50%] "
                  alt=""
                />
              </div>
            </li>
            <li className="text-[#767676] hover:text-primeColor h-[50px] text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              <div className="flex items-center w-[120%] justify-end px-[10px]">
                <p>
                  {props.userRating === 1
                    ? "⭐️"
                    : props.userRating === 2
                    ? "⭐️⭐️"
                    : props.userRating === 3
                    ? "⭐️⭐️⭐️"
                    : props.userRating === 4
                    ? "⭐️⭐️⭐️⭐️"
                    : "⭐️⭐️⭐️⭐️⭐️"}
                </p>
              </div>
            </li>

            <li
              onClick={handleAccomodationDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[0px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.accomodationTitle}
          </h2>
          <p className="text-[#767676] text-[14px]">R{props.price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{props.location}</p>
        </div>
      </div>
    </div>
  );
};

export default AccomodationListing;
