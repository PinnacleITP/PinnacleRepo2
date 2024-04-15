import React, { useState, useEffect, useRef } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const PaymentForm = ({ clientSecret , subTotal, handlePaymentProcess}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (error) {
        console.error('Error creating PaymentMethod:', error);
        setError(error.message);
        setLoading(false);
        return;
      }

      const response = await fetch('http://localhost:3001/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ payment_method_id: paymentMethod.id, clientSecret, subTotal }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to process payment.');
      }

      console.log('Payment successful:', responseData.paymentIntent);
    } catch (error) {
      console.error('Error processing payment:', error.message);
      setError('Error processing payment. Please try again.');
    }

    setLoading(false);
  };

  useEffect(() => {
    handlePaymentProcess(handleSubmit); // Pass handleSubmit to the parent component
  }, [handleSubmit, handlePaymentProcess]);

  return (
    <div className='text-white'>
      {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}> */}
        <div>
          <CardElement />
        </div>
      {/* </div> */}
      {/* {error && <div role="alert">{error}</div>} */}
    </div>
  );
};

export default PaymentForm;
