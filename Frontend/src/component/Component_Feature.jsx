import React from 'react';
import './Feature.css';

const Feature = ({ image, alt, title, description }) => (
    <div className="feature">
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
  
  const FeaturesSection = () => (
    <section className="features">
      <Feature
        image="images/Delivery_image-removebg-preview.png"
        alt="Car Icon"
        title="Punctual deliveries"
        description="Book an order anytime, anywhere."
      />
      <Feature
        image="images/payement_icon-removebg-preview.png"
        alt="Payment Icon"
        title="Secure Payments"
        description="Safe and hassle-free transactions."
      />
      <Feature
        image="images/support_icon-removebg-preview.png"
        alt="Support Icon"
        title="24/7 Support"
        description="Customer service always ready to help."
      />
    </section>
  );

export default FeaturesSection;