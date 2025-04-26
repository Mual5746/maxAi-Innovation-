import './Navbar.css'
import logo from '../../assets/logo3.png'
import menu_icon from '../../assets/menu-icon.png'
import { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'  // Importera Link från react-router-dom

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
        <li><Link to='/' > Hem</Link></li> {/* Använd Link från react-router-dom här */}
        <li><ScrollLink to='cases' smooth={true} offset={-250} duration={500} > Webbutvecklare</ScrollLink></li>
        <li><Link to='/about' > Om Oss</Link></li> {/* Använd Link från react-router-dom här */}
        <li><Link to='/allcurses' > Kurser</Link></li> {/* Använd Link från react-router-dom här */}
        <li><ScrollLink to='review' smooth={true} offset={-250} duration={500} > Recentioner</ScrollLink></li>
        <li><Link to='/pricing' > Pris</Link></li> {/* Använd Link från react-router-dom här */}

        <li><ScrollLink to='contact' smooth={true} offset={50} duration={500} > Kontakt </ScrollLink></li>
        <li className='sign-in'>Logga in</li>
        <li><button className='btn sign-upp'> Registrera </button></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
