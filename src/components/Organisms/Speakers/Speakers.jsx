import React, { Component } from 'react'
import Style from 'style-it'
import Link from '../../Atoms/Link'
import Styles from './styles.sass'


class Speakers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  render() {
    const perfil = {
      name: 'Ann Harter',
      description: 'Recurse Center alum. Survey Monkey engineer',
      url: 'http://s2.subirimagenes.com/imagen/previo/thump_9729024annharter.png',
      urlTow: 'http://s2.subirimagenes.com/imagen/previo/thump_9729023annharterhover.png'
    }
    return (
      <div className={Styles.Container}>
        <div className={Styles.Perfil}>
          <Style>
            {`
              .intro{
                background-image: url(${perfil.url});
              }
              .intro:hover {
                 background-image: url(${perfil.urlTow});
              }
            `}
            <div className={`${Styles.Avatar} intro`} />
          </Style>
          <p className={Styles.Name}>{perfil.name}</p>
        </div>
        <p className={Styles.Description}>{perfil.description}</p>
        <Link>Read more</Link>
      </div>
    )
  }
}

export default Speakers
