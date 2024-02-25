import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ConditionalyShowNavbar({ children }) {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (
      location.pathname === "/signup" ||
      location.pathname === "/signin" ||
      location.pathname === "/property-details"
    ) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
}

export default ConditionalyShowNavbar;
