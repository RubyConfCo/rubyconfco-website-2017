import React, {
  PropTypes,
  Component
} from 'react'
import Icon from '../Icon'
import Styles from './styles.sass'

/**
 * Componente con estilo particular de texto con hipervínculo
 * @param  {Object} props  Atributos  con los que podemos modificar el componente y darle valores.
 * @return {react~Component} markup Estructura Html para el Link.
 */

class Link extends Component {
  render() {
    const {
      children,
      className,
      href,
      IconName
    } = this.props

    const classNames = [
      Styles.Link,
      className
    ].join(' ')

    return (
      <div>
        <a className={classNames} href={href} >
          {children}
          {IconName && <Icon type={IconName} className={Styles.Icon} />}
        </a>
      </div>
    )
  }
}

Link.defaultProps = {
  children: '',
  className: '',
  IconName: '',
  href: ''
}

Link.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  IconName: PropTypes.string,
  href: PropTypes.string
}

export default Link
