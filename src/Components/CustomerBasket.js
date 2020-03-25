import React from 'react'
import CustomerBasketItems from './CustomerBasketItems'
import ProductContextProvider from '../Context/ProductContext'

const CustomerBasket = () => {
    return (
        <div>
        <ProductContextProvider>
            <CustomerBasketItems/>
            </ProductContextProvider>
        </div>
    )
}

export default CustomerBasket
