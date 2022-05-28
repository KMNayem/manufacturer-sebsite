import React from 'react';
import pic from '../../../image/Banner/roller1.jpg'

const AnotherBanner = () => {
    return (
        <div>
            <div class="hero min-h-screen mt-10 p-10">
                <div class="hero-content flex-col lg:flex-row-reverse">
                     <img src={pic} class="max-w-sm w-72 rounded-lg shadow-2xl" />
                     <div>
                        <h1 class="text-5xl font-bold text-primary">The ProPAINT</h1>
                        <p class="py-6">Is your deck looking a little worse for wear? Do you wish it was in better shape for entertaining or enjoying with your family? Weather and time can take a heavy toll on your deck, leaving the paint peeling and chipped and overall looking less than stellar. But painting an old deck requires proper preparation. If you think it’s time for a fresh coat of paint, but you’re not sure how to ready your deck, you’ve come to the right place</p>
                        <button class="btn btn-primary">Contact Us</button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default AnotherBanner;