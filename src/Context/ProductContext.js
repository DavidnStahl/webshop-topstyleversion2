import React, {createContext,useState} from 'react';
import ProductList from '../Components/ProductList';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [ProductInfo, setProductInfo] = useState( () =>{
        return <ProductList/>
    });


  const setCustomerBasket = (item) => {
      console.log(item.produktID)
   let storage = JSON.parse(localStorage.getItem("customerbasket"))
   
   if(storage=== null || storage.length === 0){
    let arr = [];
    console.log(item.price)
    let totalprice = item.price;
    localStorage.setItem("totalprice",totalprice)
    arr.push(item)
    localStorage.setItem("customerbasket",JSON.stringify(arr))
   }else {
    storage.push(item);
    localStorage.setItem("customerbasket",JSON.stringify(storage))
     let totalprice = 0;
     storage.forEach(element => {
       console.log("runda")
         totalprice += element.price
     });
     localStorage.setItem("totalprice",totalprice)
    console.log(storage)
   }
   
  }   
    const DetailView = (product) =>{
        product.description = product.description.split("|")
            setProductInfo(() =>{
                return (
                <div className="wrapper fadeInDown">               
                <img src={product.picture} alt="pic"></img>
                <button className="btn btn-warning" onClick={() => setCustomerBasket(product)}>Add to basket</button>
                <h3>Name: {product.name}</h3>
                <h3>Price: {product.price} kr</h3>
                <br/>
                <h3>Description</h3><br/>
                {product.description.map((text) =>{
                    return <p>{text}</p>
                })}
               </div>)
            })
    }
     return (
          <ProductContext.Provider value={[ProductInfo, setProductInfo,DetailView]}>
            {props.children}
          </ProductContext.Provider>
  )   
}

export default ProductContextProvider