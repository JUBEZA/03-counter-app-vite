import PropTypes from 'prop-types'
export const FirstApp = ({ title, subtitle }) => {



  return (
    <>
     <h1>{ title } </h1>
     <p>{ subtitle }</p>
    </>
  )
}

FirstApp.propoTypes = {
  title: PropTypes.string.isRequires,
  subtitle: PropTypes.number.isRequired,
}
