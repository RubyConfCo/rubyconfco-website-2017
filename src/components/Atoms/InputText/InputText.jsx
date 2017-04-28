import React, {
  PropTypes,
  Component
} from 'react'
import Icon from '../Icon'
import Styles from './styles.sass'

/**
 * Componente con estilo particular de un input de tipo text.
 * @param  {Object} props  Atributos  con los que podemos modificar el componente y darle valores, para utilizar con redux-form.
 * @return {react~Component} markup Estructura Html para el InputText.
 */

class InputText extends Component {
  render() {
    const {
      input: {
        name,
        value,
        type,
        ...input
      },
      containerStyle,
      IconName,
      meta,
      ...restProps
    } = this.props

    const StyleContainer = `${Styles.Container} ${containerStyle}`

    const StyleImput = `${Styles.Input} ${meta.touched && meta.error ? Styles.InputError : ''}`

    return (
      <div className={StyleContainer}>
        <input
          className={StyleImput}
          type={type}
          id={name}
          name={name}
          value={value}
          {...restProps}
          {...input}
        />
        {IconName && <Icon type={IconName} className={Styles.Icon} />}
      </div>
    )
  }
}

InputText.defaultProps = {
  onChange: () => {},
  containerStyle: '',
  type: 'text',
  input: {},
  IconName: '',
  meta: {}
}

InputText.propTypes = {
  onChange: PropTypes.func,
  containerStyle: PropTypes.string,
  IconName: PropTypes.string,
  meta: PropTypes.object,
  type: PropTypes.string,
  input: PropTypes.object
}

export default InputText
