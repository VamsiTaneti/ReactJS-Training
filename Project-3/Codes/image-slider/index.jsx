import React,{useState,useEffect} from "react";

export default function ImageSlider(){
  const [images, setImages] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [loading, setLoading] = useState(true);   
  const [error, setError] = useState("");         

  useEffect(() => {
    fetch("/images.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not find images.json");
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
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }
  function handlePrevious() {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  if (loading) {
    return <h3>Loading images...</h3>;
  }
  if (error) {
    return <h3 style={{color: "red"}}>Error: {error}</h3>;
  }

  const currentImage = images.at(currentIndex);

  return (
    <div style={{textAlign:"center", marginTop: "30px"}}>
      <h2>Image Slider</h2>
      <img
        src={currentImage.url}
        alt={currentImage.title}
        onError={() => setError("Failed to display this image.")}
        style={{width:"500px", height:"350px", objectFit:"contain"}}
      />
      <h3>{currentImage.title}</h3>
      <p>
        Image {currentIndex + 1} of {images.length}
      </p>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext} style={{marginLeft:"10px"}}>
        Next
      </button>
    </div>
  );
}
