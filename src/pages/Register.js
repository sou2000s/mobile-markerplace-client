import React, { useContext, useState } from 'react';
import { json, Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import { useUserRole } from '../Hooks/useUserRole';

const Register = () => {
   const {createUser , setUserNameAndProfile } = useContext(AuthContext)
   const [err , setErr] = useState('') 
   const [userRole , setuserRole] = useUserRole();
   const navigate = useNavigate()
  
    const handleRegister = (e)=>{
        e.preventDefault()
   
        console.log(e.target);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const role = e.target.role.value;
        console.log(name , email , password , role);
          
        createUser(email , password)
        .then(res => {
          console.log(res.user);
          const user = {
                name: name,
                email: res.user.email,
                role: role
            }
            setErr("")
            handleUserName(name)
            // setuserRole(role)

            fetch(`https://phonemindapi.vercel.app/users/role/${res.user.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setuserRole(data.role)
           
        })
         
            fetch('https://phonemindapi.vercel.app/users' , {
                method:"POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              navigate('/')
             
            })
        })
        .catch(err => setErr(err.message))
    }

 const handleUserName = (name) =>{
      const userName = {
        displayName : name
      }
      setUserNameAndProfile(userName)
      .then(res=> console.log(res))
      .catch(err => console.log(err.message))
 }


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register</h1>
    </div>
    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" />
        </div>
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
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select your role</span>
          </label>
          <select name='role' className="select select-bordered w-full max-w-xs">
        <option>User</option>
        <option>Seller</option>
          </select>
        </div>
         {err && <p className='text-red-700'>{err}</p>}
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Register</button>
        </div>
        <Link to='/login'>Allready have account?Login</Link>
      </div>
    </form>
  </div>
</div>
    );
};

export default Register;