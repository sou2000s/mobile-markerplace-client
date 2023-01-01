import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Contexts/AuthProvider';

const AddProducts = () => {
const {user} = useContext(AuthContext)
const [productUploading , setProductUploading] = useState(false)

  const handleAddProduct = (e) => {
    e.preventDefault();
   setProductUploading(true)
   const form = e.target;
   const productName = form.productName.value;        
   const image = form.image.files[0];
   const price = parseInt(form.price.value);
   const PhoneMemory = form.PhoneMemory.value;
   const Camera = form.Camera.value;


  const formData = new FormData()
  formData.append('image' , image)

   fetch(`https://api.imgbb.com/1/upload?key=61b1d964b41459f4e8c1a750dd7ac04c` , {
    method:'POST',
    body: formData
   }) 
   .then(res => res.json())
   .then(imageData => {
    console.log(imageData.data.url);
   const product = {
      productName,   
      image: imageData.data.url,
      price,
      PhoneMemory,
      Camera
    
      
     
   } 
  


    fetch('https://phonemindapi.vercel.app/addproducts' , {
      method: 'POST',
      headers: {
        "content-type": 'application/json',
       
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
    
      console.log(data);
      if(data.acknowledged){
        setProductUploading(false)
        form.reset()
        toast.success('propuct adeded')
      

      }
    })



   })

  


  }


    return (
    <div className=' bg-base-200'>
           <h1 className='text-center mt-6 text-5xl'>Add product</h1>
            <div className="hero mt-5 ml-2">
        
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
           
          </div>
          <form onSubmit={handleAddProduct} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl">Product  Name</span>
                </label>
                <input type="text" placeholder="productName" name='productName' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl">Upload Picture</span>
                </label>
                <input type="file" name='image' className="file-input file-input-bordered w-full max-w-xs" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl" >Price</span>
                </label>
                <input type="number" name='price' placeholder="price" className="input input-bordered" />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl" >Phone memory</span>
                </label>
                <input type="text" name='PhoneMemory' placeholder="phone memory(gb)" className="input input-bordered" />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl" >Camera(pxl)</span>
                </label>
                <input type="text" name='Camera' placeholder="camera" className="input input-bordered" />
                
              </div>
              
              
              <div className="form-control mt-6">
              {productUploading ? <div className="flex justify-center">
              <Spinner/>
              </div> 
              : <button type='submit' className="btn btn-primary">Add product</button>
              }
              </div>
            </div>
          </form>
        </div>
      </div>
     
      <div className='mt-64'>
                <Footer/>
             </div>
    </div>
    );
};

export default AddProducts;