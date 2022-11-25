import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import MobilesCard from './MobilesCard';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';
import BookModal from './BookModal/BookModal';

const Products = () => {
    const mobiles = useLoaderData();
    const { loading } = useContext(AuthContext);
    const [booking, setBooking] = useState(null);


    return (
        <div>
            {
                mobiles.length > 0 ?
                    <div>
                        <div className='text-center font-mono pt-5 text-2xl'>
                            <h1>Your selected phones</h1>
                        </div>
                        {
                            loading ? <Loading></Loading>
                                :
                                <div className='grid lg:p-20 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-5'>
                                    {
                                        mobiles?.map(mobile => <MobilesCard setBooking={setBooking} key={mobile._id} mobile={mobile}></MobilesCard>)
                                    }
                                </div>
                        }
                        <div>
                            {
                                booking &&
                                <BookModal
                                    setBooking={setBooking}
                                    booking={booking}
                                ></BookModal>
                            }
                        </div>
                    </div>
                    :
                    <div className='p-20 font-mono text-5xl font-bold text-center'>
                        <h1>No phones found</h1>
                    </div>
            }
        </div>
    );
};

export default Products;


