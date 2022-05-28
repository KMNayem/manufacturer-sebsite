import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const DashBoard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div>
            
            <div class="drawer drawer-mobile">
                
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                <h1 className='text-center text-4xl font-bold text-primary mt-7'><u>Dashboard</u></h1>
                         <Outlet></Outlet>
            </div> 
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label> 
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
                        <li className='font-bold'><Link to='/dashboard'>Order Dashboard</Link></li>
                        {admin && <>
                       
                        <li className='font-bold'><Link to='/dashboard/users'>All Users</Link></li>
                        <li className='font-bold'><Link to='/dashboard/addTools'>Add Tools</Link></li> </>}
                        <li className='font-bold'><Link to='/about/review'>My Review</Link></li>
                       
                                    
                    </ul>
  
                </div>
            </div>
        </div>
    );
};

export default DashBoard;