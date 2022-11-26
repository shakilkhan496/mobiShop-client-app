import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { Link, } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import useBuyer from '../../hooks/useBuyer';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [linkState, setLinkState] = useState('');
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isUser] = useBuyer(user?.email);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success(`Logged out successfully`);
                localStorage.removeItem('token');
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        if (isUser) {
            setLinkState('/dashboard')
        }
        if (isAdmin) {
            setLinkState('/dashboard/allSellers')
        }
        if (isSeller) {
            setLinkState('/dashboard/myProducts')
        }
    }, [isSeller, isAdmin, isUser])

    const navMenus = <>
        <li><Link to='/' className=' btn-ghost'>Home</Link></li>
        <li><Link to='/blogs' className=' btn-ghost'>Blogs </Link></li>
        {
            user?.uid ?
                <>
                    <li><Link className='font-semibold' to={linkState}>Dashboard</Link></li>
                    <p className='text-xs lg:p-4 p-2 sm:w-28 md:mb-2 mb-2 lg:mb-0 font-bold bg-black rounded-full text-white px-3 mr-2 '>{user.displayName}</p>
                    <li><button onClick={handleLogOut} className='text-white bg-primary btn rounded-md  font-semibold'>Logout</button></li>
                </>
                :
                <li><Link to='/login'><Button cls={'text-white font-semibold '}>Login</Button></Link></li>
        }
    </>
    return (
        <div className='flex items-center justify-center'>
            <div className="navbar sticky top-0 z-50 bg-white shadow  text-black">
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

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navMenus}
                    </ul>
                </div>

            </div>
            <label htmlFor="dashboard" tabIndex={1} className="btn btn-ghost float-right  ml-12 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;

