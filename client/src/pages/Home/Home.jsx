import React from "react";
import Hero from "./Hero";
import FeaturedListings from "./FeaturedListings";
import PolpularListings from "./PolpularListings";
import Footer from "../../components/Footer";
import SearchComponent from "../../components/SearchComponent";

function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <FeaturedListings />
      <PolpularListings />
      <Footer />
    </div>
  );
}

export default Home;
