import './About.css'
import Back from '../Common/Back/Back'
import AboutCard from './AboutCard'
import Navbar from '../Navbar/Navbar'

const About = () => {
  return (
    <div className='about'>
       <Navbar/>
       <Back title='About Us' />
       <AboutCard />
      

    </div>
  )
}

export default About
