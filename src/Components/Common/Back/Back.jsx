
import PropTypes from 'prop-types'


const Back = ({ title }) => {

  return (
    <>
      <section className='back'>
        <h2>{title}</h2>
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