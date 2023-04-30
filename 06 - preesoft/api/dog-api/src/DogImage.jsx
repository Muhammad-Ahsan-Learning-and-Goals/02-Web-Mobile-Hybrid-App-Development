import React, { useState, useEffect } from "react";
import axios from "axios";

const DogImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      
      setImageUrl(response.data.message);
    };

    fetchDogImage();
  }, []);

  return (
    <div>
       
      {imageUrl ? <img src={imageUrl} alt="Random dog" /> : <p>Loading...</p>}
    </div>
  );
};

export default DogImage;
