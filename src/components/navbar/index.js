// Navbar.jsx
import React from 'react';
import "./navbar.css"
import {Bell} from "lucide-react"
import Menu from "../../Assets/me.jpg"
const Navbar = () => {
  return (
    <nav className='nav '>
    <span className='first-div'>
      <span className='text-[#1A181E] payout'>Upload Csv</span>
    </span>
    <span className='third-div'>
    <div className='group'>
    <Bell className='h-8 w-10'/>
    </div>
    <div className='menu h-11 w-11 rounded-full'>
    <img src={Menu} alt="menu-logo" className='rounded-full h-11 w-11' />
    </div>
    </span>
    </nav>
  );
};

export default Navbar;
