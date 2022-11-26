import React from 'react';
import toast from 'react-hot-toast';
import verifiedLogo from '../../../assets/icon/bluetik.png'

const MobilesCard = ({ mobile, setBooking }) => {
    const { OriginalPrice, img, isVerified, paid, location, postTime, productName, resalePrice, sellerName, useTime, _id } = mobile;



    const handleReport = (id) => {
        const confirm = window.confirm('Are you sure you want to report this?');
        if (confirm) {
            fetch('https://assignment-12-server-sable.vercel.app/report', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ id })
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        toast.success('Reported successfully')
                    }
                })
        }
    }

    return (
        <>
            {
                !paid === true &&
                <div className="card font-mono shadow hover:shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div>
                            <h2 className="card-title text-2xl">{productName}</h2>
                            <p>Original Price : {OriginalPrice} $</p>
                            <p className='text-primary font-bold text-xl'>Resale Price : {resalePrice} $</p>
                            <p>Location : {location}</p>
                            <p>{useTime} used</p>

                        </div>
                        <div>
                            <p className='flex items-center'>Seller Name : {sellerName} {isVerified === true ? <img className='w-6 bg-blue-200 rounded-full' alt='verified' src={verifiedLogo}></img> : ''} </p>
                            <p className='text-secondary font-thin'>posted at{postTime}</p>
                        </div>
                        <p></p>
                        <div className="card-actions w-full">
                            <label
                                onClick={() => setBooking(mobile)}
                                htmlFor="booking-modal" className='btn w-full text-xl btn-primary'>Book Now</label>
                        </div>
                        <div>
                            <button onClick={() => handleReport(_id)} className='btn btn-xs w-full bg-red-600 text-white normal-case' >Report This Item</button>
                        </div>

                    </div>
                </div>
            }
        </>
    );
};

export default MobilesCard;