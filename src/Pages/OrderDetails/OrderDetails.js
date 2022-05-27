import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {

     const {productId} = useParams();
     const [product, setProduct] = useState({});
     const {_id, quantity, balance, picture, name, about} = product;

     useEffect(() =>{
         const url =`http://localhost:5000/product/${productId}`;
         console.log(url);
         fetch(url)
         .then(res => res.json())
         .then(data => setProduct(data));
     }, []);


    return (
        <div className='mt-7'>
            <h1 className='text-center font-bold text-4xl text-primary'><u>Your order Here !</u></h1>
            <div class="card mt-7 max-w-sm mx-auto  px-12 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={picture} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-3xl text-primary">{name}</h2>
                <h4>Quantity: {quantity}</h4>
                <h4>Price: ${balance} per pcs</h4>
                <h4>Minimum Order: 50 pcs</h4>
                <h2 className='mt-3 font-bold text-2xl '><u>Order Form</u></h2>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Your Name</span>
                    </label>
                        <input type="text" placeholder="Name Here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Your Email</span>
                    </label>
                        <input type="text" placeholder="Email here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Quantity</span>
                    </label>
                        <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Phone Number</span>
                    </label>
                        <input type="number" placeholder="Number here" class="input input-bordered w-full max-w-xs" />
                </div>
               

                <div class="card-actions mt-3">
                    <button class="btn btn-primary">Confirm Order</button>
                </div>
            </div>
        </div>
        <div class="card w-96 mt-10  max-w-sm mx-auto bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 className='text-center font-bold text-2xl text-primary'>About the Product</h2>
    <p>{about}</p>
  </div>
</div>
        </div>
    );
};

export default OrderDetails;