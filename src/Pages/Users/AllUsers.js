import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserRow from '../UserRow/UserRow';

const AllUsers = () => {
    const {data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user',{
      method: 'GET',
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        
        <div>
            <h2 className='text-center text-4xl mt-8'><u>All Users</u></h2>
            <div class="overflow-x-auto">
  <table class="table w-full mt-3">
    
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Admin</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      {
          users.map( user => <UserRow
          key={user._id}
          user={user}
          refetch ={refetch}
          ></UserRow>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;