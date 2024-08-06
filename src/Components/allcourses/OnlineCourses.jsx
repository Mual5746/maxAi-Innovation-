import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../Title/Title"

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' />
          <div className='content grid-online'>
            {online.map((val, index) => (
              <div className='box' key={index}>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
