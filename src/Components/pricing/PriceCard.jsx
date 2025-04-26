import { price } from "../../dummydata"
import Navbar from "../Navbar/Navbar"
import "./price.css"

const PriceCard = () => {
  // Check if the price array is defined and not empty
  if (!price || price.length === 0) {
    return <p>No pricing data available.</p>
  }

  return (
    <section className='price padding'> {/* Add a wrapper div with a class */}
    <Navbar />
    <div className="container grid">
      {price.map((val, index) => (
          <div className='items shadow padding' key={index}>
            
            <h4>{val.name || "Unnamed Plan"}</h4>
            <h1>
              <span>$</span>
              {val.price || "0.00"}
            </h1>
            <p>{val.desc || "No description available."}</p>
            <button className='outline-btn'>GET STARTED</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PriceCard