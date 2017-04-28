import React, { Component } from 'react'
import Menu from '../../Molecule/Menu'
import Footer from '../../Molecule/Footer'
import CodeRuby from '../../Molecule/CodeRuby'
import FormContact from '../../Molecule/FormContact'
import Speakers from '../../Organisms/Speakers'
import Icon from '../../Atoms/Icon'
import Divider from '../../Atoms/Divider'
import RubyLogo from '../../Atoms/RubyLogo'
import Button from '../../Atoms/Button'
import Title from '../../Atoms/Title'
import Text from '../../Atoms/Text'
import Styles from './styles.sass'

import Ticket from '../../../assets/images/RubyConf_Ticket.png'
import MapImg from '../../../assets/images/Map.png'

import appsignal from '../../../assets/images/Sponsors/appsignal.png'
import codeschool from '../../../assets/images/Sponsors/codeschool.png'
import Cookpad from '../../../assets/images/Sponsors/Cookpad.png'
import digitalocean from '../../../assets/images/Sponsors/digitalocean.png'
import getonBoard from '../../../assets/images/Sponsors/getonBoard.png'
import koombea from '../../../assets/images/Sponsors/koombea.png'
import makeitreal from '../../../assets/images/Sponsors/makeitreal.png'
import micro from '../../../assets/images/Sponsors/micro.png'
import pdfbucket from '../../../assets/images/Sponsors/pdfbucket.png'
import shopify from '../../../assets/images/Sponsors/shopify.png'
import wesura from '../../../assets/images/Sponsors/wesura.png'
import worldtech from '../../../assets/images/Sponsors/worldtech.png'


class HomeAppPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <div className={Styles.Container}>
        <header className={Styles.Header}>
          <div className={Styles.HeaderContent} >
            <Menu />
            <div className={`${Styles.row} ${Styles.padding_100}`}>
              <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns} ${Styles.BoxLogo}`}>
                <RubyLogo />
              </div>
              <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns}`}>
                <p className={Styles.TextDescription}>
                  Be part of RubyConf Colombia 2017. The organizing team is hard at work to make this one of the best Ruby conferences ever.
                </p>
                <p className={Styles.TextDate}><Icon type="IconCalendar" /> 8 - 9 September, 2017</p>
                <p className={Styles.TextPlace}><Icon type="IconPlace" /> Medellín, Colombia</p>
              </div>
              <div className={`${Styles.small_12} ${Styles.large_12} ${Styles.columns}`}>
                <Icon type="IconArrowDown" className={Styles.ArrowDown} />
              </div>
            </div>
          </div>
        </header>
        <main className={Styles.EffectTriangles}>
          <section className={Styles.row}>
            <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns}`}>
              <Title className={Styles.BlueColor} type="Big">Get the Tickets</Title>
              <Text className={Styles.DescriptionFirstSection} type="Big">Join us September 8th and 9th, to be a part of the Ruby conference where people from all over the world will come together to share their knowledge and to inspire others.</Text>
              <Button text="Get tickets now!" theme="Primary" />
              <CodeRuby />
            </div>
            <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns}`}>
              <img className={Styles.Ticket} src={Ticket} alt="Ticket RubyConf" />
            </div>
          </section>
          <div className={`${Styles.DividerSection} ${Styles.row}`}>
            <Divider
              basicColor="#c0c0c0"
              PrimaryColor="#0024A7"
              SecondColor="#EB151C"
              name="speakers"
            />
            <Title className={Styles.TextBlue} type="Big">Speakers</Title>
          </div>
          <section className={Styles.row}>
            <div className={`${Styles.small_12} ${Styles.large_4} ${Styles.columns}`}>
              <Speakers />
            </div>
            <div className={`${Styles.small_12} ${Styles.large_4} ${Styles.columns}`}>
              <Speakers />
            </div>
            <div className={`${Styles.small_12} ${Styles.large_4} ${Styles.columns}`}>
              <Speakers />
            </div>
            <div className={`${Styles.small_12} ${Styles.large_4} ${Styles.columns}`}>
              <Speakers />
            </div>
            <div className={`${Styles.small_12} ${Styles.large_4} ${Styles.columns}`}>
              <Speakers />
            </div>
            <div className={`${Styles.small_12} ${Styles.large_4} ${Styles.columns}`}>
              <Speakers />
            </div>
          </section>
          <section className={`${Styles.Shedule}`}>
            <div className={Styles.row}>
              <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns}`}>
                <Title className={Styles.WhiteColor} type="Big">Get the Tickets</Title>
                <Text className={`${Styles.DescriptionFirstSection} ${Styles.WhiteColor} `} type="Big">Join us September 8th and 9th, to be a part of the Ruby conference where people from all over the world will come together to share their knowledge and to inspire others.</Text>
                <Button text="Get tickets now!" theme="Primary" />
              </div>
              <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns}`}>
                <img className={Styles.Ticket} src={Ticket} alt="Ticket RubyConf" />
              </div>
            </div>
            <div className={`${Styles.DividerSection} ${Styles.row}`}>
              <Divider
                basicColor="#FFFFFF"
                PrimaryColor="#4d4848"
                SecondColor="#f6f6f6"
                name="location"
              />
              <Title className={Styles.TextWhite} type="Big">Location</Title>
            </div>
            <div className={Styles.row}>
              <div className={`${Styles.small_12} ${Styles.large_12} ${Styles.columns}`}>
                <div>
                  <Text className={`${Styles.Bold} ${Styles.Place}`}><Icon type="IconPlace" /> El Teatrico</Text>
                  <Text className={`${Styles.Place} ${Styles.Margin_left_40}`}>Transversal 39B # Circular 2 - 46, Medellín, Antioquia, Colombia</Text>
                </div>
              </div>
            </div>
            <div className={`${Styles.Location}`}>
              <div className={Styles.row}>
                <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns}`}>
                  <CodeRuby />
                </div>
                <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns}`}>
                  <img className={Styles.MapImg} src={MapImg} alt="RubyConf Location" />
                </div>
              </div>
            </div>
          </section>
          <section className={Styles.CodeConduc}>
            <div className={`${Styles.row} ${Styles.padding_100}`}>
              <div className={`${Styles.small_12} ${Styles.large_12} ${Styles.columns}`}>
                <Title className={Styles.Title} type="Big">Code of conduct</Title>
                <div className={Styles.Divider} />
                <Text className={Styles.Description}>We dedicate ourselves to making everyone feel welcome and at home, both during the conference and events.</Text>
                <Text className={Styles.Description}>Our Code of Conduct offers some guidelines to ensure this for both attendees and speakers.</Text>
                <Button className={Styles.Button} text="Code of conduct" theme="Red" />
              </div>
            </div>
          </section>
          <section className={Styles.Sponsors}>
            <div className={`${Styles.DividerSection} ${Styles.row}`}>
              <Divider
                basicColor="#c0c0c0"
                PrimaryColor="#0024A7"
                SecondColor="#EB151C"
                name="sponsors"
              />
              <Title className={Styles.TextCherry} type="Big">Sponsors</Title>
            </div>
            <div className={`${Styles.row}`}>
              <Text className={Styles.Title}>Silve</Text>
              <ul className={Styles.ListSponsors}>
                <li><img src={Cookpad} alt="Cookpad" /></li>
                <li><img src={koombea} alt="koombea" /></li>
                <li><img src={getonBoard} alt="getonBoard" /></li>
                <li><img src={wesura} alt="wesura" /></li>
              </ul>
              <Text className={Styles.Title}>Bronze</Text>
              <ul className={Styles.ListSponsors}>
                <li><img src={pdfbucket} alt="pdfbucket" /></li>
                <li><img src={micro} alt="micro" /></li>
                <li><img src={makeitreal} alt="micro" /></li>
              </ul>
              <Text className={Styles.Title}>Supporters</Text>
              <ul className={Styles.ListSponsors}>
                <li><img src={appsignal} alt="appsignal" /></li>
                <li><img src={codeschool} alt="codeschool" /></li>
                <li><img src={digitalocean} alt="digitalocean" /></li>
                <li><img src={shopify} alt="shopify" /></li>
                <li><img src={worldtech} alt="worldtech" /></li>
              </ul>
            </div>
          </section>
          <section className={Styles.Contact}>
            <div className={`${Styles.row} ${Styles.padding_100}`}>
              <div className={`${Styles.small_12} ${Styles.large_12} ${Styles.columns}`}>
                <Title className={Styles.Title} type="Big">Join to our mailing list</Title>
                <Text className={Styles.Description}>Get the latest news about RubyConf Colombia, subscribing to our mailing list.</Text>
              </div>
            </div>
            <FormContact />
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default HomeAppPage
