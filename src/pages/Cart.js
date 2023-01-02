import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import { AuthContext } from '../Contexts/AuthProvider';

const Cart = () => {
    const {user , cart , setCart } = useContext(AuthContext)
   
//     const [cartProducts , setCartProducts] = useState([])
//     useEffect(()=>{
//    fetch(`http://localhost:5000/cartProducts/${user?.email}`)
//    .then(res => res.json())
//    .then(data => {
//     setCartProducts(data)
    
//    })

//     } , [user]) 

const {data:cartProducts ,refetch } = useQuery({
    queryKey: ['useremail'],
    queryFn: async () =>{
        const res = await fetch(`http://localhost:5000/cartProducts/${user?.email}`)
        const data = await res.json()
        
        return data;
    }
})

 const handleDelteProduct = (product) =>{
         console.log(product);
        //  total -= product.price
    //    refetch()
    fetch(`http://localhost:5000/cartProductDelte/${product._id}` , {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        refetch()
        setCart(cart - 1)
    })

 }

     let total = 0;
    for(let i = 0 ; i < cartProducts?.length ; i++){
        total += cartProducts[i]?.price
                     
    }
     
    return (
        <div>
            <h1 className='text-center text-3xl'>{user?.displayName} ,Cart</h1>
             <ul>
                {cartProducts?.map(product =>{
                    return <div>
                    <li className='flex justify-evenly mt-12'>
                    <div>
                    <p className='text-xl'>Name:{product.name}</p>
                        <p className='text-xl'>Price:{product.price}</p>
                    </div>
                        <div className='flex'>
                            <img src={product.image} className='w-32' alt="" />
                            <button className='ml-5 btn-sm btn-warning' onClick={()=>handleDelteProduct(product)}>Delete</button>
                        </div>
                    </li>
                           <div className='flex justify-center'>
                    <hr className=' border-1   w-[50%] border-[black]' />

                           </div>
                    </div>
                 
                })}
             </ul>
             <h1 className='text-center text-xl mt-11'>Total Amount:{total}</h1>

             <div className='mt-[28%]'>
                <Footer/>
             </div>
        </div>
    );
};

export default Cart;