import Back from "../Common/Back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"

const Pricing = () => {
  return (
    <>
      <div className="pricing"> {/* Add id="pricing" */}
        <Back title='Choose The Right Plan' />
        <PriceCard />
        
      </div>
      <Faq />
    </>
  )
}

export { PriceCard }; // Export PriceCard separately
export default Pricing
