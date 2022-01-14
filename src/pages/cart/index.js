import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'

import { useCart } from '../../contexts/cart.context';

import style from './index.module.scss';
import ItemCart from '../../components/cart/ItemCart';

const Stripe = loadStripe(process.env.PUBLISH_KEY)

const Index = () => {
    const { cart } = useCart()
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let addition = 0
        cart.map((item) => addition += item.price)
        setTotal(addition)
    }, [cart])

    const paymentProcess = async (e) => {
        e.preventDefault()

        const randomNumber = Math.floor(Math.random() * 20000)

        const query = await axios.post(`${process.env.API_URI}/stripe/checkout-session`, {
            price: total * 100,
            title: "Votre commande Nike",
            description: "Vous faites le bon choix",
            id: `price__${randomNumber}`
        })

        if (query) {
            window.location.replace(query.data)
        }
    }

    return (
        <div className={style.main}>
            <h2 className={style.title}>Cart</h2>
            <div className={style.listItem}>
                {
                    cart.map((item) => (
                        <ItemCart
                            price={item.price}
                            title={item.title}
                            img_uri={item.img_uri}
                            id={item.id}
                            key={item.id} />
                    ))
                }
            </div>
            
            <div className={style.total}>
                Total : {total} €
            </div>

            <button className={style.paymentProcessBtn} onClick={paymentProcess}>Process to payment</button>
        </div>
    );
}

export default Index;
