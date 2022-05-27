import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [myOrder, setMyOrder ] = useState([]);
    const [user] = useAuthState(auth);

    useEffect( () => {
        if(user){
            fetch(`http://localhost:5000/order?orderEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));
        }
    },[]);

    return (
        <div>
            <h1>this is my order : {myOrder.length}</h1>
        <div class="overflow-x-auto mt-7">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Email</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrder.map(order => 
                            <tr>
                        <th>1</th>
                        <td>{order.orderPname}</td>
                        <td>{order.orderEmail}</td>
                        <td>{order.orderQty}</td>
                        <td >{order.orderPrice}</td>
                    </tr>
                            )
                    }
                    
      
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MyOrder;