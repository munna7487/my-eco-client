import React, { useState, useEffect } from "react";
import Subbanner from "./Subbanner";

const MyBanner = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch banner data from backend
  useEffect(() => {
    fetch("https://eco-client-server.vercel.app/banner")
      .then((res) => res.json())
      .then((data) => {
        // Add your custom slide at the beginning
        const customSlide = {
          _id: "691175ae3eee0ab2254f93b8",
          title: "Perspiciatis eu odi",
          smallText: "Featured Challenge",
          subtitle: "Consequatur amet al",
          buttonText: "View Challenge",
          gradientFrom: "from-emerald-500",
          gradientTo: "to-teal-600",
          imageUrl: "https://i.ibb.co.com/whF1RXbQ/j-10.jpg",
          participants: 178,
          duration: "7 days",
          startDate: "2025-11-10T05:18:38.091Z",
          endDate: "2025-11-17T05:18:38.091Z",
        };

        // Prepend custom slide to the fetched data
        setSlides([customSlide, ...data]);
      })
      .catch((err) => console.log(err));
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (slides.length > 0) {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  if (slides.length === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white bg-black">
        Loading Banner...
      </div>
    );
  }

  const current = slides[currentSlide];

  return (
   <div>
     <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={slide._id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.imageUrl}
            srcSet={`${slide.imageUrl} 2x`}
            alt={slide.title}
            className="w-full h-full object-cover object-center filter brightness-75"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
        </div>
      ))}

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-12 lg:px-20">
        <div className="text-left text-white max-w-5xl">
          {/* Small Text */}
          <p className="inline-block px-4 py-1 text-sm font-bold tracking-widest text-emerald-400 bg-emerald-900/30 rounded-full mb-4 animate-pulse border border-emerald-500">
            {current.smallText}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-emerald-200 drop-shadow-2xl animate-fade-in">
            {current.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl mb-6 max-w-3xl font-medium opacity-90 animate-fade-in delay-200 leading-relaxed">
            {current.subtitle}
          </p>

          {/* Participants & Duration */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-sm md:text-lg font-semibold">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              <span>{current.participants} participants</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{current.duration}</span>
            </div>
          </div>

          {/* Date Range */}
          <p className="text-sm md:text-base text-gray-300 mb-8 font-medium">
            {new Date(current.startDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}{" "}
            -{" "}
            {new Date(current.endDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          {/* Button */}
          <button
            className={`
              relative overflow-hidden bg-gradient-to-r ${current.gradientFrom} ${current.gradientTo}
              text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl
              hover:scale-105 hover:shadow-2xl transition-all duration-500
              animate-fade-in delay-500 flex items-center gap-3 group
            `}
          >
            <span className="relative z-10">{current.buttonText}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 text-white p-4 bg-black/50 rounded-full hover:bg-emerald-600 hover:scale-110 transition-all duration-300 backdrop-blur-md border border-white/20"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-white p-4 bg-black/50 rounded-full hover:bg-emerald-600 hover:scale-110 transition-all duration-300 backdrop-blur-md border border-white/20"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ${
              index === currentSlide
                ? "w-14 h-3 bg-emerald-400 rounded-full shadow-lg"
                : "w-3 h-3 bg-white bg-opacity-40 rounded-full hover:bg-opacity-80 border border-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    {/* sub bannner */}
    <Subbanner></Subbanner>
   </div>
  );
};

export default MyBanner;