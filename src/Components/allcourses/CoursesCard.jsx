import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"
import { Image } from "semantic-ui-react"

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2-card'>
          {coursesCard.map((val, index) => (
            <div className='items hover-card' key={index}>
              <div className='img'>
                <Image src={val.cover} alt="bild" /> 
              </div>
              <div className='text'>
                <h1>{val.coursesName}</h1>
                <h4>{val.courseUpdate}</h4>
                <h4>{val.courseDescription}</h4>
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
                <div className='button'>
                  <button className='outline-btn primary-btn'>
                    Köp Nu! <i className='fa fa-long-arrow-alt-right'></i>
                  </button>
                  <button className="outline-btn">
                    LäsMer! <i className='fa fa-long-arrow-alt-right'></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
