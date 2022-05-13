import  './sidebar.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
export const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="top"><span className="logo">Eswar Admin</span>
    </div>
    <hr />
    <div className="center">
    <ul>
    <p className="title">Main</p>
      <li>
        
      <DashboardOutlinedIcon className='icon'/><span>Dashboard</span></li>
      <p className="title">Lists</p>
      <li>
      
        <PeopleOutlinedIcon className='icon'/><span>Users</span></li>
      <li>
        <Inventory2OutlinedIcon className='icon'/><span>Products</span></li>
      <li>
        <InventoryOutlinedIcon className='icon'/><span>Orders</span></li>
      <li>
        <LocalShippingOutlinedIcon className='icon'/><span>Delivaries </span></li>
        <p className="title">Useful links</p>
      <li>
        <AssessmentOutlinedIcon className='icon'/><span>Stats</span></li>
      <li>
        <NotificationAddOutlinedIcon className='icon'/><span>Notifications</span></li>
        <p className="title">Servises</p>

      <li>
        <HealthAndSafetyOutlinedIcon className='icon'/><span>System health</span></li>
      <li>
        <LibraryBooksOutlinedIcon className='icon'/><span>Logs</span></li>
      <li>
       <SettingsOutlinedIcon className='icon'/> <span>Settings</span></li>
       <p className="title">User</p>
      <li>
      
        <AccountBoxOutlinedIcon className='icon'/><span>Profile</span></li>
      <li>
        <LogoutOutlinedIcon className='icon'/><span>Logout</span></li>
    </ul>
    
    </div>

    <div className="bottom">
      <div className="colorOption"></div>
      <div className="colorOption"></div>
      <div className="colorOption"></div>
      
    </div>

    
    </div>
  )
}


export default Sidebar