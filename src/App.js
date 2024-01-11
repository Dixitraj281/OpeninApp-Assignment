import './App.css';
import Navbar from './components/navbar';
import Sidebar, { SidebarItems } from './components/sidebar';
import Homepage from './components/home'
import{
  Home,
  MenuSquare,
  LayoutGrid,
  Truck,
  Volume1,
  BarChart4,
  Banknote,
  BadgePercent,
  Users,
  Palette,
  Zap,
} from "lucide-react"

function App() {
  return (
    <div className="App flex flex-col relative">
      <Navbar/>
      <Homepage/>
      <Sidebar>
        <SidebarItems icon={<Home size={20}/>} text="Home"/>
        <SidebarItems icon={<MenuSquare size={20}/>} text="Orders"/>
        <SidebarItems icon={<LayoutGrid size={20}/>} text="Products"/>
        <SidebarItems icon={<Truck size={20}/>} text="Delivery" alert/>
        <SidebarItems icon={<Volume1 size={20}/>} text="Marketing"/>
        <SidebarItems icon={<BarChart4 size={20}/>} text="Analytics" />
        <SidebarItems icon={<Banknote size={20}/>} text="Payout" active/>
        <SidebarItems icon={<BadgePercent size={20}/>} text="Discounts"/>
        <SidebarItems icon={<Users size={20}/>} text="Audience"/>
        <SidebarItems icon={<Palette size={20}/>} text="Appearance"/>
        <SidebarItems icon={<Zap size={20}/>} text="Plugins"/>
      </Sidebar>
     
    </div>
  );
}

export default App;
