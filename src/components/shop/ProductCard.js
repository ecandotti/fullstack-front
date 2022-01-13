import Link from 'next/link';
import React from 'react';

import style from './ProductCard.module.scss';

const ProductCard = ({ id, title, description, price }) => {
    return (
        <div className={style.items}>
            <Link href={{
                    pathname: "/shop/product/[id]",
                    query: { id },
                }}>
                <a>Voir le produit</a>
            </Link>
        </div>
    );
}
 
export default ProductCard;