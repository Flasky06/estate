import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <nav className="max-w-md:hidden  w-full py-4 bg-white fixed z-20 top-0 shadow">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <Link to="/">
          <h1>Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Properties</Link>
          </li>
          <li>
            <Link to="/profile">
              {currentUser ? (
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="w-7 h-7 rounded-full object-cover "
                />
              ) : (
                <li>Sign In</li>
              )}
            </Link>
          </li>
          <button className=" bg-blue-500 text-white py-2 px-3 text-sm font-bold rounded">
            <Link to="/create-listing"> Add Listing</Link>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
