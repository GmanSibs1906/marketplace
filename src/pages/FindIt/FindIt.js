import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { findAdd } from "../../assets/images/index";

function FindIt() {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="FindIt" prevLocation={prevLocation} />
      <div className="pb-10">
        {/* FindIt text Image */}
        <div className="flex w-full items-center justify-between mb-[100px]">
          <h1 className="max-w-[600px] text-base text-lightText mr-[50px]">
            <span className="text-primeColor font-semibold text-lg">
              FindIt :{" "}
            </span>{" "}
            Are you tired of the traditional way of searching for products,
            services, or accommodations? At our platform, we're revolutionizing
            the way you find what you need, putting the power back in your
            hands.
          </h1>
          <img src={findAdd} alt="" className=" w-[50%] object-contain " />
        </div>

        {/* Find categories text Image */}
        <div className="flex flex-col">
          {/* FindItem */}
          <div className="flex w-full mb-[100px]">
            <h1 className="max-w-[600px] text-base text-lightText mb-2">
              <span className="text-primeColor font-semibold text-lg">
                FindItem :{" "}
              </span>{" "}
              Have you ever seen something you loved but couldn't find it
              online? Our platform allows you to upload a picture of any item
              you desire, and our sellers will come to you with their offers.
              Say goodbye to endless scrolling and hello to tailored options.
            </h1>
            <Link
              to="/findItem"
              className=" w-full flex justify-center items-center "
            >
              <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                FindItem
              </button>
            </Link>
          </div>

          {/* FindService */}
          <div className="flex w-full mb-[100px]">
            <h1 className="max-w-[600px] text-base text-lightText mb-2">
              <span className="text-primeColor font-semibold text-lg">
                FindService :{" "}
              </span>{" "}
              Stuck on the side of the road with a car problem? Need a plumber
              ASAP? Our platform connects you with service providers in
              real-time. Post your request, and qualified professionals will
              respond promptly. No more waiting around for help
            </h1>
            <Link
              to="/findService"
              className=" w-full flex justify-center items-center "
            >
              <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                Find Service
              </button>
            </Link>
          </div>

          {/* FindAccomodation */}
          <div className="flex w-full mb-[100px]">
            <h1 className="max-w-[600px] text-base text-lightText mb-2">
              <span className="text-primeColor font-semibold text-lg">
                FindAccomodation :{" "}
              </span>{" "}
              Finding the perfect place to stay has never been easier. Specify
              your budget, preferred features, and location, and let our
              dedicated agents do the hard work for you. They'll send you
              options that match your criteria, so you can choose the one that
              suits you best.
            </h1>
            <Link
              to="/findAccomodation"
              className=" w-full flex justify-center items-center "
            >
              <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                Find Accomodation
              </button>
            </Link>
          </div>

          <h1 className=" text-base text-lightText mb-2">
            <span className="text-primeColor font-semibold text-lg">
              Options Galore, Rated Providers, and Unbeatable Deals :{" "}
            </span>{" "}
            We believe in giving you choices. Our platform showcases rated
            providers and the best deals in one place. Compare, contrast, and
            select what works for you.
            <p className="mt-[20px]">
              Discover a new way to search – efficient, convenient, and
              personalized. Whether you're looking for products, services, or
              accommodations, we've got you covered. Join our community and
              experience the future of search today!
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FindIt;
