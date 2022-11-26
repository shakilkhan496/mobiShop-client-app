import { useQuery } from '@tanstack/react-query';
import { error } from 'daisyui/src/colors';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const BookModal = ({ booking, setBooking }) => {
    const { user } = useContext(AuthContext);
    const { productName, resalePrice, sellerEmail, img } = booking;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const phoneNumber = form.phoneNumber.value;
        const meetingLocation = form.meetingLocation.value;

        const bookingData = {
            productName,
            phoneNumber,
            meetingLocation,
            resalePrice,
            buyerName: user?.displayName,
            buyerEmail: user?.email,
            sellerEmail: sellerEmail,
            img
        }
        fetch('https://assignment-12-server-sable.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Product booked successfully')
                    setBooking(null);
                    //navigate
                }
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div>
                        <div className="hero bg-white">
                            <div className="hero-content flex-col">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-xl font-bold">Product Info</h1>

                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


                                    <form onSubmit={handleSubmit} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-xs">Name</span>
                                            </label>
                                            <input disabled type="text" defaultValue={user?.displayName} className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-xs">Email</span>
                                            </label>
                                            <input disabled type="text" defaultValue={user?.email} className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-sm">Item name</span>
                                            </label>
                                            <input type="text" disabled defaultValue={productName} className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-sm">Resell Price</span>
                                            </label>
                                            <input type="text" disabled defaultValue={resalePrice} className="input input-bordered" />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-sm">Your phone number</span>
                                            </label>
                                            <input required type="number" name='phoneNumber' placeholder='enter your phone number' className="input input-bordered" />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-sm">Meeting Location</span>
                                            </label>
                                            <input required type="text" name='meetingLocation' className="input input-bordered" />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>



                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookModal;