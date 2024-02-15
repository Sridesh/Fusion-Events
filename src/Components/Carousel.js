import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomCarousel = ({ images, currentIndex }) => {
  const renderImages = () => {
    return images.map((image, index) => (
      <Carousel.Item
        key={index}
        className={index === currentIndex ? 'active' : ''}
      >
        <img src={image} className='bizimg' alt={`Slide ${index}`} />
      </Carousel.Item>
    ));
  };

  return (
    <Carousel className='cara'>
      {/* Display the previous image with reduced opacity */}
      {currentIndex > 0 && (
        <Carousel.Item>
          <img
            src={images[currentIndex - 1]}
            className='bizimg'
            alt={`Slide ${currentIndex - 1}`}
            style={{ opacity: 0.5 }}
          />
        </Carousel.Item>
      )}

      {renderImages()}

      {/* Display the next image with reduced opacity */}
      {currentIndex < images.length - 1 && (
        <Carousel.Item>
          <img
            src={images[currentIndex + 1]}
            className='bizimg'
            alt={`Slide ${currentIndex + 1}`}
            style={{ opacity: 0.5 }}
          />
        </Carousel.Item>
      )}
    </Carousel>
  );
};

export default CustomCarousel;
