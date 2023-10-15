import React from 'react';
import Features from './Delivery app/JS files/Component_index';
import Footer from './Delivery app/JS files/Component_footer';
import TestimonialSlideshow from './Delivery app/JS files/Component_Slideshow'; //
function Details() {
    const testimonials = [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'John Doe',
        },
        {
            text: 'Suspendisse potenti. Nulla bibendum elit in quam ultricies, vel varius purus tempor.',
            author: 'Jane Smith',
        },
        {
            text: 'Vestibulum aliquam felis a ante ultrices, non tristique dui tincidunt.',
            author: 'Alice Johnson',
        },
    ];
}

    const HomePage = () => {
        return (
            <div>
                <Features />
                <TestimonialSlideshow testimonials={testimonials} />
                <Footer />
            </div>
        );
    };

    export default HomePage;