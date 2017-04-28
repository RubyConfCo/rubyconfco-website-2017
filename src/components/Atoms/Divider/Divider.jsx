import React, { Component,
  PropTypes
} from 'react'

class Divider extends Component {
  componentDidMount() {
    this.animateComponentEvent(this.props.name)
  }
  animateComponentEvent(name) {
    const divider = document.querySelector(`#${name}`)
    const gradient = divider.getElementsByTagName('linearGradient')[0]
    const offset = 50 // 60% view-height;

    const colors = {
      blue: gradient.querySelector('stop:nth-child(1)'),
      red: gradient.querySelector('stop:nth-child(2)'),
      grey: gradient.querySelector('stop:nth-child(3)')
    }
    window.addEventListener('scroll', () => {
      const currentPosition = divider.getBoundingClientRect()
      const windowOffset = (window.innerHeight * (offset / 100)) - (currentPosition.height / 2)

      const percentage = ((currentPosition.bottom - window.innerHeight) * 100) / (windowOffset * -1)

      if (percentage > 0) {
        if (percentage < 100) {
          colors.red.setAttribute('offset', `${percentage}%`)
          colors.grey.setAttribute('offset', `${percentage + 10}%`)
        } else {
          colors.red.setAttribute('offset', `${100}%`)
          colors.grey.setAttribute('offset', `${0}%`)
        }
      } else {
        colors.red.setAttribute('offset', `${0}%`)
        colors.grey.setAttribute('offset', `${0}%`)
      }
    }, { passive: true })
  }

  render() {
    const { basicColor, PrimaryColor, SecondColor, name } = this.props
    return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="817px" height="36px" viewBox="0 0 817 36" version="1.1" id={name}>
        <defs>
          <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id={'linearGradient-1'} gradientUnits="userSpaceOnUse">
            <stop stopColor={PrimaryColor} offset="0%" />
            <stop stopColor={SecondColor} offset="0%" />
            <stop stopColor={basicColor} offset="0%" />
          </linearGradient>
        </defs>
        <g id="Landing-Page" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-191.000000, -1237.000000)" id="Tickets-and-Speakers-section" fill="">
            <g transform="translate(0.000000, 492.000000)">
              <g id="Speakers-section" transform="translate(130.000000, 740.000000)">
                <g id="Tittle-Speakers" transform="translate(61.000000, 0.000000)">
                  <g id="divider">
                    <path d="M531.080689,5 L543.193518,5 L541.857601,8.11723596 L541.857298,8.1178427 L539.795167,12.9295056 L531.080689,5 Z M512.601904,5 L526.259667,5 L516.001061,13.0538876 L512.601904,5 Z M518.163868,13.549191 L528.732066,5.30994382 L537.816965,13.549191 L518.163868,13.549191 Z M505,13.549191 L510.99493,5.86713483 L514.270816,13.549191 L505,13.549191 Z M543.456605,9.43194382 L544.923864,5.99151685 L550.917583,13.6731685 L548.70464,13.6731685 L546.900553,13.6731685 L541.661596,13.6731685 L543.456605,9.43194382 Z M548.70464,15.4083483 L550.856956,15.4083483 L549.49007,16.9566517 L549.508531,16.9566517 L535.642456,32.8786629 L535.590908,32.8786629 L530.894974,38.330236 L533.243596,32.8786629 L540.271811,16.9566517 L540.927211,15.4083483 L546.900553,15.4083483 L548.70464,15.4083483 Z M517.113434,15.4083483 L538.756939,15.4083483 L531.327434,32.8786629 L527.867346,40.9943371 L525.876434,36.2900674 L517.763285,16.9566517 L517.767018,16.9566517 L517.113434,15.4083483 Z M505.247855,15.4083483 L515.197877,15.4083483 L522.533263,32.8786629 L522.516316,32.8786629 L523.1815,34.4225169 L523.181904,34.4235281 L524.838206,38.2680449 L506.574794,16.9566517 L506.614741,16.9566517 L505.247855,15.4083483 Z M816.761301,18 L816.761301,22 L557,22 L557,18 L816.761301,18 Z M494,18 L494,22 L0,22 L0,18 L494,18 Z" fill="" style={{ fill: 'url(#linearGradient-1)' }} />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

Divider.defaultProps = {
  basicColor: '#c0c0c0',
  PrimaryColor: '#0024A7',
  SecondColor: '#EB151C',
  name: ''
}

Divider.propTypes = {
  basicColor: PropTypes.string.isRequired,
  PrimaryColor: PropTypes.string.isRequired,
  SecondColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

Divider.defaultProps = {
}

export default Divider
