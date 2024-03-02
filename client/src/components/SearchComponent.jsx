import React, { useState } from "react";
import { LocationData } from "../../data/locations";

const SearchComponent = () => {
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
    // Reset the area when city changes
    setArea("");
  };

  const renderAreas = () => {
    const selectedCity = LocationData.find(
      (location) => location.city === city,
    );
    if (selectedCity) {
      return selectedCity.area.map((areaName, index) => (
        <option key={index} value={areaName}>
          {areaName}
        </option>
      ));
    }
    return <option value="">Desired Location</option>;
  };

  const handleSearch = () => {
    console.log({ city, area, priceRange, bedrooms });
  };

  return (
    <div className=" bg-white shadow-md rounded lg:px-8 lg:pt-6 lg:pb-8 lg:mb-4 flex flex-col lg:flex-row w-full px-3 py-2 text-sm ">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="mb-4 md:mr-2 md:mb-0 w-full  ">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="city"
          >
            City
          </label>
          <select
            id="city"
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            value={city}
            onChange={handleCityChange}
          >
            <option value="">Desired City</option>
            {LocationData.map((location) => (
              <option key={location.id} value={location.city}>
                {location.city}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4 md:mr-2 md:mb-0 w-full ">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="area"
          >
            Location
          </label>
          <select
            id="area"
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            {renderAreas()}
          </select>
        </div>
        <div className="mb-4 md:mr-2 md:mb-0 w-full ">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="priceRange"
          >
            Price Range (KES)
          </label>
          <select
            id="priceRange"
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Price Range(KES)</option>
            <option value="below 10,000">Below 10,000 </option>
            <option value="below 20,000">Below 20,000 </option>
            <option value="below 30,000">Below 30,000 </option>
            <option value="below 40,000">Below 40,000 </option>
            <option value="below 50,000">Below 50,000 </option>
            <option value="below 60,000">Below 60,000 </option>
          </select>
        </div>
        <div className="mb-4 md:mr-2 md:mb-0 w-full ">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="bedrooms"
          >
            No of Bedrooms
          </label>
          <select
            id="bedrooms"
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          >
            <option value="">Bedrooms</option>
            <option value="bedsitter">bedsitter</option>
            <option value="1 bedroom">1 Bedroom</option>
            <option value="2 bedroom">2 Bedrooms</option>
            <option value="3 bedroom">3 Bedrooms</option>
            <option value="4 bedroom">4 Bedrooms</option>
            <option value="5 bedroom">5 Bedrooms</option>
          </select>
        </div>
      </div>
      <div className="flex space-x-4 mt-2  pt-3">
        <button
          className="w-full shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold text-lg py-1  px-6 rounded"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
