import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useEffect } from "react";
import { useState } from "react";

const MyCarousel = () => {
  // Simplified flows array with each flow being a single image
  const flows = [
    "img1.jpg", // Flow 1
    "img2.jpg", // Flow 2
    "img3.jpg", // Flow 3
  ];
  const [currentFlow, setCurrentFlow] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Move to the next flow after 1 second of displaying the current flow
      setCurrentFlow((prevFlow) => (prevFlow + 1) % flows.length);
    }, 2500); // Change flow every 1 second

    return () => clearTimeout(timer); // Clean up on component unmount
  }, [currentFlow]);

  return (
    <Carousel>
      <div>
        <img
          className="max-[400px]:h-[250px] h-[500px] w-[1024px] max-[390px]:w-[370px] rounded-xl"
          src={flows[currentFlow]}
          alt={`carousel-${currentFlow}`}
        />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
