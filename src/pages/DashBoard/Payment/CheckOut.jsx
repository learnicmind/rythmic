import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CheckOut = () => {
    const payClass = useParams()
    console.log(payClass);
    const [buyClass, setBuyClass] = useState([])
    console.log(buyClass);
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [cardError, setCartError] = useState('');
    

    useEffect(() =>{
        fetch(`https://rythmic-server.vercel.app/selectedClass/${payClass.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBuyClass(data)
        })
    }, [])

    useEffect(() => {
        if (buyClass.price > 0) {
            console.log('buyprice', buyClass.price);
            axiosSecure.post('https://rythmic-server.vercel.app/create-payment-intent', { buyClass  })
                .then(res => {
                    console.log('client secret', res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [buyClass, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        // console.log('card', card);
        // console.log("user", user);

        // use your card element with other stripe.js apis 
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
          });

        if (error) {
            // console.log('error', error);
            setCartError(error.message)
        }
        else {
            setCartError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)
        console.log('payment method', paymentMethod)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            // console.log(confirmError);
        }

        console.log('payment intent', paymentIntent);

        setProcessing(false)

        if (paymentIntent?.status === "succeeded") {
            setTransactionId(paymentIntent.id);

            // save payment information to the server
            const payment = {
                id: buyClass.id,
                transactionId: paymentIntent.id
            }

            axiosSecure.post('/payments', payment)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertResult.insertedId) {
                    // display confirm 

                }
            });

        }

    }


    return (
        <>
            <div>
                <p className="text-2xl font-semibold">Price: ${buyClass.price}</p>
            </div>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
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
                <button className="btn bg-slate-700 text-white hover:text-black btn-sm mt-4" type="submit" disabled={!stripe || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-600 ml-8">{cardError}</p>
            }
            {
                transactionId && <p className="text-green-600">Transaction complete with transactionId: {transactionId}</p>
            }
        </>
    );
};

export default CheckOut;