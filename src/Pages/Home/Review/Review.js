import React from 'react';

const Review = () => {
    return (
        <div className='mt-10 px-12 '>
            <h1 className='text-center text-4xl font-bold text-primary'><u>Here The All Reviews</u></h1>
            <div className='flex  mt-4 grid grid-cols-1 lg:grid-cols-3'>
                <div className="card w-60 h-52 bg-base-100 shadow-xl">
                     <figure className="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p></p>
                    </div>
                </div>
                <div className="card  mt-4 w-60 h-52 bg-base-100 shadow-xl">
                     <figure className="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p></p>
                    </div>
                </div>
                <div className="card  mt-4 w-60 h-52 bg-base-100 shadow-xl">
                     <figure className="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;