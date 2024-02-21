import React from "react";
import HeroImage from "../../assets/images/apartment.jpg";

function Hero() {
  return (
    <div className="w-full px-4 h-screen bg-slate-100 grid grid-cols-2 items-center justify-center ">
      <div className="flex justify-center items-center">
        <h1 className="text-6xl font-bold capitalize">
          Find the best
          <span className="text-blue-700">
            Real <br /> Estate
          </span>
          in The <span className="text-blue-700">market</span>
        </h1>
      </div>
      <div
        className="w-full flex h-3/5 items-end justify-center rounded"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Hero;
