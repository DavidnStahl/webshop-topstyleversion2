import React, {useContext,useRef} from 'react'
import './LoginRegisterItems.css'
import {SearchContext} from '../Context/SearchContext';
import {ProductContext} from '../Context/ProductContext';
import ProductList from './ProductList'


const SearchForProduct = () => {
    const [Products,setProducts,GetData] = useContext(SearchContext);
    const [ProductInfo, setProductInfo] = useContext(ProductContext);
    const newValue = useRef();

    return (<React.Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">
        
          <div className="fadeIn first">
          <img src="https://i.ya-webdesign.com/images/search-png-3.png" id="icon" alt="User Icon" />
            </div>
            <input type="text" id="login" className="fadeIn second" name="product" placeholder="search for products" ref={newValue} /><br/><br/>
            <button className="fadeIn fourth btn btn-primary" onClick={() => {
              setProductInfo(<ProductList/>)
              GetData(newValue.current.value)
            } } >Search</button><br/><br/>
          </div>
        </div>              
            </React.Fragment>)
}

export default SearchForProduct
