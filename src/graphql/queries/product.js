import gql from "graphql-tag";

export const getProduct = gql`
    query getProduct($id: ID!) {
        getProduct(id: $id) {
            id,
            title,
            img_uri,
            price,
            description
        }
    }
`