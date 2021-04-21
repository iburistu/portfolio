import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { User, FileText, GitHub, Link as FeatherLink } from 'react-feather'

import { NavbarElement, NavbarList, NavbarLogo } from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
        <NavbarLogo>
          <h3>
            <Link to="/">
              <span className="align-middle">
                {' '}
                <FeatherLink /> {siteTitle}{' '}
              </span>
            </Link>
          </h3>
        </NavbarLogo>
        <div className="main-navigation">
          <NavbarList>
            <li>
              <Link to="/" className="lined-link" activeClassName="active">
                {' '}
                <User /> <span> About </span>{' '}
              </Link>
            </li>
            <li>
              <Link
                to="/repositories"
                className="lined-link"
                activeClassName="active"
              >
                {' '}
                <GitHub /> <span> Github </span>{' '}
              </Link>
            </li>
            <li>
              <a
                href="https://besidereal.com"
                className="lined-link"
                activeClassName="active"
              >
                {' '}
                <FileText /> <span> Blog </span>{' '}
              </a>
            </li>
          </NavbarList>
        </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
