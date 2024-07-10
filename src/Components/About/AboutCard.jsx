import "./About.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import Title from "../Title/Title"
import img from "../../assets/profile.png"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src={img} alt='bild card' />
          </div>
          <div className='right row'>
            <Title subTitle='LEARN ANYTHING' />
            <div className='items'>
              {homeAbout.map((val, index) => {
                return (
                  <div className='item flexSB' key={index}>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
