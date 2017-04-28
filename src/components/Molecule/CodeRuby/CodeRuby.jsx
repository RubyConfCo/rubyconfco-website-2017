import React, { Component } from 'react'
import Styles from './styles.sass'


class CodeRuby extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <div className={Styles.Container}>
        <p>require <span style={{ color: '#2843f8' }}>&apos;date&apos;</span></p>
        <br />
        <p><span style={{ color: '#e40011' }}>today</span> = Date.today() </p>
        <p>event = Date.new(<span style={{ color: '#2843f8' }}>2017, 9, 8</span>)</p>
        <br />
        <p>if <span style={{ color: '#e40011' }}>today</span> == event</p>
        <p style={{ marginLeft: '15px' }}>print <span style={{ color: '#2843f8' }}>&quot;We are ready&quot;</span></p>
        <p>else</p>
        <p style={{ marginLeft: '15px' }}>print <span style={{ color: '#2843f8' }}>&quot;Comming Soon&quot;</span></p>
        <p>end</p>
      </div>
    )
  }
}

export default CodeRuby
