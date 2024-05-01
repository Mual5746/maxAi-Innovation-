
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Case from './Components/Case/Case'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import VideoLessons from './Components/VideoLessons/VideoLessons'
import Review from './Components/Review/Review'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () =>{
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Fullstack webbutvecklare' title='Denna kursen består 22 lektioner' />
        <Case />
        <Title subTitle='Fullstack webbutvecklare' title='Om Oss' />
        <About />
        <Title subTitle='Fullstack Webbutvecklare' title='Lektionerna' />
        <VideoLessons />
        <Title subTitle='Recension' title='Vad studenterna tycker om kurserna' />
        <Review />
        <Title subTitle='Kontakta Oss' title='' />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
