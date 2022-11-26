import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const stripePromise = loadStripe('pk_test_51M5vv4CLTcmkmHRYbLOL5pjvoNfQe0mptVirDWj3RH2BEY4UcmefgIgys2i8Ax1l5qXILfQyTWeU2ZfUAVOd4ArQ00ZSQnlgsK');

const CheckOut = ({ paymentData }) => {
    const { buyerName, buyerEmail, _id, productName } = paymentData;
    const stripe = useStripe();
    const elements = useElements();
    const [cardErr, serCardErr] = useState('');
    const price = paymentData.resalePrice;

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {

            serCardErr(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            serCardErr('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail,
                    },
                },
            },


        );

        if (confirmError) {
            serCardErr(confirmError.message);
            return;
        }
        const paymentInfo = {
            price,
            buyerEmail,
            buyerName,
            transactionId: paymentIntent.id,
            orderId: _id,
            productName
        }

        toast.success('Payment successful');
        if (paymentIntent.status === 'succeeded') {
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then((res) => res.json())
                .then(data => {

                })

        }
    };




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn mt-10 w-full bg-gradient-to-r
                from-primary to-secondary text-white font-mono' type="submit" disabled={!stripe}>
                    Pay now
                </button>
            </form>
            {cardErr && <div className='error mt-4 text-primary font-mono font-semibold'>{cardErr}</div>}
        </div>
    );
};

export default CheckOut;