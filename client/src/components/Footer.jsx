import React, { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted email:", email);
  };

  return (
    <div className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 h-48 w-full py-5 justify-center items-center">
        <h1 className="text-2xl lg:text-5xl font-bold text-center">
          Are you a landlord or a property agent?
        </h1>
        <h3 className="">Discover ways to screen and increase tenancy</h3>
        <div className="relative rounded w-4/5 lg:max-w-md mx-auto">
          <input
            type="text"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
            className="py-2 px-4 w-full rounded-l bg-white text-black focus:outline-none"
          />
          <button
            onClick={handleSubmit}
            className="absolute top-0 right-0 h-full bg-blue-500 text-white font-bold px-4 rounded-r hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
        <h5 className="mt-5">&copy; 2024 Tritva Homes. All rights reserved.</h5>
      </div>
    </div>
  );
}

export default Footer;
