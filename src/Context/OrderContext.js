import React, {createContext,useState} from 'react';
import {useHistory} from 'react-router'
export const OrderContext = createContext();


const OrderContextProvider = (props) => {
    const [OrderStatus,setOrderStatus] = useState("");
    let history = useHistory();     
    const SendOrder = () => {
        let order = JSON.parse(localStorage.getItem("customerbasket"));
        let payment = localStorage.getItem("totalprice");
        let customer = localStorage.getItem("loggedinuser")
        let produktIDArray = order.map((item) =>{
            return item.produktID
        })
        if(order.length !== 0){
          fetch("http://localhost:8080/addOrder", {
            mode: 'cors',
            method: 'POST',
            header : {
              'Accept': 'application/json',
              'Content-type': 'application/json'},
            body: JSON.stringify({
              customerID: customer,
              totalpayment: payment,
              produktID: produktIDArray})
              
           });
           console.log("Ordersend")

           localStorage.removeItem("customerbasket")
           localStorage.removeItem("totalprice")
           setOrderStatus("")
           history.push('/') 
        }else{
          setOrderStatus("No items to order")
          console.log("no order")
        }
        
                       
    }
     return (
          <OrderContext.Provider value={[OrderStatus,setOrderStatus,SendOrder]}>
            {props.children}
          </OrderContext.Provider>
  )   
}

export default OrderContextProvider