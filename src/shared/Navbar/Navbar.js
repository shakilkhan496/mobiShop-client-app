import React from 'react';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const navMenus = <>
        <li><Link to='/' className=' btn-ghost'>Home</Link></li>

        <li><Link to='/login'><Button cls={'text-white font-semibold '}>Login</Button></Link></li>
    </>
    return (
        <div className="navbar  text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu bg-white menu-compact transition  dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {navMenus}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case font-mono text-3xl"><span className='pr-2 text-2xl animate-bounce'><FontAwesomeIcon icon={faMobile} /></span> <span> Mobi<span className='text-primary'>Shop</span></span></Link>
                <label tabIndex={0} className="btn btn-ghost  ml-12 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            <div className="navbar-center hidden lg:flex">

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navMenus}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;