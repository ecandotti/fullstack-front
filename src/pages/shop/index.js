import React from 'react';

import { getProducts } from "../../graphql/queries/products";
import { useQuery } from "@apollo/react-hooks";
import ProductCard from '../../components/shop/ProductCard';

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
        <div className="shop__grid">
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
