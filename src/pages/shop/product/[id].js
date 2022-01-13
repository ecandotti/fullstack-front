import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useCart } from '../../../contexts/cart.context';
import { getProduct } from '../../../graphql/queries/product';

import style from './id.module.scss';

const Product = () => {
    const router = useRouter()
    const { cart, setCart, articleCount, setArticleCount } = useCart()

    const { query: { id } } = router

    const { loading, error, data } = useQuery(getProduct, {
        variables: { id },
    });

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    const addProduct = (e) => {
        e.preventDefault()

        const newArticle = data.getProduct

        setCart(prevState => {
            return {...prevState, newArticle}
        })

        console.log('Product added success', cart);
    }

    return (
        <div className={style.main}>
            <div className={style.item}>
                <div className={style.goBackBtn}>
                    <Link href="/shop">Go back</Link>
                </div>
                <h2>{data.getProduct.title}</h2>
                <img 
                    className={style.img}
                    src='https://64.media.tumblr.com/bff49010314681f9e518d47bf7f23d84/a9a443f7114466b7-ed/s400x600/35165ebd5f46efe48858157e6ffaa7e8e2eac927.png'
                    alt='clothe' />
                <p>{data.getProduct.description}</p>
                <div className={style.priceBlock}>
                    <span className={style.priceLabel}>{data.getProduct.price} €</span>
                </div>
                <button className={style.addProductBtn} onClick={addProduct}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;