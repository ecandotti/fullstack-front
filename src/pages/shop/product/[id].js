import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { getProduct } from '../../../graphql/queries/product';

const Product = () => {
    const router = useRouter()
    const {
        query: { id }
    } = router

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

    console.log(data);

    return (
        <div>
            <Link href="/shop">Go back</Link>
            Hello {data.getProduct.title} product
        </div>
    );
}

export default Product;