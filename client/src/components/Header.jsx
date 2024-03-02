import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      <nav className=" hidden lg:flex  w-full py-4 bg-white fixed z-20 top-0 shadow">
        <div className="flex  w-full  justify-around items-center max-w-6xl mx-auto p-3 ">
          <Link to="/">
            <h1>Esate App</h1>
          </Link>
          <ul className="flex gap-6">
            <li className="font-semibold hover:text-slate-600 px-2 py-1">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold hover:text-slate-600 px-2 py-1">
              <Link to="/listings">Properties</Link>
            </li>
            {currentUser && currentUser.role === "agent" && (
              <li className="font-semibold hover:text-slate-600 px-2 py-1">
                <Link to="/our-listings">Saved </Link>
              </li>
            )}
            {currentUser && currentUser.role === "agent" && (
              <li className="font-semibold hover:text-slate-600 px-2 py-1">
                <Link to="/our-listings">Our Listings</Link>
              </li>
            )}
            <li>
              <Link to="/profile">
                {currentUser ? (
                  <img
                    src={currentUser.profilePicture}
                    alt="profile"
                    className="w-8 h-8 rounded-full object-cover "
                  />
                ) : (
                  <div className="font-semibold hover:text-slate-600 px-2 py-1">
                    Sign In
                  </div>
                )}
              </Link>
            </li>
            {currentUser && currentUser.role === "agent" && (
              <li>
                <button className="bg-blue-500 text-white py-1 px-1 text-sm font-bold rounded">
                  <Link to="/create-listing">Create Listing</Link>
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <nav className="lg:hidden flex justify-between w-full py-4 bg-white fixed z-20 top-0 shadow">
        <div className="p-1">menu</div>
        {currentUser && currentUser.role === "agent" && (
          <div className="p-1">profile</div>
        )}
      </nav>
    </div>
  );
}

export default Header;
