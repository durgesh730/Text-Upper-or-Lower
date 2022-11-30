import React, { useState} from 'react'
import "./navbar.css"
import { FaBars } from 'react-icons/fa';


const Navbar = () => {

  var [isShown] = useState(false);

  const handleClick = () => {
    if (isShown === false) {
      // console.log("open")
      document.getElementById('SideNav').style.width = "200px"
      isShown = true;
    } else {
      // console.log("close")
      document.getElementById('SideNav').style.width = "0px"
      isShown = false;
    }
  };

  return (
    <>
      <div className='Navbar'>
        <div className='container'>
          <nav>
            <div className='logo'><span>Upper To Lower</span></div>
            <div className='RightNav'>
              <span className='Bars' onClick={handleClick}><FaBars /></span>
            </div>
          </nav>
        </div>

        <div className='Sidenav' id='SideNav'>
          <a href='/'>Home</a>
          <a href='/'>Login</a>
          <a href='/'>Signup</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
