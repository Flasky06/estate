import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ListingCard from "../../components/ListingCard";

function PropertyListings() {
  const params = useParams();

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
        console.log(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="max-w-6xl mx-auto my-10 pt-10">
      <h3 className="font-semibold text-3xl text-center mb-10 py-2 px-1">
        Explore our Listings
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
      <div className="flex justify-center mt-16">
        <button className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          <Link to="/listings">Browse More Properties</Link>
        </button>
      </div>
    </div>
  );
}

export default PropertyListings;
