import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val, index) => (
            <div className='items hover-card' key={index}>
              <div className='img'>
                <img src={val.cover} alt="bild" />
              </div>
              <div className='text'>
                <h1>{val.coursesName}</h1>
                <span className='date'>Uppdaterad 2024</span>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <label htmlFor=''>(5.0)</label>
                </div>
                <div className='description'>
                  {val.description}
                </div>
                <div className='details'>
                  {val.courTeacher.map((details, detailIndex) => (
                    <React.Fragment key={detailIndex}>
                      <div className='box'>
                        <div className='dimg'>
                          <img src={details.dcover} alt={details.name} />
                        </div>
                        <div className='para'>
                          <h4>{details.name}</h4>
                        </div>
                      </div>
                      <span>{details.totalTime}</span>
                    </React.Fragment>
                  ))}
                </div>
                <div className='price'>
                  <h3>
                    {val.priceAll} / {val.pricePer}
                  </h3>
                </div>
                <button className='outline-btn'>ENROLL NOW !</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
