import React from 'react'

import logo from '../assets/images/logomin.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" style={{width:125,height:125}}/></span>
        <h1>Zachary Linkletter</h1>
        <p>
        Computer engineer experienced in developing powerful web solutions for complicated data problems. <br/> University of Maine &mdash; 2020
        </p>
    </header>
)

export default Header
