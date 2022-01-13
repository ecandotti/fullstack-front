import '../styles/styles.scss';
import MainLayout from '../components/layouts/MainLayout';
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apollo-client";

import { CartContext } from '../contexts/cart.context'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])
  const [articleCount, setArticleCount] = useState(0)

  return (
    <ApolloProvider client={client}>
      <CartContext.Provider value={{cart, setCart, articleCount, setArticleCount}}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CartContext.Provider>
    </ApolloProvider>
  )
}

export default MyApp
