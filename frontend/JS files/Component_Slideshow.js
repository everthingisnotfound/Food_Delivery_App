// TestimonialSlideshow.js
import React, { useState, useEffect } from 'react';
import TestimonialCard from './Delivery app//JS files/Component_Card';

const TestimonialSlideshow = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next testimonial card
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className="testimonial-slideshow">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          testimonial={testimonial}
          isActive={index === currentIndex}
        />
      ))}
    </div>
  );
};

export default TestimonialSlideshow;
