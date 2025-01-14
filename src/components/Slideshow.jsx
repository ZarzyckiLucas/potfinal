import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const Slideshow = () => {
  // Array of slide data (images and captions)
  const slides = [
    {
      image: "https://via.placeholder.com/800x400?text=Image+1",
      caption: "This is the first image.",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Image+2",
      caption: "This is the second image.",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Image+3",
      caption: "This is the third image.",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Image+4",
      caption: "This is the fourth image.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide
  const [isAnimating, setIsAnimating] = useState(false); // State to track animation

  const intervalTime = 6000; // 3 seconds for each slide
  const animationDuration = 500; // 0.5 seconds for animation

  // Function to update the slide index
  const updateSlide = () => {
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Update to the next slide
      setIsAnimating(false); // End animation
    }, animationDuration); // Match this with animation duration in CSS
  };

  useEffect(() => {
    const slideInterval = setInterval(updateSlide, intervalTime); // Auto-advance the slides

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="news">
      <div className="slide-header">
        <h2>Keep up to Date</h2>
        <p>Get insight into our most recent events/trips</p>
      </div>
      <div className="slideshow-container">
        {/* Slideshow image */}
        <div className="slide-container">
          <img
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            className={`slide-image ${isAnimating ? "sliding" : ""}`}
          />
        </div>

        {/* Caption */}
        <div
          className={`caption-container ${
            isAnimating ? "sliding-caption" : ""
          }`}
        >
          <p>{slides[currentSlide].caption}</p>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
