import React from "react";
import apartment from "../../assets/images/apartment-exterior.jpg";
import { FaShower } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function PopularListings() {
  return (
    <div className="max-w-6xl mx-auto my-20 pt-10">
      <h3 className="font-semibold text-3xl text-center mb-5">
        Popular Listings
      </h3>

      <div className="grid grid-cols-4 gap-4">
        <div className="card border border-gray-300 shadow rounded-lg overflow-hidden">
          <img
            src={apartment}
            alt="Apartment"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <p className="text-lg text-blue-600 font-semibold">
              KES 40,000 <span className="font-light text-sm">/ month</span>
            </p>
            <h1 className="font-bold text-xl mb-2">Texas Apartment</h1>
            <p className="text-sm text-gray-600 mb-2">Freehold, Nakuru</p>
            <div className="flex gap-3">
              <div className="flex items-center">
                <IoBedOutline className="text-gray-500 mr-1" />
                <span className="text-sm">1 Bed</span>
              </div>
              <div className="flex items-center">
                <FaShower className="text-gray-500 mr-1" />
                <span className="text-sm">1 Bath</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-8 mx-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        <Link to="/listings">Browse More Properties</Link>
      </button>
    </div>
  );
}

export default PopularListings;