import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'

import style from './index.module.scss';

const Stripe = loadStripe(process.env.PUBLISH_KEY)

const Index = () => {
    const paymentProcess = async (e) => {
        e.preventDefault()

        const query = await axios.post(`${process.env.API_URI}/stripe/checkout-session`, {
            price: 1000,
            title: "Shoes",
            description: "Best shoes ever",
            id: "372737"
        })

        if (query) {
            window.location.replace(query.data)
        }
    }

    return (
        <div className={style.main}>
            <h2 className={style.title}>Cart</h2>
            <button className={style.paymentProcessBtn} onClick={paymentProcess}>Process to payment</button>
        </div>
    );
}

export default Index;
