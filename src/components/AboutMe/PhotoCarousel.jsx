import React, { useState, useEffect } from 'react';
import './PhotoCarousel.css'; // Create this CSS file for styling

// Import your 5 photos
import photo1 from '/personal/profile2.jpg';
import photo2 from '/personal/profile3.jpg';
import photo3 from '/personal/profile4.jpg';
import photo4 from '/personal/profile5.jpg';
import photo5 from '/personal/profile6.jpg';

const photos = [photo1, photo2, photo3, photo4, photo5];

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-image-wrapper">
        <img src={photos[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      </div>

      <div className="carousel-dots">
        {photos.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={currentIndex === index ? 'dot active' : 'dot'}
          />
        ))}
      </div>

      {/* Overlay tags */}
      <div className="overlay-tag dob">10th Aug, 2002</div>
      <div className="overlay-tag location">India</div>

      <div className="carousel-contact-info">
        <p>Let’s Build Together!</p>
        <p>prakharrajpandey@gmail.com</p>
      </div>
    </div>
  );
};

export default PhotoCarousel;
