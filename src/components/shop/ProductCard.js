import Link from 'next/link';
import React from 'react';

import style from './ProductCard.module.scss';

const ProductCard = ({ id, img_uri }) => {
    return (
        <div className={style.items}>
            <Link href={{
                    pathname: "/shop/product/[id]",
                    query: { id },
                }}>
                <a className={style.item}>
                    <img 
                        className={style.img}
                        src={img_uri}
                        alt='clothe' />
                    <div>Voir le produit</div>
                </a>
            </Link>
        </div>
    );
}
 
export default ProductCard;