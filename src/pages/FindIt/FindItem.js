import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { findItem } from "../../assets/images";

function FindItem() {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  const [formData, setFormData] = useState({
    image: null,
    itemName: "",
    category: "select",
    description: "",
    maxPrice: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform actions with the form data, such as sending it to a server.
    // For now, we'll just log the data to the console.
    console.log(formData);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="FindItem" prevLocation={prevLocation} />
      <div className="flex w-full items-center justify-between">
        {/* form */}
        <div className="p-4 max-w-[600px] mx-auto">
          <h2 className="text-2xl font-bold mb-4">Search by Image</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Upload Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Item Name:</label>
              <input
                type="text"
                name="itemName"
                placeholder="Nike Airmax"
                value={formData.itemName}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div>
              <label>Category:</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="mb-[25px] mt-[10px]"
              >
                <option value="select">Select Category</option>
                <option value="clothing">Clothing</option>
                <option value="shoes">Shoes</option>
                <option value="house items">House Items</option>
                <option value="furniture">Furniture</option>
                <option value="sport equipment">Sport Equipment</option>
                <option value="music equipment">Music Equipment</option>
                <option value="motor bike">Motor Bike</option>
                <option value="vehicles">Vehicles</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md mb-[25px]"
                placeholder="Size 3 for ladies. I dont mind a plain white or pink and white"
              ></textarea>
            </div>
            <div>
              <label>Maximum Price:</label>
              <input
                type="number"
                name="maxPrice"
                value={formData.maxPrice}
                onChange={handleInputChange}
                placeholder="R350"
                className="mt-1 p-2 w-full border rounded-md mb-[25px]"
              />
            </div>

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
        <img src={findItem} className=" max-w-[60%] object-contain " alt="" />
      </div>
    </div>
  );
}

export default FindItem;
