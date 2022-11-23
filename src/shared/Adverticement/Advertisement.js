import React from 'react';

const Advertisement = () => {
    return (
        <div>
            <h1 className='lg:text-4xl md:text-4xl text-3xl text-center font-mono font-semibold mt-20 mb-20'>Our top <span className='text-primary'>products</span></h1>
            <marquee direction="right" >
                <div className='flex '>
                    <div className="card   bg-base-100 shadow-xl image-full">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Grab me now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card   bg-base-100 shadow-xl image-full">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Grab me now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </marquee>
        </div>
    );
};

export default Advertisement;