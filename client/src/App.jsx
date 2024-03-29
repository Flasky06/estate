import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import ConditionalyShowNavbar from "./components/ConditionalyShowNavbar";
import UpdateListing from "./pages/UpdateListing";
import Home from "./pages/Home/Home";
import ListingsPage from "./pages/ListingsPage";
import PropertyDetails from "./pages/property-details/PropertyDetails";
import AgentsProfile from "./pages/AgentsProfile";
import Profile from "./pages/profile/Profile";
import OurListings from "./pages/Our-listings/OurListings";

function App() {
  return (
    <BrowserRouter>
      {/* conditionally render Header component */}
      <ConditionalyShowNavbar>
        <Header />
      </ConditionalyShowNavbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/update-listing" element={<UpdateListing />} />
        <Route path="/property-details/:id" element={<PropertyDetails />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/agent-profile" element={<AgentsProfile />} />
          <Route path="/our-listings" element={<OurListings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
