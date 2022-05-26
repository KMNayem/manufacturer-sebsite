import React from 'react';
import banner from '../../../image/Banner/banner.jpg';

const Banner = () => {
    return (
        <div className="hero h-96" style={{background: `url(${banner}`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <h3 className="mb-5 text-5xl font-bold">THE ProPAINT</h3>
            <p className="mb-5">The best painter maker company in the world. We offer the Best deal to you..</p>
            <button className="btn btn-secondary">Explore Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;