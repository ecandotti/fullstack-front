import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useCart } from '../../../contexts/cart.context';
import { getProduct } from '../../../graphql/queries/product';

import style from './id.module.scss';

const Product = () => {
    const router = useRouter()
    const { cart, setCart } = useCart()

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

        setCart([...cart, newArticle]);
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
                    src={data.getProduct.img_uri}
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