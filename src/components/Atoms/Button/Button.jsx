import React, {
  PropTypes
} from 'react'
import Styles from './styles.sass'

/**
 * Componente que se encarga de mostrar un boton, dependiendo de los atributos se mostrara un boton de diferente diseño.
 * @param  {Object} props  Atributos con los que se va crear el componente. Ejemplo: { theme, text, onClick, className, disabled, options, btnLoading }
 * @return {react~Component} markup Estructura Html para el Button.
 */
const Button = ({ theme, text, onClick, className, disabled, options }) => {
  const classNames = `${Styles[theme]} ${className} ${disabled ? Styles.Disabled : ''}`

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      {...options}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  onClick: () => null,
  theme: 'Primary',
  options: null,
  btnLoading: null,
  className: '',
  disabled: false
}

Button.propTypes = {
  theme: PropTypes.oneOf([
    'Primary',
    'Second',
    'Linear',
    'Red'
  ]).isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.object
}

export default Button
