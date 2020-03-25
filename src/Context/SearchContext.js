import React, {createContext,useState} from 'react';

export const SearchContext = createContext();


const SearchContextProvider = (props) => {
    const [Products, setProducts] = useState([]);      
    const GetData = (value) => {
      fetch(`http://localhost:8080/getProduct?name=${value}`).then(res => res.json()).then((data) => {
    console.log(data)
    setProducts(data);                
    })}
     return (
          <SearchContext.Provider value={[Products,setProducts,GetData]}>
            {props.children}
          </SearchContext.Provider>
  )   
}

export default SearchContextProvider



