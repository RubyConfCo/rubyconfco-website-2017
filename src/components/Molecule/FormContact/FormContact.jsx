import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import Styles from './styles.sass'

import InputText from '../../Atoms/InputText'
import Text from '../../Atoms/Text'
import Button from '../../Atoms/Button'

/**
 * Este componente es el que se encarga de hacer la logica para login de un usuario.Si la respuesta es que no esta registrado es enviado a la pagina de registro.
 */

class FormContact extends Component {
  /**
   * constructor
   * @param  {object} props
   */
  constructor(props) {
    super(props)
    /**
     *
     * @type {Object}
     * @property {boolean} loginBtn Este atributo el estado actual del botón.
     */
    this.state = {
      loginBtn: false
    }
    this.submit = this.submit.bind(this)
  }

  async submit(values) {
    console.log('Form Data', values)
  }

  /**
   * render
   * @return {ReactElement} markup
   */

  render() {
    const {
      handleSubmit
    } = this.props

    return (
      <form className={Styles.Container} onSubmit={handleSubmit(this.submit)}>
        <div className={Styles.BoxField}>
          <Text className={Styles.TitleField}>Name</Text>
          <div className={Styles.Divider} />
          <Field
            name="correo"
            placeholder="Enter your first name"
            component={InputText}
          />
          <Field
            name="correo"
            placeholder="Enter your last name"
            component={InputText}
          />
        </div>
        <div className={Styles.BoxField}>
          <Text className={Styles.TitleField}>Email</Text>
          <div className={Styles.Divider} />
          <Field
            name="correo"
            placeholder="Enter your email"
            component={InputText}
          />
        </div>
        <Button
          type="submit"
          theme="Primary"
          text="Subscribe"
          btnLoading={this.state.loginBtn}
          className={Styles.Button}
        />
      </form>
    )
  }
}

FormContact.defaultProps = {
  handleSubmit: () => {},
  history: {}
}

FormContact.propTypes = {
  handleSubmit: PropTypes.func,
  history: PropTypes.object
}


const FormLoginRedux = reduxForm({
  form: 'LoginForm'
})(FormContact)

export default FormLoginRedux
