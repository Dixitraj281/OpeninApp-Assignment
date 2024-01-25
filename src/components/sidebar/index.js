import React, { useState } from 'react';
import logo from "../../Assets/Subtract.svg";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`fixed top-0 left-0 z-40 ${isOpen ? 'w-60' : 'w-16'} h-screen transition-all duration-300 ease-in-out`}>
      <div className="h-full flex flex-col bg-[#fff] border-r shadow-lg p-2.5">
        <div className="flex justify-center items-center">
          <img src={logo} className={`w-10 h-10 rounded m-5 ${isOpen ? 'block' : 'hidden'}`} alt="logo" />
          <span className={`text-black font-bold ${isOpen ? 'block' : 'hidden'}`}>Base <br /></span>
        </div>
        <ul className={`${isOpen ? 'flex-1' : 'hidden'}`}>{children}</ul>
        <div className="absolute bottom-0 left-0 w-full p-2">
          <button onClick={toggleSidebar} className="w-full h-10 bg-[#fff] text-black rounded-md">
            {isOpen ? '☰' : '☰'}
          </button>
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
        ${active ? "bg-gradient-to-r from-indigo-50 via-indigo-0 to-indigo-0 text-indigo-600" : "hover:bg-indigo-100 text-gray-500"}
    `}
    >
      {icon}
      <span className='ml-3'>{text}</span>
    </li>
  );
}
