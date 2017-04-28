import React, {
  PropTypes,
  Component
} from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Styles from './styles.css'

/**
 * Componente con estilo particular de Select.
 * @param  {Object} props  Atributos  con los que podemos modificar el componente y darle valores, para utilizar con redux-form.
 * @return {react~Component} markup Estructura Html para el SelectBox.
 */

class SelectBox extends Component {
  render() {
    const {
      field
    } = this.props

    return (
      <div className={Styles.SelectBox}>
        <Select
          value={field.input.value}
          onChange={field.input.onChange}
          onBlur={() => field.input.onBlur(field.input.value)}
          options={this.state.options}
          placeholder="Selecciona tu tipo de documento"
          className={`DropDownSelect ${field.meta.touched && field.meta.error ? 'Error' : ''}`}
          autosize={false}
          searchable={false}
          disabled={field.meta.submitting}
          simpleValue
        />
        {field.meta.touched && ((field.meta.error && <span className={Styles.ErrorText}>{field.meta.error}</span>))}
      </div>
    )
  }
}

SelectBox.defaultProps = {
  field: {}
}

SelectBox.propTypes = {
  field: PropTypes.Object

}

export default SelectBox
