import React from 'react';
import verifiedLogo from '../../../assets/icon/bluetik.png'

const MobilesCard = ({ mobile }) => {
    console.log(mobile);
    const { OriginalPrice, img, isVerified, location, postTime, productName, resalePrice, sellerName, useTime, sellerEmail } = mobile;

    return (
        <div className="card font-mono shadow hover:shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title">{productName}</h2>
                    <p>Original Price : {OriginalPrice}</p>
                    <p>Resale Price : {resalePrice}</p>
                    <p>Location : {location}</p>
                    <p>{useTime} used</p>

                </div>
                <div>
                    <p className='flex items-center'>Seller Name : {sellerName} {isVerified === true ? <img className='w-6 bg-blue-200 rounded-full' alt='verified' src={verifiedLogo}></img> : ''} </p>
                    <p>posted at{postTime}</p>
                </div>
                <p></p>
                <div className="card-actions w-full">
                    <button className="btn w-full text-xl btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default MobilesCard;