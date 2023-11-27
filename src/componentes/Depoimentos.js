import React, { useState, useRef, useEffect } from 'react';
import Depoimento1 from './imgs/Depoimento1.JPG';
import Depoimento2 from './imgs/Depoimento2.JPG';
import Depoimento3 from './imgs/Depoimento3.JPG';

function Depoimento() {
  const [counter, setCounter] = useState(0);
  const carouselWrapperRef = useRef(null);
  const slidesRef = useRef([]);

  const slideWidth = slidesRef.current.length > 0 ? slidesRef.current[0].clientWidth : 0;

  const nextSlide = () => {
    if (counter < slidesRef.current.length - 1) {
      setCounter(counter + 1);
    }
  };

  const prevSlide = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    if (carouselWrapperRef.current) {
      carouselWrapperRef.current.style.transform = `translateX(-${counter * slideWidth}px)`;
    }
  }, [counter, slideWidth]);

  return (
    <div className="depoiment">
      <div className="carousel-container">
        <div className="carousel-wrapper" ref={carouselWrapperRef}>
          <div className="carousel-slide" ref={(el) => (slidesRef.current[0] = el)}>
            <img src={Depoimento1} alt="" />
          </div>
          <div className="carousel-slide" ref={(el) => (slidesRef.current[1] = el)}>
            <img src={Depoimento2} alt="" />
          </div>
          <div className="carousel-slide" ref={(el) => (slidesRef.current[2] = el)}>
            <img src={Depoimento3} alt="" />
          </div>
        </div>
        <button id="prevBtn" onClick={prevSlide}>←</button>
        <button id="nextBtn" onClick={nextSlide}>→</button>
      </div>
    </div>
  );
}

export default Depoimento;
