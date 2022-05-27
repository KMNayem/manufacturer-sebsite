import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            
            <div class="drawer drawer-mobile">
                
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                <h1 className='text-center text-4xl font-bold text-primary mt-7'><u>Your Order Dashboard</u></h1>
                         <Outlet></Outlet>
            </div> 
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label> 
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
                        <li className='font-bold'><Link to='/'>Home</Link></li>
                        <li className='font-bold'><Link to='/dashboard'>Dashboard</Link></li>
                        <li className='font-bold'><Link to='/about'>Blogs</Link></li>
                                    
                    </ul>
  
                </div>
            </div>
        </div>
    );
};

export default DashBoard;