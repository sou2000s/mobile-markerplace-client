import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Login = () => {
 const {login} = useContext(AuthContext)
 const location = useLocation()
    const from = location.state?.from?.pathname || "/" 
 
 const navigate = useNavigate()
 
 
 const handleLogin = (e)=>{
    e.preventDefault()
    console.log(e.target);
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email,password)
    .then(res => {
      navigate(from, { replace: true })
    })
    .catch(err => console.log(err.message))
 }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login</h1>
          </div>
          <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover" to='/register'>Dont have account register?</Link>
                </label>
              </div>
              
              
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;