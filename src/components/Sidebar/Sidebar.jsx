import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'

import { SidebarData } from '../Data/Data'

const Sidebar = () => {
  return (
    <div className="Sidebar">
        {/* logo */}
        <div className="logo"> 
            <img src={Logo} alt="" />
            <span></span>
        </div>
        
        <div className="test-string">
            <span>
                Re<span>a</span>ct Test
            </span>
        </div>

         {/* menu */}
          <div className="menu">
                {SidebarData.map((item, index)=>{
                return(
                        <div  key={item.id} className="menuItem">
                            <img src={item.icon} alt="" />
                            <span>
                            {item.heading}
                            </span>
                        </div>)
                        })}
            </div>
    </div>
  )
}

export default Sidebar