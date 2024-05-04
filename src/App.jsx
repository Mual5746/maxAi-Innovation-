
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Case from './Components/Case/Case'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Review from './Components/Review/Review'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Curse from './Components/Curse/Curse'

const App = () =>{
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Fullstack webbutvecklare' />
        <Case />
        <Title subTitle='Om Oss'  />
        <About />
        <Title subTitle='Kurser som vi erbjuder' />
        <Curse/> 
        <Title subTitle='Recension'  />
        <Review />
        <Title subTitle='Kontakta Oss'/>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
