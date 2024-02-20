import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ConditionalyShowNavbar({ children }) {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    console.log("this is the location", location);
    if (location.pathname === "/signup" || location.pathname === "/signin") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
}

export default ConditionalyShowNavbar;
