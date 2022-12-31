import React from 'react';

const Products = ({product}) => {
  const {name , price , image} = product
  
  return (
   
           <div className=" card  w-64 bg-base-100 shadow-xl">
  <figure><img className='w-52' src={image} alt={name} /></figure>
  <div className="">
    <h2 className="card-title">{name}</h2>
    <p>${price}</p>
    <div className="card-actions justify-start">
      <button className="btn bg-indigo-500 btn-sm">Add to cart</button>
    </div>
  </div>
</div>
        
    );
};

export default Products;