import React from 'react';
import banner from '../../../image/Banner/banner.jpg';

const Banner = () => {
    return (
        <div class="hero h-96" style={{background: `url(${banner}`}}>
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Welcome</h1>
            <h3 class="mb-5 text-5xl font-bold">THE ProPAINT</h3>
            <p class="mb-5">The best painter maker company in the world. We offer the Best deal to you..</p>
            <button class="btn btn-primary">Explore Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;