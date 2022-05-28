import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'; 
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Loading from '../Shared/Loading/Loading';

const stripePromise = loadStripe('pk_test_51L4OkxDqPzPZ94HBdpQ0E4v7LjurWFV6XZP6jyMHVORIOWG7kMaqooG2GqCAxBguqm2sHk0QzdsITJnqstEldhII00QiioPuvn');


const Payment = () => {
    const {id} = useParams();

    const url = `https://calm-beyond-17543.herokuapp.com/order/${id}`;

    const {data: order, isLoading} = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res=>res.json()));

        if(isLoading){
            return <Loading></Loading>
        }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class=" text-3xl font-semibold text-green-600 text-center">Payment From</h2>
                    <div className='mt-5'>
                    <p >Product Name : <span className='font-bold'>{order.orderPname}</span> </p>
                    <p className='mt-2'>Order Email : <span className='font-bold'>{order.orderEmail}</span> </p>
                    <p className='mt-2' >Product Quantity : <span className='font-bold'>{order.orderQty}</span> </p>       
                    <p className='mt-2'>Total Price : <span className='font-bold'>${order.orderPrice}</span> </p>
                    
                    </div>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                
                </div>
            </div>
        </div>
    );
};

export default Payment;