import React,{useContext} from 'react'
import {ProductContext} from '../Context/ProductContext';

const ProductInfo = () => {
    const [ProductInfo] = useContext(ProductContext);   
    return (
        <React.Fragment>{ProductInfo}</React.Fragment>
    )
}

export default ProductInfo