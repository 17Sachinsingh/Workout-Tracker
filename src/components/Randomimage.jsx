import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MotivationImage = () => {
  const [imageData, setImageData] = useState({}); // Initialize as an empty object

  useEffect(() => {
    const accessKey = 'GjCaNjDQnqzJsxLrvWSNme_DrxEkLtohvnXS-k8G5xo';

    // Define search terms for gym motivation images
    const searchTerms = [  'gym motivation'];
    const query = searchTerms[Math.floor(Math.random() * searchTerms.length)];

    // Set up the API endpoint
    const apiUrl = `https://api.unsplash.com/photos/random/?query=${query}&client_id=${accessKey}`;

    // Make the API request
    axios.get(apiUrl)
      .then(response => {
        setImageData(response.data);
      })
      .catch(error => {
        console.error('Error fetching image from Unsplash:', error);
      });
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div>
      {/* {imageData.urls && (
        <img
          src={imageData.urls.regular}
          alt={`Gym Motivation by ${imageData.user.name}`}
          style={{
            width:'100%',
            height:'auto'

          }}
        />
      )} */}
      {imageData.urls && (
  <img
    src={imageData.urls.regular}
    alt={`Gym Motivation by ${imageData.user.name}`}
    style={{
      width: '75vh',
      height: '100vh',
      marginLeft:'auto',
      marginBottom:'-20%'
    }}
  />
)}

    </div>
  );
};

export default MotivationImage;
