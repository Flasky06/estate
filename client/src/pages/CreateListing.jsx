import React, { useState } from "react";
import { ref, uploadBytes, getStorage, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
import { LocationData } from "../../data/locations";

function CreateListing() {
  const { currentUser } = useSelector((state) => state.user);

  const userId = currentUser._id;
  const username = currentUser.username;
  const email = currentUser.email;

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  // firebase image upload
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [thumbnails, setThumbnails] = useState([]);
  const [downloadURLs, setDownloadURLs] = useState([]);

  // Define a function to upload the file and get its download URL
  const uploadFileAndGetDownloadURL = async (file) => {
    setUploading(true);

    const storage = getStorage();
    const imageRef = ref(storage, `/multipleFiles/${file.name}`);

    try {
      // Upload the file
      await uploadBytes(imageRef, file);

      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(imageRef);

      console.log(`Successfully uploaded ${file.name}`);
      console.log(`Download URL: ${downloadURL}`);
      alert(`${file.name} uploaded successfully!`);

      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      alert(
        `An error occurred while uploading ${file.name}. Please try again.`
      );
    } finally {
      setUploading(false);
    }
  };

  // thumbnails
  const handleImageChange = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files);

    setImages([...images, ...newImages]);

    const newThumbnails = newImages.map((image) => URL.createObjectURL(image));
    setThumbnails([...thumbnails, ...newThumbnails]);
  };

  // Modify handleUpload function to handle getting download URLs
  const handleUpload = async () => {
    const urls = [];

    for (let i = 0; i < images.length; i++) {
      const downloadURL = await uploadFileAndGetDownloadURL(images[i]);
      if (downloadURL) {
        urls.push(downloadURL);
      }
    }

    // Store the download URLs in state
    setDownloadURLs(urls);
  };

  const nextStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setArea(""); // Reset area when city changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Append download URLs to formData
      const formDataWithUrls = {
        ...formData,
        userId,
        downloadURLs,
      };
      console.log("my form", formDataWithUrls);
      const res = await fetch("api/listings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithUrls),
      });

      const data = await res.json();

      if (!data.success) {
        setError(true);
        setLoading(false);
      }
      setLoading(false);
      setUpdateSuccess(true);
      alert("Success");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const renderAreas = () => {
    const selectedCity = LocationData.find(
      (location) => location.city === city
    );
    if (selectedCity) {
      return selectedCity.area.map((areaName, index) => (
        <option key={index} value={areaName}>
          {areaName}
        </option>
      ));
    }
    return null;
  };

  return (
    <div className="flex lg:px-0 flex-col max-w-4xl mx-auto mt-32 px-2 ">
      <h2 className="flex mt-3 capitalize font-bold self-center text-lg">
        Post New Listing
      </h2>
      <form className="mt-5" onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="pt-5">
            <h4 className="text-lg font-semibold text-blue-700 text-md capitalize mb-5">
              Property Description
            </h4>
            <div className="flex flex-col mt-4">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                Property Name
              </label>
              <input
                type="text"
                id="title"
                placeholder="Property Name"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                House Description
              </label>
              <textarea
                id="houseDescription"
                placeholder="House description"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor="price"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                Price (Ksh)
              </label>
              <input
                type="number"
                id="price"
                placeholder="Property Price"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor="Deposit"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                Deposit (Ksh)
              </label>
              <input
                type="number"
                id="deposit"
                placeholder="Required Deposit"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-end mt-5 mb-8">
              <button
                onClick={nextStep}
                className="bg-blue-700 text-white py-1 px-4 rounded font-semibold cursor-pointer"
              >
                Next Step
              </button>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <div className="mt-10 ">
              <div className="flex flex-wrap gap-4">
                {thumbnails.map((thumbnail, index) => (
                  <img
                    key={index}
                    src={thumbnail}
                    alt={`Thumbnail ${index}`}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      marginBottom: "40px",
                      border: "solid",
                    }}
                  />
                ))}
              </div>
              <input type="file" onChange={handleImageChange} />
              <button
                onClick={handleUpload}
                disabled={uploading || images.length === 0}
                className="bg-green-700 text-white py-1 px-4 rounded font-semibold cursor-pointer"
              >
                {uploading ? "Uploading..." : "Upload"}
              </button>
            </div>
            <div className="flex  justify-between mt-10 ">
              <button
                onClick={prevStep}
                className="bg-blue-700 text-white py-1 px-4 rounded font-semibold cursor-pointer"
              >
                Prev Step
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-700 text-white py-1 px-4 rounded font-semibold cursor-pointer"
              >
                Next Step
              </button>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div className="gap-2">
            <h4 className="text-semibold text-md capitalize mb-5">
              Property location
            </h4>{" "}
            <div className="flex flex-col mt-4 mb-5">
              <label
                htmlFor="city"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                City
              </label>
              <select
                id="city"
                className="w-full p-2 border rounded"
                onChange={handleCityChange}
              >
                <option value="">Select City</option>
                {LocationData.map((location) => (
                  <option key={location.id} value={location.city}>
                    {location.city}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mb-5 ">
              <label
                htmlFor="area"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Area
              </label>
              <select
                id="area"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                value={area}
              >
                {renderAreas()}
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="location-description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Location Description
              </label>
              <textarea
                id="locationDescription"
                placeholder="Location Description"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between my-2">
              <span
                type="button"
                onClick={prevStep}
                className="bg-blue-700 text-white py-1 p-2 rounded font-semibold cursor-pointer flex "
              >
                prev step
              </span>
              <span
                type="button"
                onClick={nextStep}
                className="bg-blue-700 text-white py-1 p-2 rounded font-semibold cursor-pointer flex "
              >
                Next step
              </span>
            </div>
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <h4 className="text-semibold text-md capitalize mb-5">
              property details
            </h4>

            {/* Bedrooms field */}
            <div className="mb-4">
              <label
                htmlFor="bedrooms"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Bedrooms
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              >
                <option value="">No of Bedrooms</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            {/* Bathrooms field */}
            <div className="mb-4">
              <label
                htmlFor="bathrooms"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Bathrooms
              </label>
              <select
                id="bathrooms"
                name="bathrooms"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              >
                <option value="">No of Bathrooms</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-between my-2">
              <span
                type="button"
                onClick={prevStep}
                className="bg-blue-700 text-white py-1 p-2 rounded font-semibold cursor-pointer flex "
              >
                prev step
              </span>
              <button
                disabled={loading}
                className="bg-blue-700  text-white py-1 p-2 rounded font-semibold cursor-pointer disabled:bg-green-600 "
              >
                {loading ? "submitting listing" : "Submit"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateListing;
