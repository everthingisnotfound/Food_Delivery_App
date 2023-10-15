// TestimonialCard.js
import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p>{testimonial.text}</p>
        <p className="testimonial-author">{testimonial.author}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
