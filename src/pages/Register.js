import React, { useContext } from 'react';
import { json, Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Register = () => {
   const {createUser , setUserNameAndProfile} = useContext(AuthContext)
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
            const user = {
                name: name,
                email: res.user.email,
                role: role
            }

            handleUserName(name)
          console.log(res.user);
            fetch('http://localhost:5000/users' , {
                method:"PUT",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        })
        .catch(err => console.log(err.message))
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
        <option  selected>User</option>
        <option>Seller</option>
          </select>
        </div>
        
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Register</button>
        </div>
      </div>
    </form>
  </div>
</div>
    );
};

export default Register;