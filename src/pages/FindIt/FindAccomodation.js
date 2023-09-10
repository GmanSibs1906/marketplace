import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { findAccomodation } from "../../assets/images";

function FindAccomodation() {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  const [formData, setFormData] = useState({
    option: "rentals",
    location: "",
    type: [],
    bedrooms: [],
    bathrooms: [],
    bathroomType: "shower",
    carports: "1",
    price: [],
    guests: "1",
    additionalNotes: "",
  });

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const isChecked = event.target.checked;
      const updatedOptions = isChecked
        ? [...formData[name], value]
        : formData[name].filter((option) => option !== value);

      setFormData({
        ...formData,
        [name]: updatedOptions,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to a server or perform other actions).
    console.log(formData);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="FindAccomodation" prevLocation={prevLocation} />
      <div className="flex w-full">
        {/* Rentals and BNB forms */}
        <div className="max-w-[450px] mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Accomodation Form</h2>
          <form onSubmit={handleSubmit}>
            {/* choose between rental or bnb */}
            <div className="mb-4">
              <label htmlFor="option" className="block text-gray-700">
                Select an Option:
              </label>
              <select
                name="option"
                value={formData.option}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              >
                <option value="rentals">Rentals</option>
                <option value="short-stay">Short Stay</option>
              </select>
            </div>

            {/* if choice is rental */}
            {formData.option === "rentals" && (
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block text-gray-700 font-bold text-lg "
                  >
                    Location:
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Sandton, Hillcrest etc"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold text-lg">
                    Type:
                  </label>
                  <div>
                    <label className="inline-flex items-center ml-[40px] ">
                      <input
                        type="checkbox"
                        name="type"
                        value="house"
                        checked={formData.type.includes("house")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      House
                    </label>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="type"
                        value="house"
                        checked={formData.type.includes("complex")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Complex
                    </label>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="type"
                        value="house"
                        checked={formData.type.includes("flat")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Flat
                    </label>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="type"
                        value="house"
                        checked={formData.type.includes("cottage")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Cottage
                    </label>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="type"
                        value="house"
                        checked={formData.type.includes("room")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Room
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold text-lg">
                    Bedrooms:
                  </label>
                  <div>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="bedrooms"
                        value="1 bed"
                        checked={formData.bedrooms.includes("1 bed")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      1 Bed
                    </label>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="bedrooms"
                        value="1 bed"
                        checked={formData.bedrooms.includes("2 bed")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      2 Bed
                    </label>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="bedrooms"
                        value="1 bed"
                        checked={formData.bedrooms.includes("3 bed")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      3 Bed
                    </label>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="bedrooms"
                        value="1 bed"
                        checked={formData.bedrooms.includes("4 bed")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      4 Bed
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold text-lg">
                    Bathrooms:
                  </label>
                  <div>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="bathrooms"
                        value="1 bathroom"
                        checked={formData.bathrooms.includes("1 bathroom")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      1 Bathroom
                    </label>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="bathrooms"
                        value="1 bathroom"
                        checked={formData.bathrooms.includes("2 bathrooms")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      2 Bathrooms
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="bathroomType"
                    className="block text-gray-700 font-bold text-lg"
                  >
                    Bathroom Type:
                  </label>
                  <select
                    name="bathroomType"
                    value={formData.bathroomType}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  >
                    <option value="shower">Shower</option>
                    <option value="bath">Bath</option>
                    <option value="both">Both</option>
                    <option value="any">Any</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="carports"
                    className="block text-gray-700 font-bold text-lg"
                  >
                    Carports:
                  </label>
                  <select
                    name="carports"
                    value={formData.carports}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold text-lg">
                    Price Range:
                  </label>
                  <div>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="price"
                        value="R0 - R3000"
                        checked={formData.price.includes("R0 - R3000")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      R0 - R3000
                    </label>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="price"
                        value="R0 - R3000"
                        checked={formData.price.includes("R3000 - R5000")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      R3000 - R5000
                    </label>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="price"
                        value="R0 - R3000"
                        checked={formData.price.includes("R5000 - R7000")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      R5000 - R7000
                    </label>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="price"
                        value="R0 - R3000"
                        checked={formData.price.includes("R7000 - R9000")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      R7000 - R9000
                    </label>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="price"
                        value="R0 - R3000"
                        checked={formData.price.includes("R9000 - R11000")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      R9000 - R11000
                    </label>
                    <label className="inline-flex items-center ml-[40px]">
                      <input
                        type="checkbox"
                        name="price"
                        value="R0 - R3000"
                        checked={formData.price.includes("R11k +")}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      R11k +
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="additionalNotes"
                    className="block text-gray-700 font-bold text-lg"
                  >
                    Additional Notes:
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    rows="4"
                    placeholder="I am looking for a place close to easy access of public trnsport etc..."
                  ></textarea>
                </div>
              </div>
            )}

            {/* if choice is bnb */}
            {formData.option === "short-stay" && (
              <div>
                <div>
                  <div className="mb-4">
                    <label
                      htmlFor="location"
                      className="block text-gray-700 font-bold text-lg"
                    >
                      Location:
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Around Sandton area etc"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="guests"
                      className="block text-gray-700 font-bold text-lg"
                    >
                      Guests:
                    </label>
                    <select
                      name="Gests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="duration"
                      className="block text-gray-700 font-bold text-lg"
                    >
                      Duration of Stay:
                    </label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="3 days"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="price"
                      className="block text-gray-700 font-bold text-lg"
                    >
                      Price (per day):
                    </label>
                    <div>
                      <label className="inline-flex items-center ml-[40px]">
                        <input
                          type="checkbox"
                          name="price"
                          value="R300 - R500"
                          checked={formData.price.includes("R300 - R500")}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        R300 - R500
                      </label>
                      <label className="inline-flex items-center ml-[40px]">
                        <input
                          type="checkbox"
                          name="price"
                          value="R300 - R500"
                          checked={formData.price.includes("R500 - R700")}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        R500 - R700
                      </label>
                      <label className="inline-flex items-center ml-[40px]">
                        <input
                          type="checkbox"
                          name="price"
                          value="R300 - R500"
                          checked={formData.price.includes("R700 - R1000")}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        R700 - R1000
                      </label>
                      <label className="inline-flex items-center ml-[40px]">
                        <input
                          type="checkbox"
                          name="price"
                          value="R300 - R500"
                          checked={formData.price.includes("R1000 - R1500")}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        R1000 - R1500
                      </label>
                      <label className="inline-flex items-center ml-[40px]">
                        <input
                          type="checkbox"
                          name="price"
                          value="R300 - R500"
                          checked={formData.price.includes("R1500 - R2000")}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        R1500 - R2000
                      </label>
                      <label className="inline-flex items-center ml-[40px]">
                        <input
                          type="checkbox"
                          name="price"
                          value="R300 - R500"
                          checked={formData.price.includes("R2k +")}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        R2k +
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="bathroomType"
                      className="block text-gray-700 font-bold text-lg"
                    >
                      Bathroom Type:
                    </label>
                    <select
                      name="bathroomType"
                      value={formData.bathroomType}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    >
                      <option value="shower">Shower</option>
                      <option value="bath">Bath</option>
                      <option value="both">Both</option>
                      <option value="any">Any</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="additionalNotes"
                      className="block text-gray-700 font-bold text-lg"
                    >
                      Additional Notes:
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      rows="4"
                      placeholder="I would like to be able to checkout late etc...."
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-4">
              <button
                type="submit"
                className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* image */}
        <img
          src={findAccomodation}
          className=" max-w-[60%] object-contain "
          alt=""
        />
      </div>
    </div>
  );
}

export default FindAccomodation;
