import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; 
import Nav from './Components/Nav'
import Main from './Components/Main'
import SearchContextProvider from './Context/SearchContext'
import ProductContextProvider from './Context/ProductContext'
import LoginContextProvider from './Context/LoginContext';
import RegisterContextProvider from './Context/RegisterContext';
import OrderContextProvider from './Context/OrderContext';


const App = () =>{
  return (
    <div >
    <SearchContextProvider>
    <ProductContextProvider>
    <LoginContextProvider>
    <RegisterContextProvider>
    <OrderContextProvider>
      <Nav />
      <div className="container text-center">
      <Main />
      </div>
      </OrderContextProvider>
      </RegisterContextProvider>
      </LoginContextProvider>
      </ProductContextProvider>
      </SearchContextProvider>
    </div>
  )
}

export default App
