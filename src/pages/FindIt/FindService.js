import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { findService } from "../../assets/images";

function FindService() {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  const [formData, setFormData] = useState({
    category: "select",
    when: "help now",
    location: "",
    additionalInfo: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to a server or perform other actions).
    console.log(formData);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="FindService" prevLocation={prevLocation} />

      <div className="w-full flex justify-between items-center">
        {/* service form */}
        <div className="flex flex-col max-w-[600px] mx-auto ">
          <h2 className="text-2xl font-bold mb-4">Service Request Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-700">
                Category:
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              >
                <option value="select">Select</option>
                <option value="machanic">Mechanic</option>
                <option value="towing">Towing</option>
                <option value="auto electrics">Auto Electrics</option>
                <option value="panelbeater">Panelbeater</option>
                <option value="spraypainter">Spraypainter</option>
                <option value="plumber">Plumber</option>
                <option value="builder">Builder</option>
                <option value="electrician">Electrician</option>
                <option value="welder">Welder</option>
                <option value="gardener">Gardener</option>
                <option value="pets">Pets</option>
                <option value="solar">Solar</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="when" className="block text-gray-700">
                When:
              </label>
              <select
                name="when"
                value={formData.when}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              >
                <option value="help now">Help Now</option>
                <option value="just quote">Just Quote</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700">
                Location:
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="additionalInfo" className="block text-gray-700">
                Additional Information:
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                rows="4"
              ></textarea>
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
        <img
          src={findService}
          className=" max-w-[60%] object-contain "
          alt=""
        />
      </div>
    </div>
  );
}

export default FindService;
