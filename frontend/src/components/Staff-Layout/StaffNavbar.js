import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { StaffSidebarData} from './StaffSidebarItem';
import './StaffNavbar.css';
import { IconContext } from 'react-icons';

function StaffNavbar() {
  const [staffsidebar, setstaffsidebar] = useState(false);

  const showSidebar = () => setstaffsidebar(!staffsidebar);

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={staffsidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars2'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {StaffSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <staffnav-span>{item.title}</staffnav-span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default StaffNavbar;
