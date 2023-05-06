import { useState } from "react";

const Product = ({name, category, unitprice}) => {
    const[quan,setquan]= useState(1);
    const add = (event) => {
        event.preventDefault();
        setquan((quan)=> quan+1);
    };
    const sub = (event) => {
        event.preventDefault();
        
        
        setquan( (quan < 1)?( quan =0):quan -1);
    };
    let price = quan*unitprice;
    return(
    <div className="product-details">
        <h1>Product:{name}</h1>
        <h2>Description:{category}</h2>
        <p className="price">${price}</p>
        <form>
         <label htmlFor="quantity">Quantity: </label>
          <label htmlFor="">{quan}</label>
          <button type="submit">Add to Cart</button>
          <button onClick={add}>+</button>
          <button onClick={sub}>-</button>
        </form>
    </div>
    );
};
export default Product;