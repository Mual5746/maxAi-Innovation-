import Navbar from './Components/Navbar/Navbar'
import Case from './Components/Case/Case'
import Title from './Components/Title/Title'
import Review from './Components/Review/Review'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Components/home/Home'
import AboutCard from './Components/About/AboutCard'
import AllCurses from './Components/allcourses/CourseHome'
import PriceCard from './Components/pricing/PriceCard'
import './Components/pricing/price.css'; // Import the CSS file for PriceCard

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="container">
        <Title subTitle='Fullstack webbutvecklare' />
        <Case />
      </div>
      <AboutCard />
      <div className="container">
        <AllCurses />
        <Title subTitle='Recension' />
        <Review />
        <Title subTitle='Pris' />
        <PriceCard /> {/* Use PriceCard directly */}
        <Title subTitle='Kontakta Oss' />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
