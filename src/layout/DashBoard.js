import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const DashBoard = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 lg:w-60 w-40 bg-white text-black font-mono">

                        <li><Link to={`/dashboard`} className='btn  hover:outline-primary btn-ghost'>My orders</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoard;