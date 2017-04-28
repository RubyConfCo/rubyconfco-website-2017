import React, {
  PropTypes
} from 'react'
import Styles from './styles.sass'

/**
 * Componente que se encarga de mostrar los titulos dependiendo del parametro Type.
 * @param  {Object} props  Atributos con los que se va crear el componente. Ejemplo: { type, text, className }
 * @return {react~Component} markup Estructura Html para el Text.
 */
const Title = ({ type, children, value, className }) => {
  const classNames = `${Styles[type]} ${className}`

  if (value === 'h1') {
    return (
      <h1
        className={classNames}
      >
        {children}
      </h1>
    )
  } else if (value === 'h2') {
    return (
      <h2
        className={classNames}
      >
        {children}
      </h2>
    )
  } else if (value === 'h3') {
    return (
      <h3
        className={classNames}
      >
        {children}
      </h3>
    )
  }
}

Title.defaultProps = {
  type: 'Big',
  value: 'h1'
}

Title.propTypes = {
  type: PropTypes.oneOf([
    'Big',
    'Medium',
    'Small'
  ]).isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default Title
