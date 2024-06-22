import React from 'react'
import Style from "./Navbar.module.css"
import logo from "../../assets/images/logo.svg"
import { NavLink } from 'react-router-dom'



export default function Navbar() {
  return (
    <nav  className='bg-gray-100 fixed lg:fixed top-0 left-0 right-0 text-center'>
      <div className="container justify-between mx-auto py-2 flex flex-col lg:flex-row items-center">
        <div className='flex flex-col lg:flex-row items-center'>
        <img src={logo} alt="fresh cart logo" width={110} />
        <ul className='flex flex-col lg:flex-row'>
          <li> <NavLink  className='mx-2 py-2 text-lg text-slate-900 font-light' to='' >Home</NavLink></li>
          <li>  <NavLink className='mx-2 py-2 text-lg text-slate-900 font-light' to='card' >Card</NavLink></li>
          <li>  <NavLink className='mx-2 py-2 text-lg text-slate-900 font-light' to='products' >Products</NavLink></li>
          <li>  <NavLink className='mx-2 py-2 text-lg text-slate-900 font-light' to='brands' >Brands</NavLink></li>
          <li>  <NavLink className='mx-2 py-2 text-lg text-slate-900 font-light' to='categories' >Categories</NavLink></li>
        </ul>
        </div>
        <div >
        <ul className='flex flex-col lg:flex-row'>
          <li className='py-2'> <NavLink  className='mx-2 py-4 text-lg text-slate-900 font-light' to='login' >Login</NavLink></li>
          <li className='py-2'>  <NavLink className='mx-2 py-4 text-lg text-slate-900 font-light' to='register' >Register</NavLink></li>
          <li className='py-2'><NavLink className='mx-2 py-4 text-lg text-slate-900 font-light' >Logout</NavLink></li>
          <li className='flex py-2 items-center'>
              <i className='fab fa-facebook'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-tiktok'></i>


          </li>
        
        </ul>
        
        </div>
      </div>

    </nav>
  )
}
