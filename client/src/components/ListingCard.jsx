import React from "react";
import { FaShower } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function ListingCard({ cardImage, rent, title, city, area, size, bathroom }) {
  return (
    <div className="card cursor-pointer border border-gray-300 bg-slate-100 shadow rounded-lg overflow-hidden">
      <img
        src={cardImage}
        alt="Apartment"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <div className="text-xl text-blue-600 font-bold flex items-center ">
          <span className="font-light text-sm"> KES </span>&nbsp;
          {rent} &nbsp;
          <span className="font-light text-sm"> / month</span>
        </div>
        <h1 className="font-semibold text-xl mb-2 ">{title}</h1>
        <p className="text-md text-slate-500 mb-2">
          {area}, {city}
        </p>
        <div className="flex gap-5">
          <div className="flex items-center capitalize">
            <IoBedOutline className="text-gray-500 mr-1 text-lg" />
            &nbsp;
            <span className="text-sm">{size} </span>
          </div>
          <div className="flex items-center">
            <FaShower className="text-gray-500 mr-1 text-lg" />
            &nbsp;
            <span className="text-sm">{bathroom} </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
