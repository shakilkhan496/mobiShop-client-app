import React from 'react';
import { Outlet } from 'react-router-dom';
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
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoard;