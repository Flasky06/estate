import React, { useState } from "react";

function CreateListing() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto mt-32 px-2 lg:px-0">
      <h2 className="flex my-5 capitalize font-bold self-center text-lg">
        Post New Listing
      </h2>
      <form className="mt-5" onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="py-10">
            <h4 className="text-semibold text-md capitalize mb-5">
              property description
            </h4>
            <div className="flex flex-col">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                property name
              </label>
              <input
                type="text"
                id="title"
                placeholder="property name"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                property description
              </label>
              <textarea
                type="text"
                id="description"
                placeholder="property description"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="price"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                price(ksh)
              </label>
              <input
                type="number"
                id="price"
                placeholder="property price"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full flex-col lg:flex-row">
              <div className="mb-4 w-full">
                <label
                  htmlFor="category"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Property Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  <option value="condo">Condo</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="house">House</option>
                </select>
              </div>

              <div className="mb-4 w-full">
                <label
                  htmlFor="listedFor"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Listed For
                </label>
                <select
                  name="listedFor"
                  id="type"
                  className="w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  onChange={handleChange}
                >
                  <option value="">Select Listing Type</option>
                  <option value="sales">Sales</option>
                  <option value="rent">Rent</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-700 text-white py-1 p-2 rounded font-semibold cursor-pointer  "
              >
                Next step
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h4 className="text-semibold text-md capitalize mb-5">
              Media Upload
            </h4>

            <div className="flex justify-between my-2">
              <button
                type="button"
                onClick={prevStep}
                className="bg-blue-700 text-white py-1 p-2 rounded font-semibold cursor-pointer flex "
              >
                prev step
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-700 text-white py-1 p-2 rounded font-semibold cursor-pointer flex "
              >
                Next step
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="gap-2">
            <h4 className="text-semibold text-md capitalize mb-5">
              Property location
            </h4>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="city"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label
                htmlFor=""
                id="area"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Area
              </label>
              <input
                type="text"
                id="area"
                placeholder="area"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between my-2">
              <button
                type="button"
                onClick={prevStep}
                className="bg-blue-700 text-white py-1 p-2 rounded font-semibold cursor-pointer flex "
              >
                prev step
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-700 text-white py-1 p-2 rounded font-semibold cursor-pointer flex "
              >
                Next step
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h4 className="text-semibold text-md capitalize mb-5">
              property details
            </h4>
            <div className="mb-4">
              <label
                htmlFor="rooms"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Rooms (only numbers)
              </label>
              <input
                type="number"
                id="rooms"
                name="rooms"
                className="w-full p-2 border rounded"
                min="0"
                onChange={handleChange}
              />
            </div>

            {/* Bedrooms field */}
            <div className="mb-4">
              <label
                htmlFor="bedrooms"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Bedrooms
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              >
                <option value="">No of Bedrooms</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            {/* Bathrooms field */}
            <div className="mb-4">
              <label
                htmlFor="bathrooms"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Bathrooms
              </label>
              <select
                id="bathrooms"
                name="bathrooms"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              >
                <option value="">No of Bathrooms</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            {/* Extra Details field */}
            <div className="mb-4">
              <label
                htmlFor="extraDetails"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Extra Details
              </label>
              <input
                type="text"
                id="extraDetails"
                name="extraDetails"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>

            {/* Floors No field */}
            <div className="mb-4">
              <label
                htmlFor="floor No"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Floors No
              </label>
              <select
                id="floorNo"
                name="floorNo"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              >
                <option value="">Select Floor Number</option>
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-between my-2">
              <button
                type="button"
                onClick={prevStep}
                className="bg-blue-700 text-white py-1 p-2 rounded font-semibold cursor-pointer flex "
              >
                prev step
              </button>
              <button
                type="submit"
                className="bg-blue-700 text-white py-1 p-2 rounded font-semibold cursor-pointer flex "
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateListing;
