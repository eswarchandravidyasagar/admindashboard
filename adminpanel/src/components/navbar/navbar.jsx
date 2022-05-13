import  './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
export const Navbar = () => {
  return (
    <div className='navbar'>navbar
    <div className="wrapper">

      <div className="search">
        <input type="text"  placeholder='Search...  '/>
        <SearchOutlinedIcon/>

      </div>
    </div>
    
    </div>
  )
}


export default Navbar