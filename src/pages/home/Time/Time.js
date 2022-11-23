import React from 'react';
import Clock from 'react-live-clock';

const Time = () => {
    return (
        <div>
            <div className='bg-secondary h-36 justify-center items-center flex'>
                <h1 className='font-mono text-3xl text-white text-center font-bold'>
                    Times now : <Clock format={'HH:mm:ss'} ticking={true} timezone={''} />
                </h1>
            </div>
            <marquee style={{ background: 'black' }}><h1 className=' text-white'>Stay connected with us . Keep your eyes on our website for new product update</h1></marquee>
        </div>
    );
};

export default Time;