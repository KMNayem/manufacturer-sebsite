import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [myOrder, setMyOrder ] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect( () => {
        if(user){
            fetch(`http://localhost:5000/order?orderEmail=${user.email}`, {
                method: 'GET', 
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`    
                }
            })
            .then(res => {
                console.log('res', res);
                if(res.status === 401 || res.status === 403){
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/')
                }
                return res.json()})
            .then(data => {setMyOrder(data)});
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
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrder.map(order => 
                            <tr>
                        <th>1</th>
                        <td>{order.orderPname}</td>
                        <td>{order.orderEmail}</td>
                        <td>{order.orderQty} pcs</td>
                        <td >${order.orderPrice}</td>
                        <td >
                            {(order.orderPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-xs">pay</button>
                            </Link>  }
                            {(order.orderPrice && order.paid) && <span class="text-success">paid</span>
                              }
                        </td>
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