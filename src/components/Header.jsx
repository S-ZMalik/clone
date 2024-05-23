import React, { useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Header = ({navData, logo}) => {
  let [isOpen, setIsOpen] = useState(false);
  let [isMoblie, setIsMobile] = useState(false);

  function checkMobileDevice () {
    setIsMobile(window.innerWidth <= 788);
  }

  useEffect(() => {
    checkMobileDevice();
    window.addEventListener('resize', checkMobileDevice);

    return () => {
      window.removeEventListener('resize', checkMobileDevice);
    }
  }, [])


  return (
    <header className="header-section">
    <div className="container">
      <div className="nav-logo">
        <a href="#home">
          <img src={logo} alt="this is cosmic logo" className="logo" />
        </a>
      </div>

        <nav className={`nav  ${isOpen && isMoblie ? 'open' : ''}`}>
          <ul className="nav-main-list">
          {navData.map((item) => (
            <li className="navlist"  key={item.list}>
              <a href={item.link}>{item.list}</a>
            </li>
             ))}
          </ul>
        </nav>
     
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoCloseSharp className='hidden'/> : <IoMenu className='hidden'/>}
        </button>
        
    </div>
  </header>
  )
}

export default Header