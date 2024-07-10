import { useLocation } from "react-router-dom"
import PropTypes from 'prop-types'


const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <section className='back'>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='margin-back'></div>
    </>
  )
}
// Definiera propTypes för komponenten
Back.propTypes = {
    title: PropTypes.string.isRequired, // Kräver att title är en string och är obligatorisk
  }
export default Back