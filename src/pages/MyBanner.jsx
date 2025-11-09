import React, { useState, useEffect } from "react";

// Replace these with your actual eco-images inside src/assets/
import eco1 from "../assets/abba.jpg";   // e.g., forest, people planting trees
import eco2 from ".././assets/tree-1.jpg";   // e.g., solar panels, city greenery
import eco3 from ".././assets/tree-2.jpg";   // e.g., community cleanup
import eco4 from ".././assets/tree-3.jpg";   // e.g., recycling, zero-waste lifestyle

const MyBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: eco1,
      smallText: "Sustainable • Community • Impact",
      title: "Join the Green Movement",
      subtitle: "Discover challenges, share eco-tips, and track your environmental impact together.",
      buttonText: "Start Now",
      gradientFrom: "from-green-600",
      gradientTo: "to-emerald-500",
    },
    {
      image: eco2,
      smallText: "Local • Fun • Meaningful",
      title: "Find Green Events Near You",
      subtitle: "Tree planting, cleanups, workshops — connect with eco-warriors in your city.",
      buttonText: "Explore Events",
      gradientFrom: "from-teal-600",
      gradientTo: "to-cyan-500",
    },
    {
      image: eco3,
      smallText: "Track • Reduce • Celebrate",
      title: "Measure Your Carbon Footprint",
      subtitle: "Log daily habits, see real-time savings, and celebrate milestones with the community.",
      buttonText: "Track Impact",
      gradientFrom: "from-lime-600",
      gradientTo: "to-green-500",
    },
    {
      image: eco4,
      smallText: "Learn • Share • Inspire",
      title: "Share Practical Eco-Tips",
      subtitle: "From zero-waste hacks to urban gardening — grow together, one tip at a time.",
      buttonText: "View Tips",
      gradientFrom: "from-emerald-500",
      gradientTo: "to-teal-600",
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const current = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
        </div>
      ))}

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-6xl">
          <p className="text-sm md:text-xl font-bold tracking-widest text-lime-300 mb-4 animate-pulse">
            {current.smallText}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 drop-shadow-2xl animate-fade-in">
            {current.title}
          </h1>
          <p className="text-lg md:text-3xl mb-10 max-w-4xl mx-auto font-medium opacity-90 animate-fade-in delay-200">
            {current.subtitle}
          </p>
          <button
            className={`
              relative overflow-hidden bg-gradient-to-r ${current.gradientFrom} ${current.gradientTo}
              text-white font-bold py-5 px-12 rounded-full text-xl shadow-2xl
              hover:scale-110 hover:shadow-lg transition-all duration-500
              animate-fade-in delay-500
            `}
          >
            <span className="relative z-10">{current.buttonText}</span>
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity"></div>
          </button>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 text-white p-4 bg-black/40 rounded-full hover:bg-black/60 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-white p-4 bg-black/40 rounded-full hover:bg-black/60 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ${
              index === currentSlide
                ? "w-16 h-3 bg-lime-400 rounded-full shadow-lg"
                : "w-3 h-3 bg-white bg-opacity-50 rounded-full hover:bg-opacity-80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBanner;