import React from 'react';
import { useQuery } from "@apollo/react-hooks";

import { getProducts } from "../../graphql/queries/products";

import ProductCard from '../../components/shop/ProductCard';

import style from './index.module.scss';

const Index = () => {

    const { loading, error, data } = useQuery(getProducts);

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    console.log(data);

    return (
        <div className={style.flex}>
            {
                data.getProducts.map((product) => (
                    <ProductCard
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        id={product.id}
                        key={product.id} />
                ) )
            }
        </div>
    );
}

export default Index;
