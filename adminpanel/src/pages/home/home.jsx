import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import "./home.scss"
// sidevr is a cmponent that can be imported and used in the app
// 
const home = () => {
  return (
    <div className='home'>
      
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        
        Home container
        </div>
    
    </div>
  )
}

export default home