import PropTypes from 'prop-types';


export const DiegoComponent = ({nombre, apellido}) => {
  return (
    <div> {nombre} {apellido} Component!</div>
  )
}

DiegoComponent.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired
}


DiegoComponent.defaultProps = {
  nombre: 'Angelica',
  apellido: 'Ceballos',
  edad: 30
}