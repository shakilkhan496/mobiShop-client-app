import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import CheckOut from '../../../shared/CheckOut/CheckOut';

const stripePromise = loadStripe('pk_test_51M5vv4CLTcmkmHRYbLOL5pjvoNfQe0mptVirDWj3RH2BEY4UcmefgIgys2i8Ax1l5qXILfQyTWeU2ZfUAVOd4ArQ00ZSQnlgsK');
const Payment = () => {
    const paymentData = useLoaderData();
    const navigation = useNavigation();
    const { resalePrice, productName } = paymentData;

    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='mx-5 mt-4  text-3xl font-bold font-mono'>Payment</h1>
            <p className='p-5 text-xl font-mono font-bold'>Please pay <span className='ring-1 px-2 rounded'> <span className='text-primary'>{resalePrice}</span> $</span> for {productName}</p>

            <div className='px-5 lg:w-2/3 lg:mx-auto mx-5 rounded-xl  mt-10 shadow-xl py-10'>
                <Elements stripe={stripePromise}>
                    <CheckOut paymentData={paymentData}></CheckOut>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;