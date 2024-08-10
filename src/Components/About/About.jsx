import './About.css'
import Back from '../Common/Back/Back'
import AboutCard from './AboutCard'
import Navbar from '../Navbar/Navbar'
import Title from '../Title/Title'
import Team from '../team/Team'
const About = () => {
  return (
    <div className='about'>
       <Navbar/>
       <Back title='Om Oss' />
       <AboutCard />
       <Title subTitle='våra Team' />
      <Team/>  
      

    </div>
  )
}

export default About
