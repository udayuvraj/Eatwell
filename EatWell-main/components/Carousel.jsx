import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeroBanner from './HeroBanner';

const Carousel = ({ heroBanners }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider ref={sliderRef} {...settings} >
      {heroBanners.map((heroBanner, index) => (
        <div key={index}>
          {heroBanner && <HeroBanner heroBanner={heroBanner} />}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
