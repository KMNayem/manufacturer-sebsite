import React from 'react';
import AnotherBanner from '../AnotherBanner/AnotherBanner';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AnotherBanner></AnotherBanner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;