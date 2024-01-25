import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Sidebar, { SidebarItems } from './components/sidebar';
import Homepage from './components/home'
import{
  LayoutGrid,
  BarChart2,
  Ticket,
  MenuSquare,
  CalendarDays,
  Bell,
  Settings
} from "lucide-react"
import Signin from './components/Login/signin';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App flex flex-col relative">
      {isLoggedIn ? (
        <>
          <Navbar />
          <Homepage />
          <Sidebar>
            <SidebarItems icon={<LayoutGrid size={20} />} text="Dashboard" />
            <SidebarItems icon={<BarChart2 size={20} />} text="Upload" active />
            <SidebarItems icon={<Ticket size={20} />} text="Invoice" />
            <SidebarItems icon={<MenuSquare size={20} />} text="Schedule" alert />
            <SidebarItems icon={<CalendarDays size={20} />} text="Calendar" />
            <SidebarItems icon={<Bell size={20} />} text="Notification" />
            <SidebarItems icon={<Settings size={20} />} text="Settings" />
          </Sidebar>
        </>
      ) : (
        <Signin onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;