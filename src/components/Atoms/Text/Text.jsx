import React, {
  PropTypes
} from 'react'
import Styles from './styles.sass'

/**
 * Componente que se encarga de mostrar los titulos dependiendo del parametro type.
 * @param  {Object} props  Atributos con los que se va crear el componente. Ejemplo: { type, text, className }
 * @return {react~Component} markup Estructura Html para el Text.
 */
const Text = ({ type, children, className }) => {
  const classNames = `${Styles[type]} ${className}`

  return (
    <p
      className={classNames}
    >
      {children}
    </p>
  )
}

Text.defaultProps = {
  type: 'Big',
  children: ''
}

Text.propTypes = {
  type: PropTypes.oneOf([
    'Big',
    'Medium',
    'Small'
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired
  ]),
  className: PropTypes.string.isRequired
}

export default Text
