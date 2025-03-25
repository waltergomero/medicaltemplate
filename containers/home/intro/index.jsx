"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HomeData from "@/data/home.json";
import Intro from "@/components/intro";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider() {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(HomeData[1].slider);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState(false);

  // Function to show the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = ()=> {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="hero-slider-area">
      <div
        className="hero-slider relative h-[778px] justify-items-center  group hover:-translate-y-2"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[currentIndex].backgroundImage}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className=" transition-all duration-500 ease-in-out cursor-pointer"
        />
       <Intro  data={images[currentIndex]} />
      </div>
     
      <button
        className="absolute left-0 top-1/2 transform h-[459px]  -translate-y-1/2 text-white p-2 group"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-400 group-hover:text-white" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform h-[459px] -translate-y-1/2 text-white p-2 group"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-400 group-hover:text-white" />
      </button>

    </div>
  );
}