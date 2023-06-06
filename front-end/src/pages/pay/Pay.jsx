import React, { useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './Pay.scss'
import newRequest from '../../utils/newReq';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
const stripePromise = loadStripe("pk_test_51NFJ76HUWp4z6XCu7YSkXp0YgYZRNOW28dYsayjAO3PVXOdqnHbsUYUyTAq22mMiTRJ3OoGaa1BAhjJR2mwptWkr00wmfi3QOd");

const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");
    const {id} = useParams();

    useEffect(()=>{
        const makeReq = async () =>{
            try {
                const res = await newRequest.post(`/orders/create-payment-intent${id}`)
                setClientSecret(res.data.clientSecret)
            } catch (error) {
                console.log(error);
            }
        };
        makeReq()
    },[])

    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

  return (
    <div className='pay'>
         {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default Pay