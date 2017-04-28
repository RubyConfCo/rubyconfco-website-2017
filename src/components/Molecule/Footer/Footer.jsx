import React, { Component } from 'react'
import Icon from '../../Atoms/Icon'
import Text from '../../Atoms/Text'
import Styles from './styles.sass'

import LogoMonoku from '../../../assets/images/logo_monoku.png'

class Footer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <div className={Styles.Container}>
        <div className={Styles.Left}>
          <div>
            <ul className={Styles.Footer}>
              <li className={Styles.FooterItem}>About</li>
              <li className={Styles.FooterItem}>Contact</li>
              <li className={Styles.FooterItem}>Code of conduct</li>
              <li className={Styles.FooterItem}>News</li>
              <li className={Styles.FooterItem}>FAQ</li>
            </ul>
          </div>
          <div>
            <ul className={Styles.FooterIcon}>
              <li className={Styles.FooterItemIcon}><a className={Styles.IconLink} href="http://monoku.com" target="_black"><Icon type="IconFacebook" /></a></li>
              <li className={Styles.FooterItemIcon}><a className={Styles.IconLink} href="http://monoku.com" target="_black"><Icon type="IconTwitter" /></a></li>
            </ul>
          </div>
        </div>
        <div className={Styles.Right}>
          <Text className={Styles.Texto}>Made by</Text>
          <a className={Styles.Imagen} href="http://monoku.com" target="_black"><img src={LogoMonoku} alt="Monoku" /></a>
        </div>
      </div>
    )
  }
}

export default Footer
