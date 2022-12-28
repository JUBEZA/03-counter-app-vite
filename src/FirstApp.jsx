import PropTypes from 'prop-types'
export const FirstApp = ({ title, subtitle }) => {



  return (
    <>
     <h1>{ title } </h1>
     <p>{ subtitle }</p>
     <p>{ nombre }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequires,
  subtitle: PropTypes.number.isRequired,
}

FirstApp.defaultsTypes = {
  nombre: 'Fernando Herrera',
  subtitle: 'No hay subtítulo',
  title: 'No hay titulo',
}
