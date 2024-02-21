import React, { useState, useEffect } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { FaRulerCombined } from "react-icons/fa";
import home from "../../assets/images/apartment.jpg";
import living from "../../assets/images/apartment-exterior.jpg";

import { Link } from "react-router-dom";

const images = [home, living, home, living, home, living, home];

const PropertyDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <div className="flex flex-col max-w-4xl m-auto pt-10">
      <Link to="/" className="text-black font-bold">
        Back
      </Link>

      <div className="w-full  relative">
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="w-full h-[24rem]"
        />
        <button
          onClick={prevSlide}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white"
        >
          <GrFormPrevious className="text-slate-800 text-3xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white"
        >
          <GrFormNext className="text-slate-800 text-3xl" />
        </button>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-20 h-20 cursor-pointer ${
              index === activeIndex ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div className="mt-10 flex flex-col">
        <h3 className="text-3xl font-bold text-slate-800">Description</h3>
        <p className="text-sm font-light">
          Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem
          admodum disputando ea. An duis dolor appellantur mea, est id zril
          nobis appellantur. Ei sea duis senserit qualisque, te facilisis
          appellantur pri. Id aperiri aliquam interesset mel. Contentiones
          vituperatoribus id est, per prima nihil scripta no. No semper
          forensibus adipiscing quo. Amet deleniti lobortis et eam. In oporteat
          pertinacia quo, cu qui antiopam intellegebat, ei alii paulo has. In
          alia eros ornatus pri, graeci accusata pericula an vix. His ne homero
          dignissim, aliquam dolores scriptorem vis ut. Sit ad suas adhuc
          interesset, nec no essent iuvaret adipiscing ever
        </p>
      </div>

      <div>
        <h4 className="text-lg font-thin  text-slate-800 mt-20 mb-6 ">
          Nearby Amenities
        </h4>
        <p className="my-4 text-sm font-bold">
          The above properties is within the following amenities
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-4xl">
          <p className="text-sm">School : 1.5 Km</p>
          <p className="text-sm">Market : 1.7 Km</p>
          <p className="text-sm">Hospital,Medical : 0.8 Km</p>
          <p className="text-sm">Gym , wellness Center : 0.4 Km</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
