import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'

import pic01 from '../assets/images/pic01min.jpg'
import pic02 from '../assets/images/pic02.svg'
import microchip from '../assets/images/microchip-solid.svg'
import python from '../assets/images/python-brands.svg'
import react from '../assets/images/react-brands.svg'
import ge from '../assets/images/ge.svg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Linkletter portfolio</title>
          <link rel="canonical" href="http://linkletter.dev" />
        </Helmet>
        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Hi there.  I'm Zack.</h2>
                </header>
                <p>
                  I'm a strong believer in coffee at all times of the day, the power of data in our everyday lives, and that Donkey Kong is the only character worth playing in the Smash games.  I've been told that when I write code it's simultaneously the most terrifying and amazing event to witness.  I'm a go-getter, and when I'm developing solutions I don't take "no" for an answer.  When I get invested in a project, I won't stop until I succeed.
                </p>
              </div>
              <span className="image" >
                  <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Education</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 image"><img src={pic02} style={{height:150,width:150}} alt=""/></span>
                <h3>University of Maine</h3>
                <p>Computer Engineering, BS <br /> Electrical Engineering, BS <br /> GPA: 3.58 <br /> Expected graduation: 2020</p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>
                Areas of Expertise
              </h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon solid major style1 fa"><img src={microchip} style={{height:75,width:75}} alt=""/></span>
                <h3>
                  C/C++
                </h3>
                <p>
                  3 years of experience
                </p>
                <p>
                  Microcontroller programming (STM32)
                </p>
              </li>
              <li>
                <span className="icon major style1 fa"><img src={python} style={{height:75,width:75}} alt=""/></span>
                <h3>
                  Python
                </h3>
                <p>
                  2 years experience
                </p>
                <p>
                  Microservices and scripting
                </p>
              </li>
              <li>
              <span className="icon solid major style1 fa style3"><img src={react} style={{height:75,width:75}} alt=""/></span>
                <h3>
                  React
                </h3>
                <p>
                  1 year experience
                </p>
                <p>
                  Internal facing web development and mobile development
                </p>
              </li>
            </ul>
          </section>

          <section id="third" className="main special">
            <header className="major">
              <h2>Work Experience</h2>
              <ul className="features">
                <li>
                  <span className="icon solid major style1 fa"><img src={ge} style={{height:75,width:75}} alt=""/></span>
                  <h3>
                    GE
                  </h3>
                  <p>DTLP Intern: Lead Mobile Developer <br /> June 2019 &mdash; Present</p>
                  
                  <p>EID Intern: Lead Data Engineer <br /> July 2018 &mdash; March 2019</p>
                </li>

                <li>
                  <span className="icon solid major style1 fa"><img src={pic02} style={{height:75,width:75}} alt=""/></span>
                  <h3>
                    University of Maine
                  </h3>
                  <h4>
                    College of Electrical and Computer Engineering
                  </h4>
                  <p>
                    Research Assistant: <br /> January 2019 &mdash; May 2019
                  </p>
                  <p>
                    Teaching Assistant: <br /> August 2017 &mdash; Present
                  </p>
                </li>

                <li>
                  <span className="icon solid major style1 fa"><img src={pic02} style={{height:75,width:75}} alt=""/></span>
                  <h3>
                    University of Maine
                  </h3>
                  <h4>
                    Resident Life
                  </h4>
                  <p>
                    Resident Assistant: August 2017 &mdash; May 2018
                  </p>
                </li>
              </ul>
            </header>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Contact</h2>
              <p>Questions?  Comments?  Concerns?  Lay it on me; I can take it. <br/> I'd love to get in contact with you!</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/contact" className="button special">Contact Me!</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
