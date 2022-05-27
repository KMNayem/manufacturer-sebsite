import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const OrderForm = () => {
    const minValue =( that, value )=>{
        const min = parseInt(that.getAttribute('min'))
        const val = parseInt(value);
        if(val < min || isNaN(val)){
            return alert('please order at least 50 product..');
        }
        else{
            return val;
        }
    }

    //****************** ORDER WORK HERE ******************//



    const [user, loading, error] = useAuthState(auth);

    return (
        <div className='mt-5'>
            <h2 className='mt-3 font-bold text-2xl '><u>Order Form</u></h2>
            <div class="form-control mt-3 w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Your Name</span>
                </label>
                <input type="text" disabled value={user?.displayName || ''} placeholder="Name Here" class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Your Email</span>
                </label>
                <input type="text"  disabled value={user?.email || ''} placeholder="Email here" class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Phone Number</span>
                    </label>
                    <input type="number" placeholder="Number here" class="input input-bordered w-full max-w-xs" />
                </div>
            <div class="form-control w-full max-w-xs">
                <label class="label mt-2">
                    <span class="label-text">Quantity :</span>
                    <input type="number" onKeyUp={minValue} min="50" placeholder="" class="input input-bordered w-24 max-w-xs" />
                </label>  
            </div>
                
                <div class="mt-4">
                    <button class="btn btn-primary">Confirm Order</button>
                </div>
        </div>
    );
};

export default OrderForm;