import React, { useState, useEffect } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import home from "../../assets/images/apartment.jpg";
import living from "../../assets/images/apartment-exterior.jpg";
import { FaShower } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdCall, MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";

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
    <div className="flex flex-col w-full lg:max-w-5xl mx-auto pb-20">
      <Link to="../" className="text-black font-bold text-lg lg:p-2 m-4">
        Back
      </Link>
      <h1 className="lg:text-3xl text-2xl font-bold text-slate-800 mx-1 lg:mx-0">
        Two Bedroom Apartment
      </h1>
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
        className="flex justify-center lg:justify-start gap-1 lg:gap-2
       mt-1 lg:mt-4"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-10 h-10 lg:w-24 lg:h-24 cursor-pointer ${
              index === activeIndex ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row lg:mt-10 mt-4  lg:mx-0  lg:px-0  gap-8 ">
        <div className="lg:w-3/5 w-full ">
          <div className="flex gap-4 p-4 mx-1 lg:mx-0 lg:border lg:border-slate-200 bg-slate-100 ">
            <div className="flex flex-col gap-2">
              <div className="font-bold">Bedrooms</div>
              <div className="flex items-center font-bold ">
                1 &nbsp;
                <IoBedOutline className="text-xl text-slate-800" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="font-bold">Bathrooms</div>
              <div className="flex items-center font-bold">
                1 &nbsp;
                <FaShower className="text-xl text-slate-800" />
              </div>
            </div>
          </div>

          <h3 className=" text-slate-800 mt-10 mx-4 lg:mx-0 text-xl font-bold">
            About this house
          </h3>
          <div className="mt-10 flex flex-col px-2 lg:px-0">
            <ul className="flex flex-col list-disc	gap-1 lg:gap-0">
              <li>One bedroom</li>
              <li>
                Located along Garden Estate Road near mountain mall in a
                well-guarded neighborhood.
              </li>
            </ul>
            <h3 className=" text-blue-600  font-bold underline underline-offset-4 mt-5">
              Amenities
            </h3>
            <ul className="flex flex-col list-disc	">
              <li className="">Water 24/7</li>
              <li className="">Free wifi</li>
              <li className="">Manned gate</li>
              <li className="">Spacious Balcony</li>
            </ul>
            <h3 className=" text-blue-600  font-bold underline underline-offset-4 mt-5">
              Fees
            </h3>
            <ul className="flex flex-col list-disc	">
              <li>Rent KES 30,000</li>
              <li>Deposit KES 30,000</li>
            </ul>
          </div>
        </div>
        <div className="border border-slate-200 bg-slate-100 lg:w-2/5 w-full px-5  py-4  ">
          <p className="text-sm text-slate-800 ">Rent Price</p>

          <div className="flex items-center font-light ">
            <div className="text-blue-600 font-bold text-xl">KES 30,000 </div>
            &nbsp; /month
          </div>
          <h4 className="mt-10 text-slate-800 font-semibold">managed by :</h4>
          <p className="text-blue-600 font-bold">Ngotho commercial agencies</p>

          <h4 className="mt-10 text-slate-800 font-semibold mb-4">
            contact info :
          </h4>
          <div className="flex items-center gap-4 font-semibold mb-2 ">
            <div className=" p-2 border rounded-full border-slate-600">
              <MdCall className="text-lg font-bold text-blue-600" />
            </div>
            +254717299106
          </div>

          <div className="flex items-center gap-4 font-semibold mb-2 ">
            <div className=" p-2 border rounded-full border-slate-600">
              <MdCall className="text-lg font-bold text-blue-600" />
            </div>
            +254717299106
          </div>
          <div className="flex items-center gap-4 font-semibold mb-2">
            <div className=" p-2 border rounded-full border-slate-600">
              <MdEmail
                className="text-lg  text-blue-600
"
              />
            </div>
            tritva@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
