import React from 'react';
import { Link } from 'react-router-dom';

const AddProducts = () => {
    return (
    <div className=' bg-base-200'>
           <h1 className='text-center mt-6 text-5xl'>Add product</h1>
            <div className="hero mt-5 ml-2">
        
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
           
          </div>
          <form onSubmit='' className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl">Product  Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl">Upload Picture</span>
                </label>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl" >Price</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl" >Phone memory</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl" >Camera(pxl)</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                
              </div>
              
              
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Add product</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default AddProducts;