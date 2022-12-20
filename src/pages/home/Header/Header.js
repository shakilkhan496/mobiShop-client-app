import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import { VANTA } from 'vanta';
import BIRDS from 'vanta/dist/vanta.net.min.js';


const Header = () => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    VANTA.NET({
        el: "#my-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff4e15,
        backgroundColor: 0xffffff,
        points: 4.00,
        maxDistance: 13.00,
        spacing: 20.00

    })


    return (
        <div ref={myRef} id='my-background' style={{ background: `url('https://i.ibb.co/4KjVmsQ/ezgif-com-gif-maker-1.gi')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="hero  min-h-screen ">
            <div style={{ backdropFilter: 'blur(2px)' }} className="hero-content rounded-3xl z-10 flex-col lg:flex-row-reverse">
                <img alt='banner img' src="https://i.ibb.co/rH3kHf4/output-onlinegiftools-1.gif" className="flex-1 rounded-full bg-gradient-to-r from-secondary to-primary w-80 shadow-2xl" />
                <div className='flex-1'>
                    <h1 className="text-5xl  font-mono font-bold"><span className='text-7xl'>GET</span> used Phones at <br /> best <span className='text-7xl'>PRICE</span></h1>
                    <p className="py-6 font-semibold text-xl">Looking for used phone at reasonable price? You are welcome . Find your best match in our website and stay away from spam . If any problem with posted product report the seller . Thank you.</p>
                    <p className=' p-4 text-white text-2xl w-60 rounded bg-gradient-to-r from-primary to-secondary'><marquee>Explore us now</marquee></p>
                </div>
            </div>
        </div>
    );
};

export default Header;