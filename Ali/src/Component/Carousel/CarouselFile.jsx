import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "../Carousel/Image/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselFile() {
  return (
    <div className="">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
      >
        {img.map((ImageLink, index) => (
  <div key={index} className="relative w-full h-360px">
    <img
      src={ImageLink}
      alt="Carousel Image"
      className="w-full h-full object-cover"
    />
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-60"></div>
  </div>
))}

      </Carousel>
    </div>
  );
}

export default CarouselFile;
