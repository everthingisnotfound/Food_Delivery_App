// Driver_Feature.js
import React, { useState, useEffect } from 'react';

function Driver_Feature() {
  const [Driver_Feature, setDriver_Feature] = useState([]);

  useEffect(() => {
    // Fetch data here and set it using setDriver_Feature
  }, []);

  return (
    <section className="Driver_Featured">
      <h2>Featured Restaurants</h2>
      <ul>
        {Driver_Feature.map((Driver) => (
          <li key={driver.id}>{driver.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default Driver_Feature;
