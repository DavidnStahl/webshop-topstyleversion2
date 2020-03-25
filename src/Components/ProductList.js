import React,{useContext} from 'react'
import {SearchContext} from '../Context/SearchContext';
import {ProductContext} from '../Context/ProductContext';

const ProductList = () => {
    const [Products] = useContext(SearchContext);
    const [ProductInfo, setProductInfo,DetailView] = useContext(ProductContext);

    return (
        <div className="wrapper fadeInDown">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
                  {Products.map((element) =>{
                    return (<tr><td>{element.name}  <button className=" btn btn-warning" onClick={() => DetailView(element)}>show more detail</button></td></tr>) 
                  })}
          </tbody>
          </table>
          </div> 
    )
}

export default ProductList
