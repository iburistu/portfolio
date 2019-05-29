import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'

import pic01 from '../assets/images/pic01min.jpg'
import pic02 from '../assets/images/pic02.svg'

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
          <title>Linkletter Porfolio</title>
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

          <section id="second" className="main special skills">
            <header className="major">
              <h2>Technical Skills</h2>
              <ul>
                <li>Proficient with Microsoft Windows, macOS &amp; Linux (Ubuntu/Debian &amp; Arch)</li>
                <li>Fluent in C/C++, Python, JavaScript, MATLAB, ARM Assembly, C#/VB.NET, LaTex</li>
                <li>Experienced as a fullstack web developer (Flask, Node.js [Express]; React, JQuery; Gatsby, Surge)</li>
                <li>Experienced  with  database  systems  (Oracle  PL/SQL,  Microsoft  SQL  Server,  Microsoft  Access,  GE Brilliant Manufacturing Suite, Tableau, Vimana) and as a Linux system admin</li>
                <li>Familiar with Perl, Relay Ladder Logic, Golang</li>
                <li>Experienced with the development of ChromeOS applications</li>
                <li>Experienced with OpenMP, MPI, and CUDA</li>
                <li>Proficient with vi/vim, VSCode, Visual Studio, EAGLE, CA Agile Central (formerly Rally ALM)</li>
              </ul>
            </header>
          </section>

          <section id="third" className="main special work">
            <header className="major">
              <h2>Work Experience</h2>
              <ul>
                <li>GE</li>
                <span>EID Intern: </span> <br />
                <span style={{textDecoration:"underline"}}>July 2018 &mdash; March 2019</span>
                <p>
                  Lead development on a web application that quantifies employee performance based on numerous metrics; work on an Agile team as a fullstack developer to create at-a-glance digital signage web applications that relay essential manufacturing data to supervisors and machinists from multiple data sources; design a intermediate data layer that consolidates disparate datasources to accelerate application deployment; develop a ChromeOS application that displays up to four webpages simultaneously with remote configuration; develop a program that automatically calculates tool offsets for CNC machine operators and generates trend data
                </p>
                
                <li>University of Maine, College of Electrical and Computer Engineering</li>
                <span>Research Assistant:</span> <br />
                <span style={{textDecoration:'underline'}}>January 2019 &mdash; May 2019</span>
                <p>
                Translate Arudino C code to STM32 C code for radar devices that determine wild beehive health with digital signal processing
                </p>
                
                <li>University of Maine, College of Electrical and Computer Engineering</li>
                <span>Teaching Assistant:</span> <br />
                <span style={{textDecoration:'underline'}}>August 2017 &mdash; Present</span>
                <p>
                Work with students to foster understanding and critical thought; solder and test PCBs, utilize Mathematica and MATLAB software, and program ATXMega in C <br />
                Program STM32L4 boards with C and ARM assembly; interact with hardware using SPI &amp; i2c
                </p> 

                <li>University of Maine, Resident Life</li>
                <span>Resident Assistant:</span> <br />
                <span style={{textDecoration:'underline'}}>August 2017 &mdash; May 2018</span>
                <p>
                Work providing resources to residents, handle housing violations, build community, host programs, act as guide first years, work as a team with other RAs, manage time effectively
                </p> 
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
