import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import verifiedLogo from '../../../assets/icon/bluetik.png'
import BookModal from './BookModal/BookModal';

const MobilesCard = ({ mobile, setBooking }) => {
    const { OriginalPrice, img, isVerified, location, postTime, productName, resalePrice, sellerName, useTime } = mobile;


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
                    <label
                        onClick={() => setBooking(mobile)}
                        htmlFor="booking-modal" className="btn w-full text-xl btn-primary">Book Now</label>
                </div>

            </div>
        </div>
    );
};

export default MobilesCard;