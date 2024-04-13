import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function GameManagement() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [configurations, setConfiguration] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);
  const [type, setType] = useState("action");
  const [developer, setDeveloper] = useState("");
  const [publisher, setPublisher] = useState("");
  const [releasdate, setReleasDate] = useState("");
  const navigate = useNavigate();

  // Function to upload file to Cloudinary
  const uploadFile = async (type, file) => {
    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      type === "image" ? "Game_Preset" : "Stream_Preset"
    );
  
    try {
      let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
      console.log("Cloudinary cloud name:", cloudName);
      let resourceType = type === "image" ? "image" : "video";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
  
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(`${type} uploaded successfully:`, secure_url); 

      return secure_url;

    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error.response?.data);
      throw new Error("Failed to upload file to Cloudinary");
    }
    };

  const createGame = async (e) => {
    e.preventDefault();
    try {
      
      // Upload image file
      const gameImageUrl = image ? await uploadFile("image", image) : null;
  
      // Send backend API request
      const response = await axios.post("http://localhost:3001/createGame", {
        name,
        gameImageUrl,
        configurations,
        description,
        price,
        downloadCount,
        type,
        developer,
        publisher,
        releasdate
      });
  
      console.log("Game created successfully:", response.data);
      navigate("/");
      window.location.reload();
      
      // Reset form fields and file inputs
    //   setName("");
    //   setVideo(null);
    //   setThumbnail(null);
    //   setDescription("");
      // setViewCount(0);
    //   setType("action");
    } catch (error) {
      console.error("Error creating game:", error);
    }
  };

  

  return (
    <div>
      <form onSubmit={createGame}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Image:</label>
        <input
          type="file"
          accept="image/*"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
          />

        <label>Description:</label>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Configurations:</label>
        <input
          type="text"
          value={configurations}
          onChange={(e) => setConfiguration(e.target.value)}
        />

        <label>Download Count:</label>
        <input
          type="number"
          value={downloadCount}
          onChange={(e) => setDownloadCount(parseInt(e.target.value))}
        />

        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />

        <label>Developer:</label>
        <input
          type="text"
          value={developer}
          onChange={(e) => setDeveloper(e.target.value)}
        />

        <label>Publisher:</label>
        <input
          type="text"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />

<label>Releas date:</label>
        <input
          type="date"
          value={releasdate}
          onChange={(e) => setReleasDate(e.target.value)}
        />

        

        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="racing">Racing</option>
          <option value="shooter">Shooter</option>
          <option value="sports">Sports</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
