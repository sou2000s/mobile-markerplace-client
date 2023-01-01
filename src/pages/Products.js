import React, { useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const Products = ({product , handleAddToCart}) => {
  const {productName , image , price , PhoneMemory,Camera} = product
  // productName,   
  //     image: imageData.data.url,
  //     price,
  //     PhoneMemory,
  //     Camera
  return (
   
           <div className=" card  w-64 bg-base-100 shadow-xl">
  <figure><img className='w-52 h-52' src={image} alt={productName} /></figure>
  <div className="">
    <h2 className="card-title">{productName}</h2>
    <p>Price: ${price}</p>
    <p>PhoneMemory:{PhoneMemory}</p>
    <p>Camera:{Camera}</p>
    <div className="card-actions mt-3 justify-start">
      <button className="btn bg-indigo-500 btn-sm" onClick={()=> handleAddToCart(product)}>Add to cart</button>
    </div>
  </div>
</div>
        
    );
};

export default Products;