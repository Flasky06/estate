import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListingCard from "../../components/ListingCard";

function OurListings() {
  const { currentUser } = useSelector((state) => state.user);

  const userId = currentUser._id;
  console.log(userId);

  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`api/listings/${userId}/listings`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setListings(data); // Update state with fetched data
        console.log(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8 px-1 lg:px-1 mt-32 max-w-7xl mx-auto">
        {listings.map((data) => (
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

export default OurListings;
