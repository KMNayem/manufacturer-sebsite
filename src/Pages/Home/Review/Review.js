import React from 'react';
import pic1 from '../../../image/review/pic1.jpg';
import pic2 from '../../../image/review/pic2.jpg';
import pic3 from '../../../image/review/pic3.jpg';
import { AiFillStar } from 'react-icons/ai';

const Review = () => {
    return (
        <div className='mt-32 pl-20 '>
            <h1 className='text-center text-4xl font-bold text-primary'><u>Here The All Reviews</u></h1>
            <div className='flex  mt-4 grid grid-cols-1 lg:grid-cols-3'>
                <div className="card w-60 h-52 bg-base-100 shadow-xl">
                     <figure className="px-10 pt-10">
                        <img src={pic1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className='mt-3'>
                        <p className='text-center font-semibold'>Alex Hallen</p>
                    </div>
                    <div className=" pl-16 flex items-center text-center">
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <p></p>
                    </div>
                </div>
                <div className="card  mt-4 w-60 h-52 bg-base-100 shadow-xl">
                     <figure className="px-10 pt-10">
                        <img src={pic2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className='mt-3'>
                        <p className='text-center font-semibold'>Maria Grand</p>
                    </div>
                    <div className=" pl-16 flex items-center text-center">
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <p></p>
                    </div>
                </div>
                <div className="card  mt-4 w-60 h-52 bg-base-100 shadow-xl">
                     <figure className="px-10 pt-10">
                        <img src={pic3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className='mt-3'>
                        <p className='text-center font-semibold'>Ache Nile</p>
                    </div>
                    <div className=" pl-16 flex items-center text-center">
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <h2 className="card-title text-yellow-500"><AiFillStar/></h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;