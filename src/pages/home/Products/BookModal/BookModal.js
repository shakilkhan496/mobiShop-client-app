import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';

const BookModal = ({ booking }) => {
    const { user } = useContext(AuthContext);
    const { } = booking;
    console.log(booking);

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


                                    <form className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="text" placeholder="email" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="text" placeholder="password" className="input input-bordered" />
                                            <label className="label">
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                            </label>
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