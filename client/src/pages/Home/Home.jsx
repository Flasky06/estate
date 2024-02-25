import React from "react";
import Hero from "./Hero";
import Footer from "../../components/Footer";
import PropertyListings from "./PropertyListings";

function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <PropertyListings />
      <Footer />
    </div>
  );
}

export default Home;
