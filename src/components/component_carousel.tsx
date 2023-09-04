import { useState, useEffect } from 'react';

interface CarouselProps {
    slides: JSX.Element[];
}

function ComponentCarousel({ slides }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change slide every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [slides]);

  return (
    <div className="relative flex justify-center items-center w-full md:w-4/5 lg:w-3/4 px-4 h-30">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${
            index === currentIndex ? 'block' : 'hidden'
          } inset-0 transition-all w-full`}
        >
          {slide}
        </div>
      ))}
    </div>
  );
}

export default ComponentCarousel;
