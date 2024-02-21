import React from "react";
import HeroImage from "../../assets/images/apartment.jpg";
import SearchComponent from "../../components/SearchComponent";

function Hero() {
  return (
    <div className="w-full px-4 h-screen bg-slate-100  ">
      <div className="flex justify-center items-center py-40">
        <h1 className="text-6xl font-bold capitalize">
          Find the best &nbsp;
          <span className="text-blue-700">
            Real <br /> Estate
          </span>
          &nbsp; in The <span className="text-blue-700">market</span>
        </h1>
      </div>
      <SearchComponent />
    </div>
  );
}

export default Hero;
