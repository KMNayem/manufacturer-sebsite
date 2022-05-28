import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user , refetch}) => {
    const {email, role} = user;
    const makeAdmin =() =>{
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to make Admin !')
            }

            return res.json()})
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                toast.success('Admin Make Successfully !')
            }
        })
    }
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        <td><button class="btn btn-xs text-red-500">Delete User</button></td>
      </tr>
    );
};

export default UserRow;