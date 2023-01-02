import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import { AuthContext } from '../Contexts/AuthProvider';
import Products from './Products';

const Home = () => {
  const {user , cart,setCart} = useContext(AuthContext)

   const [products , setProducts] = useState([])
   useEffect(()=>{
    fetch('https://phonemindapi.vercel.app/products')
    .then(res => res.json())
    .then(data => setProducts(data))
   } , [])

const handleAddToCart = (product)=>{
      if(!user?.email){
         toast.error('login first')
         return;
      }
  console.log(product);
  const addededProduct = {
       name: product.name,
       price: product.price,
       image: product.image,
       productId: product._id,
       buyrEamil:user?.email ,
       buyrName: user?.displayName
  }
  fetch('https://phonemindapi.vercel.app/addToCart',{
    method:"POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(addededProduct)
  })
  .then(res => res.json())
  .then(data => {
   
       if(data.acknowledged ){
           toast.success('successfully adeded')
           
         setCart(cart + 1)
       }

  })
   
}

    return (
        <div>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/yYPsQrv/436e2313-9384-42b5-935c-a926cab32a9d.png"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block"/>Buy Now
      </h1>
      <p className="mb-8 leading-relaxed">Find your favourite phone here.We are offering best phones at pocket friendly price.So don't think much just buy!</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy Now</button>
      </div>
    </div>
  </div>
</section>
   <h1 className='text-center text-4xl'>Products</h1>
<div className='grid md:grid-cols-3 mt-10 gap-4 md:ml-52 place-content-center '>
    {products.map(product =>  <Products handleAddToCart={handleAddToCart} product={product} key={product._id}/> )}
</div>
 
 <div className='mt-10'>
 <h1 className='text-center text-2xl'>Stay contected</h1>
        <p className='text-center'>Get updated with new phones subscribe our email notification!!</p>

       <Contact/>
 </div>

 <div className='mt-6'>
 <Footer/>
 </div>
        </div>
    );
};

export default Home;