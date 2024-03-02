import React, { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import { Link } from "react-router-dom";
import SearchComponent from "../components/SearchComponent";

function ListingsPage() {
  // /api/listings/all-listings

  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("api/listings/all-listings");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setListingData(data); // Update state with fetched data
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-24 mb-10 pt-10">
      <div className="max-w-4xl mx-auto">
        <SearchComponent />
      </div>

      <h3 className="font-semibold text-3xl text-center mb-10 py-2 px-1 ">
        Explore All Listings
      </h3>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8 px-1 lg:px-1">
        {listingData.map((data) => (
          <Link key={data._id} to={`/property-details/${data._id}`}>
            <ListingCard
              cardImage={data.downloadURLs[0]}
              rent={data.price}
              title={data.title}
              city={data.city}
              area={data.area}
              size={data.bedrooms}
              bathroom={data.bathrooms}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ListingsPage;
