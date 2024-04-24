import './Navbar.css'
import logo from '../../assets/logo3.png'
import menu_icon from '../../assets/menu-icon.png'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [stiky, setStiky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setStiky(true) : setStiky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${stiky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="log" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li> <Link to='hero' smooth={true} offset={0} duration={500} > Hem</Link></li>
        <li><Link to='cases' smooth={true} offset={-250} duration={500} > Kurser</Link></li>
        <li><Link to='about' smooth={true} offset={-240} duration={500} > Om Oss</Link></li>
        <li><Link to='videolessons' smooth={true} offset={-260} duration={500} > Lektioner</Link></li>
        <li><Link to='review' smooth={true} offset={-250} duration={500} > Recentioner</Link></li>
        <li><Link to='contact' smooth={true} offset={50} duration={500} > Kontakt </Link></li>
        <li className='sign-in'>Logga in</li>
        <li><button className='btn sign-upp'> Registrera </button></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
