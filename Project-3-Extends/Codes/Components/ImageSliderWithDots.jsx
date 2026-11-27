import React, { useState, useEffect } from "react";

export default function ImageSliderWithDots() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch images from API");
        }
        return response.json();
      })
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }
  function handlePrevious() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }

  if (loading) {
    return <h3>Loading images...</h3>;
  }
  if (error) {
    return <h3 style={{ color: "red" }}>Error: {error}</h3>;
  }
  if (images.length === 0) {
    return <h3>No images found.</h3>;
  }

  const currentImage = images[currentIndex];

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>API Image Slider with dynamic Dots</h2>
      <div
        style={{
          position: "relative",
          width: "500px",
          height: "350px",
          margin: "0 auto",
        }}
      >
        <img
          src={currentImage.download_url}
          alt={`Photo by ${currentImage.author}`}
          onError={() => setError("Failed to display this image.")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
          }}
        >
          {images.map((item, index) => (
            <span
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor:
                  currentIndex === index
                    ? "#ffffff" 
                    : "rgba(255, 255, 255, 0.45)", 
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
      <h3>Photo by: {currentImage.author}</h3>
      <p>
        Image {currentIndex + 1} of {images.length}
      </p>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext} style={{ marginLeft: "10px" }}>
        Next
      </button>
    </div>
  );
}
