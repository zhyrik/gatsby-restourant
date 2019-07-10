import React, { useState } from 'react'
import styled from 'styled-components'

import NavbarLogo from './NavbarLogo'
import NavbarSocials from './NavbarSocials'
import Navbarheader from './Navbarheader'

/**
 * functional react component top NAVBAR section
 * @function
 * @returns {JSX.Element} - react component
 * @useIn - ../layout.js
 */
export default function index() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <NavWrap>
      <NavbarLogo handleNavbar={handleNavbar} />
      <Navbarheader navbarOpen={navbarOpen} />
      <NavbarSocials />
    </NavWrap>
  )
}

const NavWrap = styled.nav`
@media(min-width: 768px) {
    display: flex;
    align-items: center;
  }
`