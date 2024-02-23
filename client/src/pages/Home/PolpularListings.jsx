import React from "react";
import { Link } from "react-router-dom";
import ListingCard from "../../components/ListingCard";
import apartment from "../../assets/images/apartment-exterior.jpg";
import apart from "../../assets/images/apartment.jpg";
import villa from "../../assets/images/villa.jpg";
import gated from "../../assets/images/gated.jpg";

function PopularListings() {
  return (
    <div className="max-w-6xl mx-auto my-20 pt-10">
      <h3 className="font-semibold text-3xl text-center mb-5">
        Popular Listings
      </h3>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-4 px-1 lg:px-1">
        <ListingCard
          cardImage={apartment}
          rent={20000}
          title="Mwaki House"
          city="Nakuru"
          area="Mawanga"
          size="bedsitter"
          bathroom={1}
        />
        <ListingCard
          cardImage={apart}
          rent={17200}
          title="2 Bedroom House in Naka"
          city="Nakuru"
          area="Naka"
          size="2 bedroom"
          bathroom={2}
        />
        <ListingCard
          cardImage={villa}
          rent={11500}
          title="Josmil APartment"
          city="Nakuru"
          area="racecourse"
          size="1 bedroom"
          bathroom={1}
        />
        <ListingCard
          cardImage={gated}
          rent={8500}
          title="Glory APartment"
          city="Nakuru"
          area="Langa langa"
          size="1 bedroom"
          bathroom={1}
        />
        <ListingCard
          cardImage={villa}
          rent={11500}
          title="Josmil APartment"
          city="Nakuru"
          area="racecourse"
          size="1 bedroom"
          bathroom={1}
        />{" "}
        <ListingCard
          cardImage={gated}
          rent={8500}
          title="Glory APartment"
          city="Nakuru"
          area="Langa langa"
          size="1 bedroom"
          bathroom={1}
        />{" "}
        <ListingCard
          cardImage={apart}
          rent={17200}
          title="2 Bedroom House in Naka"
          city="Nakuru"
          area="Naka"
          size="2 bedroom"
          bathroom={2}
        />
        <ListingCard
          cardImage={villa}
          rent={11500}
          title="Josmil APartment"
          city="Nakuru"
          area="racecourse"
          size="1 bedroom"
          bathroom={1}
        />
      </div>
      <div className="flex justify-center mt-16">
        <button className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          <Link to="/listings">Browse More Properties</Link>
        </button>
      </div>
    </div>
  );
}

export default PopularListings;
