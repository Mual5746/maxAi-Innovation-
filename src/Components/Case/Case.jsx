import case1 from '../../assets/case1.png'
import case2 from '../../assets/case2.png'
import './Case.css'
const Case = () => {
  return (
    <div className="cases" >
      <div className="case">
        <img src={case2} alt="" />
      </div>      
      <div className="case">
        <img src={case1} alt="" />
      </div>
      <div className="case">
        <img src={case2} alt="" />
      </div>
    </div>
  )
}


export default Case