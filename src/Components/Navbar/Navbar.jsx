import './Navbar.css'
import logo from '../../assets/logo3.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [stiky, setStiky] = useState(false);

  useEffect( ()=> {
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setStiky(true) : setStiky(false);
      } )
  }, []);

  return (
    <nav className={`container ${stiky? 'dark-nav' : ''  }`}>
      <img src={logo} alt="log" className='logo' />
      <ul>
        <li> <Link to='hero' smooth={true} offset={0} duration={500} > Hem</Link></li>
        <li><Link to='cases' smooth={true} offset={-250} duration={500} > Kurser</Link></li>
        <li><Link to='about' smooth={true} offset={-240} duration={500} > Om Oss</Link></li>
        <li><Link to='lessons' smooth={true} offset={-260} duration={500} > Lektioner</Link></li>
        <li><Link to='review' smooth={true} offset={-250} duration={500} > Recentioner</Link></li>
        <li><Link to='contact' smooth={true} offset={50} duration={500} > <button className='btn'> Kontakt </button> </Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
