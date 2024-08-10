import { team } from "../../dummydata"
import '@fortawesome/fontawesome-free/css/all.min.css';

const TeamCard = () => {
  return (
    <div className='team-container'> {/* Lägg till denna container */}
      {team.map((val, index) => (
        <div className='team' key={index}>
          <div className='items shadow'>
            <div className='img'>
              <img src={val.cover} alt='' />
              <div className='overlay'>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin"></i> {/* LinkedIn */}
                <i className="fab fa-github"></i> {/* GitHub */}
                <i className="fas fa-globe"></i> {/* Portfolio/hemsida */}
              </div>
            </div>
            <div className='details'>
              <h2>{val.name}</h2>
              <p>{val.work}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TeamCard
