import React, { useContext } from "react";

import { Link, NavLink } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

import { AuthContext } from "../Contexts/AuthProvider";
import { useUserRole } from "../Hooks/useUserRole";

const Navbar = () => {
  // const { logOut, user } = useContext(AuthContext);
  const {logout , user , cart} = useContext(AuthContext)
  // const [user ,setUser] = useState('')
  const [open, setOpen] = useState(false);
  const [userRole] =  useUserRole(user?.email)
  console.log(user?.email);
  let activeStyle = {
    textDecoration: "underline",
  };

  

  const handleMenuBar = () => {
    setOpen(!open);
  };

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-[#8084ef] text-white h-20 md:p-5 sticky top-0 z-50  flex justify-around ">
      <div className="flex md:mt-0 mt-4">
        <Link className="text-2xl" to='/'>PhoneMind</Link>
        {/* <img src={BrandImage} className="rounded-xl h-10  w-9 ml-3" alt="" /> */}
      </div>

      <ul
        className={` md:flex text-white ml-40 ease-in duration-500  bg-[#8084ef] px-36 md:mr-0 mr-40 md:p-0 md:static z-[20] absolute ${
          open ? "top-20 " : "top-[-250px]"
        }`}
      >
        
        <li>
          <NavLink to="/" className="ml-3 "
           style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Home
          </NavLink>
        </li>
       {user?.email && userRole === "User" &&
       
       <li>
          <NavLink className="ml-3" to="/cart" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
           Cart {cart}
          </NavLink>
        </li> 
        
       
       }

        {user?.email && userRole === "Seller" && 
       
       <li>
          <NavLink className="ml-3" to="/addProducts" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
           Add products
          </NavLink>
        </li>}

        {user?.uid ? (
          <li>
            <Link className="ml-3" onClick={handleLogOut}>
              LogOut
            </Link>
          </li>
        ) : (
          <>
            <li>
              <NavLink className="ml-3" to="/register" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink className="ml-3" to="/login" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Login
              </NavLink>
            </li>
          </>
        )}
        {/* <li>
          {" "}
          <NavLink className="ml-3" to='/blog' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Blog</NavLink>
        </li> */}
        {/* <li>
          <NavLink className="ml-3"  to='/faq'  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>FAQ</NavLink>
        </li> */}
        {/* <li onClick={handleTheme} className="text-xl ml-3">
           {theme ? <MdOutlineLightMode /> : <MdDarkMode  />}
        </li> */}
      </ul>
      <div className="md:hidden mt-5 text-xl text-black" onClick={handleMenuBar}>
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

   
    </div>
  );
};

export default Navbar;
