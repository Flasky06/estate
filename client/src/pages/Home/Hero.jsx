import React from "react";
import HeroImage from "../../assets/images/apartment.jpg";
import SearchComponent from "../../components/SearchComponent";

function Hero() {
  return (
    <div className="w-full px-2 lg:px-4 h-screen bg-slate-100  flex flex-col items-center justify-center">
      <div className="flex lg:justify-center items-center pt-40 pb-20">
        <h1 className="text-4xl lg:text-6xl font-bold capitalize ">
          Find the best &nbsp;
          <span className="text-blue-700">Real Estate</span>
          &nbsp; in The <span className="text-blue-700">market</span>
        </h1>
      </div>
      <SearchComponent />
    </div>
  );
}

export default Hero;
