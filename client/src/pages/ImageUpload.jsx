import React, { useState } from "react";
import { ref, uploadBytes, getStorage } from "firebase/storage";

function ImageUpload() {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [thumbnails, setThumbnails] = useState([]);

  const uploadFile = async (file) => {
    setUploading(true);

    const storage = getStorage();
    const imageRef = ref(storage, `/multipleFiles/${file.name}`);

    try {
      await uploadBytes(imageRef, file);

      console.log(`Successfully uploaded ${file.name}`);
      alert(`${file.name} uploaded successfully!`);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert(
        `An error occurred while uploading ${file.name}. Please try again.`
      );
    } finally {
      setUploading(false);
    }
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files);

    setImages([...images, ...newImages]);

    const newThumbnails = newImages.map((image) => URL.createObjectURL(image));
    setThumbnails([...thumbnails, ...newThumbnails]);
  };

  const handleUpload = async () => {
    for (let i = 0; i < images.length; i++) {
      await uploadFile(images[i]);
    }
  };

  return (
    <div className="mt-40">
      <div className="flex flex-wrap gap-4">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index}`}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        ))}
      </div>
      <input type="file" onChange={handleImageChange} />
      <button
        onClick={handleUpload}
        disabled={uploading || images.length === 0}
        className="bg-blue-700"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}

export default ImageUpload;
