import { faq } from "../../dummydata"
import Title from "../../Components/Title/Title"
import { useState } from "react" // Ensure useState is imported

const Faq = () => {
  const [click, setClick] = useState(null) // Initialize with null instead of false

  const toggle = (index) => {
    if (click === index) {
      return setClick(null)
    }
    setClick(index)
  }

  // Check if the faq array is defined and not empty
  if (!faq || faq.length === 0) {
    return <p>No FAQ data available.</p>
  }

  return (
    <>
      <Title subtitle='Frequently Asked Questions' />
      <section className='faq'>
        <div className='container'>
          {faq.map((val, index) => (
            <div className='box' key={index}>
              <button className='accordion' onClick={() => toggle(index)}>
                <h2>{val.title || "Untitled Question"}</h2>
                <span>
                  {click === index ? (
                    <i className='fa fa-chevron-down'></i>
                  ) : (
                    <i className='fa fa-chevron-right'></i>
                  )}
                </span>
              </button>
              {click === index ? (
                <div className='text'>
                  <p>{val.desc || "No description available."}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Faq