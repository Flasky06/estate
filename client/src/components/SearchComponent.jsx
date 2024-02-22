import React, { useState } from "react";

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
    switch (city) {
      case "Nakuru":
        return (
          <>
            <option value=""> Desired Location</option>
            <option value="Freehold">Freehold</option>
            <option value="RaceCourse">RaceCourse</option>
            <option value="Zakayos">Zakayos</option>
          </>
        );
      case "Nairobi":
        return (
          <>
            <option value=""> Desired Location</option>
            <option value="Ngong">Ngong</option>
            <option value="Kitengela">Kitengela</option>
            <option value="cbd">CBD</option>
          </>
        );
      case "Mombasa":
        return (
          <>
            <option value=""> Desired Location</option>
            <option value="Bombolulu">Bombolulu</option>
            <option value="Nyali">Nyali</option>
            <option value="Mpeketoni">Mpeketoni</option>
          </>
        );
      default:
        return <option value=""> Desired Location</option>;
    }
  };

  const handleSearch = () => {
    console.log({ city, area, priceRange, bedrooms });
  };

  return (
    <div className=" bg-white shadow-md rounded lg:px-8 lg:pt-6 lg:pb-8 lg:mb-4 flex flex-col lg:flex-row w-full px-3 py-2  lg:max-w-3xl lg:mx-auto text-sm ">
      <div className="flex flex-col lg:flex-row">
        <div className="mb-4 md:mr-2 md:mb-0">
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
            <option value="Nakuru">Nakuru</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Machakos">Machakos</option>
          </select>
        </div>
        <div className="mb-4 md:mr-2 md:mb-0">
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
        <div className="mb-4 md:mr-2 md:mb-0">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="priceRange"
          >
            Price Range
          </label>
          <select
            id="priceRange"
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Price Range</option>
            <option value="below 10,000">Below 10,000 KES</option>
            <option value="below 20,000">Below 20,000 KES</option>
            <option value="below 30,000">Below 30,000 KES</option>
            <option value="below 40,000">Below 40,000 KES</option>
            <option value="below 50,000">Below 50,000 KES</option>
            <option value="below 60,000">Below 60,000 KES</option>
          </select>
        </div>
        <div className="mb-4 md:mr-2 md:mb-0">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="bedrooms"
          >
            Bedrooms
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
