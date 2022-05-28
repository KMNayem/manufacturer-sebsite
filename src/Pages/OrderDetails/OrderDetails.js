import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const OrderDetails = () => {
     const [user, loading] = useAuthState(auth);
     const {productId} = useParams();
     const [product, setProduct] = useState({});
     const {_id, quantity, balance, picture, name, about} = product;
    
     useEffect(() =>{
         const url =`https://calm-beyond-17543.herokuapp.com/product/${productId}`;
         console.log(url);
         fetch(url)
         .then(res => res.json())
         .then(data => setProduct(data));
     }, []);

     
     const handleOrderSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.phone.value;
        let orderQuantity = event.target.orderQuantity.value;
        const productName = event.target.productName.value;
        let totalPrice = parseInt(orderQuantity) * parseInt(balance);
        
        
        console.log(name, productName, email,  number, totalPrice);
        const order = {
            orderId: _id,
            orderName: user.displayName,
            orderQty: orderQuantity,
            orderEmail: user.email,
            orderNumber: number,
            orderPname: productName,
            orderPrice: totalPrice
        }
        fetch('https://calm-beyond-17543.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            toast.success("Your order submited successfully !")

            console.log(data);
        });

        
     }

   

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

            <form onSubmit={handleOrderSubmit}>
                <div  className='mt-5'>
                    <h2 className='mt-3 font-bold text-2xl '><u>Order Form</u></h2>
                    <div class="form-control mt-3 w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Product Name</span>
                        </label>
                        <input type="text" disabled name="productName"  value={name} placeholder="Name Here" class="input font-bold text-center input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control mt-3 w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Customer Name</span>
                        </label>
                        <input type="text" disabled name="name"  value={user?.displayName || ''} placeholder="Name Here" class="input  input-bordered w-full max-w-xs" />
                    </div>
                    
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Customer Email</span>
                        </label>
                        <input type="text" name="email"  disabled value={user?.email || ''} placeholder="Email here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                         <label class="label">
                            <span class="label-text">Phone Number</span>
                         </label>
                         <input type="number" name='phone' required placeholder="Number here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                         <label class="label mt-2">
                             <span class="label-text">Quantity :</span>
                             <input type="number" required name="orderQuantity" min="50" max="500"  class="input input-bordered w-24 max-w-xs" />
                         </label>  
                          
                    </div>
                    {/* <div class="form-control w-full max-w-xs">
                         <label class="label mt-2">
                             <span class="label-text font-bold">Total Price : </span>
                             <input type="number" name="totalPrice"  class="input input-bordered w-24 max-w-xs" />
                         </label>  
                          
                    </div> */}
                
                    <div class="mt-4">
                        <input type='submit' value='CONFIRM ORDER' class="btn btn-primary"/>
                     </div>
                </div>
            </form>
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