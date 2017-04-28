import React, { PropTypes } from 'react'
import Styles from './styles.sass'

/**
 * Componente que se de manejar los iconos de la aplicación.
 * @param  {Object} props  Atributos  con los que podemos modificar el componente. Ejempli: { width, height, values, label, colors, radius, children }
 * @return {react~Component} markup Estructura Html para el Icon.
 */
const Icon = ({ type = '', className }) => {
  const classNames = [
    Styles[type],
    className
  ].join(' ')
  return (
    <span className={classNames} />
  )
}

Icon.propTypes = {
  type: PropTypes.oneOf([
    'IconArrowDown',
    'IconArrowRight',
    'IconCalendar',
    'IconCoffee',
    'IconConference',
    'IconLunch',
    'IconMessage',
    'IconPeople',
    'IconPlace',
    'IconRubyConf',
    'IconTicket',
    'IconTime',
    'IconFacebook',
    'IconTwitter',
    'IconMenu'
  ]).isRequired,
  className: PropTypes.string
}

Icon.defaultProps = {
  type: 'IconArrowDow',
  className: ''
}

export default Icon
