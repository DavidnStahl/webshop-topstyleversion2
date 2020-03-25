import React,{useState,useEffect,useContext} from 'react'
import './LoginRegisterItems.css'
import {OrderContext} from '../Context/OrderContext';


const CustomerBasketItems = () => {
  const [Basket, setBasket] = useState([""]);
  const [OrderStatus,setOrderStatus,SendOrder] = useContext(OrderContext)
  

  useEffect(() =>{
    if(JSON.parse(localStorage.getItem("customerbasket")) === null || JSON.parse(localStorage.getItem("customerbasket")).length === 0){
      setBasket([{
        name: "Empty!!"
      }])
    }else{
      setBasket(JSON.parse(localStorage.getItem("customerbasket")))
      setOrderStatus("")
    }
    
  },[setBasket],[setOrderStatus])

  useEffect(() =>{

  },[setOrderStatus])


  const removeItemFromCustomerBasket = (id) =>{
    console.log(id)
    let newBasket = Basket.filter(item => Basket.indexOf(item) !== id)
    localStorage.setItem("customerbasket",JSON.stringify(newBasket))
    let totalprice = 0;
    newBasket.forEach(element => {
         totalprice += element.price
     });
     localStorage.setItem("totalprice",totalprice)
     setBasket(newBasket)
     
   }

    return (<React.Fragment>

        <div className="wrapper fadeInDown">
          <div id="formContent">
        
          <div className="fadeIn first">
          <img src="https://www.vippng.com/png/detail/159-1591420_order-online-icon-clique.png" id="icon" alt="User Icon" />
            </div>
        
            <span>{OrderStatus}</span><br/>
            {Basket.map((item,index) =>{
             if(item.name === "Empty!!") {return <span></span>}
              return (<React.Fragment><span>{item.name}</span> <button className="btn btn-danger" onClick={() => removeItemFromCustomerBasket(index)}>Delete</button><br/></React.Fragment>)
            })}<br/>
            <span>Total: {localStorage.getItem("totalprice")} kr</span><br/>
              <button className="fadeIn fourth btn btn-warning" onClick={SendOrder}>Order</button><br/>
            
        
          </div>
        </div>
        
            </React.Fragment>)
}

export default CustomerBasketItems
