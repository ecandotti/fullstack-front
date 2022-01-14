import '../styles/styles.scss';
import MainLayout from '../components/layouts/MainLayout';
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apollo-client";

import { CartContext } from '../contexts/cart.context'
import { UserContext } from '../contexts/user.context'
import { useEffect, useState } from 'react';
import authService from '../services/auth.service';

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState({})
  const [cart, setCart] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      authService.getUser(token)
      .then((data) => {
        if (data._id) {
          setCurrentUser({
            auth: true
          })
        }
      })
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <CartContext.Provider value={{cart, setCart }}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </CartContext.Provider>
      </UserContext.Provider>
    </ApolloProvider>
  )
}

export default MyApp
