import React from 'react';
import { FaCheck, FaGlobeAmericas, FaPaperPlane, FaHandHoldingUsd } from "react-icons/fa";


const BusinessSummary = () => {
    return (
        <div className='mt-7 '>
            <h1 className='text-center text-4xl font-bold text-primary'>What We Provide ?</h1>
            <p className='text-center font-semibold text-purple-500'>This is how we can help you as our product. Let's SEE... </p>

      <div className='pl-20 mt-4 grid grid-cols-1 lg:grid-cols-4 gap-6' >
      <div className="card w-40  bg-base-100 shadow-xl mt-5 ">
             <div className="card-body ">
                <h2 className="card-title justify-center text-4xl text-green-500"><FaCheck/></h2>
                <p className='mt-2'>Good Service</p>
                
            </div>
        </div>
      <div className="card w-40  bg-base-100 shadow-xl mt-5">
             <div className="card-body">
                <h2 className="card-title justify-center text-4xl text-blue-500"><FaGlobeAmericas/></h2>
                <p className='mt-2 pr-3'>Communication</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
      <div className="card w-40  bg-base-100 shadow-xl mt-5">
             <div className="card-body">
                <h2 className="card-title justify-center text-4xl"><FaPaperPlane/></h2>
                <p className='mt-2'>Safe Delivery</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
      <div className="card w-40  bg-base-100 shadow-xl mt-5">
             <div className="card-body">
                <h2 className="card-title justify-center text-4xl text-pink-500"><FaHandHoldingUsd/></h2>
                <p className='mt-2 pl-3'>CashBack</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
      </div>
      <div className='mt-5 lg:pl-56'>
      <div tabindex="0" className="max-w-lg justify-center collapse collapse-open border border-base-300 bg-base-100 rounded-box"> 
  <div className="collapse-title text-2xl font-medium text-primary">
    If Your need to any information from us here the...
  </div>
  <div className="collapse-content"> 
    <p >You can join with us just only click here to.. 
    </p>
    <button className="btn btn-primary m-5">Contact us</button>
    <button className="btn  btn-accent h-10">Learn More</button>
  </div>
</div>
      </div>
        </div>
    );
};

export default BusinessSummary;