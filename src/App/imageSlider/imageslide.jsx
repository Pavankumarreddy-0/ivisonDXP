import React, { useState } from 'react';

const ImageSlide = ({ images,idc }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log('images,',images,currentIndex,idc)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <button onClick={handlePrev}>Previous</button>
      <img src={images} alt="Slideshow" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ImageSlide;
