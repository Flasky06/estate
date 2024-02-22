import React, { useState, useEffect } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
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
    <div className="flex flex-col w-full lg:max-w-4xl lg:m-auto ">
      <Link to="/" className="text-black font-bold  p-5">
        Back
      </Link>

      <div className="relative w-full h-[20rem] lg:h-[24rem] mt-5">
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className=" w-full h-full  "
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
      <div
        className="flex justify-center gap-2
       mt-4"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-10 h-10 lg:w-20 lg:h-20 cursor-pointer ${
              index === activeIndex ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div className="mt-10 flex flex-col px-2 lg:px-0">
        <h3 className="text-3xl font-bold text-slate-800">
          Property Description
        </h3>
        <p className="text-sm font-light">
          Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem
          admodum disputando ea. An duis dolor appellantur mea, est id zril
          nobis appellantur. Ei sea duis senserit qualisque, te facilisis
          appellantur pri. Id aperiri aliquam interesset mel.
        </p>
      </div>

      <div className="px-2 lg:px-0 mt-5">
        <h3 className="text-3xl font-bold text-slate-800">Propery Amenities</h3>

        <div className="flex flex-col  lg:max-w-4xl lg:mx-auto">
          <p className="text-sm">Free wifi</p>
          <p className="text-sm">Manned gate</p>
          <p className="text-sm">Rooftop</p>
          <p className="text-sm">Spacious Balcony</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
