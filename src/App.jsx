import Navbar from './Components/Navbar/Navbar'
import Case from './Components/Case/Case'
import Title from './Components/Title/Title'

import Review from './Components/Review/Review'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Curse from './Components/Curse/Curse'
import Home from './Components/home/Home'
import AboutCard from './Components/About/AboutCard'
import AllCurses from './Components/allcourses/CourseHome'


const App = () => {
  return (
    <div>
      <Navbar />
       <Home/>
      <div className="container">
        <Title subTitle='Fullstack webbutvecklare' />
        <Case />
      </div>
      <AboutCard/>
      <div className="container">
        <AllCurses />

        <Title subTitle='Kurser som vi erbjuder' />
        <Curse />
        <Title subTitle='Recension' />
        <Review />
        <Title subTitle='Kontakta Oss' />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
