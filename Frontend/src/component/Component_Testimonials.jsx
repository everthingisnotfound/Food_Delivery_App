import React, { useState, useEffect } from 'react';

const TestimonialSlider = () => {
  const testimonials = [
    {
      text: "Testimonial 1 text goes here.",
      author: "John Doe",
    },
    {
      text: "Testimonial 2 text goes here.",
      author: "Jane Smith",
    },
    {
      text: "Testimonial 3 text goes here.",
      author: "Josh Tyler",
    },
    {
      text: "Testimonial 4 text goes here.",
      author: "Park Tyson",
    },
    {
      text: "Testimonial 5 text goes here.",
      author: "John Doe",
    },
    {
      text: "Testimonial 6 text goes here.",
      author: "Jane Smith",
    },
    {
      text: "Testimonial 7 text goes here.",
      author: "Josh Tyler",
    },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideshowInterval = setInterval(nextTestimonial, 5000);

    return () => {
      clearInterval(slideshowInterval);
    };
  }, []);

  const showTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-slideshow">
      <div className="testimonial-cards-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="testimonial-text">
              <p id="testimonial-text">{testimonial.text}</p>
            </div>
            <div className="testimonial-author">
              <img src="images/user-avatar1.jpg" alt="User Avatar" />
              <p id="author-name">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-slider">
        <button id="prev-testimonial" onClick={prevTestimonial}>
          Previous
        </button>
        <button id="next-testimonial" onClick={nextTestimonial}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
