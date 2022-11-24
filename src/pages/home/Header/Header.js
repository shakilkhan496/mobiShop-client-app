import React from 'react';
import Button from '../../../components/Button/Button';

const Header = () => {
    return (
        <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='banner img' src="https://i.gifer.com/DXKg.gif" className="flex-1 rounded-full w-80 shadow-2xl" />
                <div className='flex-1'>
                    <h1 className="text-5xl  font-mono font-bold">Get used Phones at <br /> best price</h1>
                    <p className="py-6 font-mono">Looking for used phone at reasonable price? You are welcome . Find your best match in our website and stay away from spam . If any problem with posted product report the seller . Thank you.</p>
                    <Button cls={'text-white'}>Explore now</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;