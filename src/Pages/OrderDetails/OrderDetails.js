import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderForm from '../OrderForm/OrderForm';

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
                
                <OrderForm></OrderForm>
               

                
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