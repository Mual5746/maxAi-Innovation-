import './About.css'
import profile from '../../assets/profile.png'
const About = () => {
  return (
    <div className='about'>
      <div className='about-left' >
        <img className='about-image' src={profile} alt="" />
      </div>
      <div className='about-right' >
        <h3>Max Ali</h3>
        <p>
          Under de senaste 10 åren har jag haft förmånen att arbeta inom olika branscher och för välrenommerade företag som SEB, Migrationsverket, Akademiska sjukhuset, Uppsala universitet, Ericsson, Region Stockholm och Uppsala kommun.

          År 2023 tog jag det modiga steget att följa min passion och ägna mig åt coachning för att hjälpa andra att förverkliga sina drömmar. Är du en person som känner sig fast i din nuvarande karriär eller funderar på att byta spår men känner osäkerhet kring hur du ska komma igång?

          Vår passion är att ge stöd och vägledning för att hjälpa dig att nå dina karriärmål. Prenumerera på vår community för att ta del av alla tips och tricks som kan hjälpa dig att starta och utveckla din karriär redan under 2024.
        </p>
      </div>

    </div>
  )
}

export default About
