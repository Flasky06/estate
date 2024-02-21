import React from "react";
import apartment from "../../assets/images/apartment-exterior.jpg";

function PolpularListings() {
  return (
    <div className="max-w-6xl mx-auto my-20 pt-10">
      <h3 className="font-semibold text-3xl text-center mb-5">
        Popular Listings
      </h3>

      <div className="grid grid-cols-4 gap-2 w-full">
        <div className="card border-2 gap-2 rounded-t">
          <div className="">
            <img src={apartment} alt="" className="rounded" />
            <span className="text-md font-semibold pl-2 mt-2">
              KES 40,000 /month
            </span>

            <p className=" pl-2 mt-2">freehold-Nakuru</p>
            <h1 className="font-bold text-xl pl-2">Texas Apartment</h1>
          </div>
          <div className="flex gap-2 pl-1">
            <span>1 bdr</span>
            <span>1 bath</span>
          </div>
        </div>
      </div>
      <button className="mt-10 bg-blue-500 hover:bg-blue-600  cursor-pointer text-white font-semibold py-2 px-3 rounded">
        Browse More Properties
      </button>
    </div>
  );
}

export default PolpularListings;
