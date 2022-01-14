import React from 'react';

import style from './ItemCart.module.scss';

const ItemCart = ({ title, price, img_uri }) => {
    return (
        <div className={style.item}>
            <h2>{title}</h2>
            <img 
                className={style.img}
                src={img_uri}
                alt='clothe' />
            <div className={style.priceBlock}>
                <span className={style.priceLabel}>{price} €</span>
            </div>
        </div>
    );
}
 
export default ItemCart;