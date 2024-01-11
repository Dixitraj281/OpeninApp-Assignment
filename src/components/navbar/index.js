// Navbar.jsx
import React from 'react';
import "./navbar.css"
import {HelpCircle, Search} from 'lucide-react';
import Group from "../../Assets/Group.svg"
import Menu from "../../Assets/Menu.svg"
const Navbar = () => {
  return (
    <nav className='nav  '>
    <span className='first-div'>
      <span className='text-[#1A181E] payout'>Payout</span>
      <span className='flex help-container'>
      <HelpCircle className='help-logo'/>
      <span className='flex help pl-2'> How it works</span>
      </span>
      </span>
      <div className="search-input">
      <button>
        <Search size={20} className='grayscale-1 text-[#808080]'/>
      </button>
      <input
        type="text"
        placeholder="Search features, tutorials, etc."
      />
    </div>
    <span className='third-div'>
    <div className='group'>
    <img src={Group} alt="group-logo" />
    </div>
    <div className='menu'>
    <img src={Menu} alt="menu-logo" />
    </div>
    </span>
    </nav>
  );
};

export default Navbar;
