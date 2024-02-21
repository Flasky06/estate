import React, { useState } from "react";
import { ref, uploadBytes, getStorage, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";

function CreateListing() {
  const { currentUser } = useSelector((state) => state.user);

  console.log("user", currentUser);

  const userId = currentUser._id;
  console.log("userId", userId);

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Append download URLs to formData
      const formDataWithUrls = { ...formData, createdBy: userId, downloadURLs };
      console.log(formDataWithUrls);
      const res = await fetch("api/listing/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithUrls),
      });

      const data = await res.json();

      if (!data.success) {
        setError(true);
      }
      setLoading(false);
      setUpdateSuccess(true);
      alert("Success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto mt-32 px-2 lg:px-0">
      <h2 className="flex mt-3 capitalize font-bold self-center text-lg">
        Post New Listing
      </h2>
      <form className="mt-5" onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="pt-5">
            <h4 className="text-lg font-semibold text-blue-700 text-md capitalize mb-5">
              Property Description
            </h4>
            <div className="flex flex-col">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm font-bold mb-2"
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
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Property Description
              </label>
              <textarea
                id="description"
                placeholder="Property Description"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="price"
                className="block text-gray-700 text-sm font-bold mb-2"
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
            <div className="flex w-full flex-col lg:flex-row">
              <div className="mb-4 w-full">
                <label
                  htmlFor="category"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Property Category
                </label>
                <select
                  id="category"
                  className="w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  <option value="condo">Condo</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="house">House</option>
                </select>
              </div>

              <div className="mb-4 w-full">
                <label
                  htmlFor="listedFor"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Listed For
                </label>
                <select
                  id="listedFor"
                  className="w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  onChange={handleChange}
                >
                  <option value="">Select Listing Type</option>
                  <option value="sales">Sales</option>
                  <option value="rent">Rent</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end">
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
            </h4>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="city"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label
                htmlFor=""
                id="area"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Area
              </label>
              <input
                type="text"
                id="area"
                placeholder="area"
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
            <div className="mb-4">
              <label
                htmlFor="rooms"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Rooms (only numbers)
              </label>
              <input
                type="number"
                id="rooms"
                name="rooms"
                className="w-full p-2 border rounded"
                min="0"
                onChange={handleChange}
              />
            </div>

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

            {/* Extra Details field */}
            <div className="mb-4">
              <label
                htmlFor="extraDetails"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Extra Details
              </label>
              <input
                type="text"
                id="extraDetails"
                name="extraDetails"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>

            {/* Floors No field */}
            <div className="mb-4">
              <label
                htmlFor="floor No"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Floors No
              </label>
              <select
                id="floorNo"
                name="floorNo"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              >
                <option value="">Select Floor Number</option>
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
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
                className="bg-blue-700 text-white py-1 p-2 rounded font-semibold cursor-pointer disabled:bg-green-600 "
              >
                {loading ? "submiting listing" : "Submit"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateListing;
