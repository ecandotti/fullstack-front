import Link from 'next/link';
import React from 'react';

//import style from './ProductCard.module.css';

const ProductCard = ({ id, title, description, price }) => {
    return (
        <Link href={{
                pathname: "/shop/product/[id]",
                query: { id },
            }}>
            <a>Voir le produit</a>
        </Link>
    );
}
 
export default ProductCard;