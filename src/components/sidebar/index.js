import React, { useState } from 'react';
import { ChevronDown,Wallet,ChevronUp} from 'lucide-react';
import logo from "../../Assets/Image.svg"

const Sidebar = ({ children }) => {
    const [expanded, setExpanded] = useState(true)
  return (
    <aside className="flex fixed scroll-smooth top-0 left-0 z-40 w-64 h-screen">
      <div className="h-full flex flex-col bg-[#1E2640] border-r shadow-lg w-52 p-2.5">
        <div className=" flex justify-between items-center ">
          <img src={logo} className="w-12 h-12 rounded" alt="logo" />
          <span className='text-white'>Nishyan <br></br>
          <a href='https://mydukaan.io/' className='text-xs text-gray-400 underline'>Visit store</a>
          </span>
          <button 
          onClick={() => setExpanded((curr)=> !curr)}
          className="p-1.5 rounded-lg ">
            {expanded ? <ChevronUp className='invert grayscale'/>:<ChevronDown className='invert grayscale'/>}
            
          </button> 
        </div>
        <ul className="flex-1">{children}</ul>
        <div className='flex p-3 bg-[#353C53] rounded px-2.5 my-1 gap-2 align-middle'>
        <div className='h-9 p-1.5 bg-slate-600 rounded align-bottom'> <Wallet className='invert grayscale'/></div>
          <span className='text-gray-400 text-xs'>Available Credits <br></br>
         <span className='text-white text-sm'>222.10</span>
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

export function SidebarItems({ icon, text, active, alert }) {
    return (
      <li
        className={`
          relative flex items-center gap-4 px-2 py-2 my-1 font-medium rounded-md cursor-pointer transition-colors w-full
          ${active ? "bg-[#353C53] text-white" : "hover:bg-gray-500 text-gray-400"}
      `}
      >
        {icon}
        <span className='ml-3'>{text}</span>
      </li>
    );
  }
  

