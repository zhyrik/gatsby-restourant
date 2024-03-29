import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'
import styled from 'styled-components'

import logo from '../../../images/logo.svg'
import { styles } from '../../../utils'

/**
 * functional react component for top navbar logo 
 * @function
 * @param {function} handleNavbar - change navbarOpen (false || true)
 * @returns {JSX.Element} - react component
 * @useIn - ./index.js 
 */
function NavbarLogo({ handleNavbar }) {
  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt="company logo" width="170"/>
      </Link>
      <FaAlignRight
        className="toggle-icon"
        onClick={() => {handleNavbar()}}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon{
    font-size: 2rem;
    color: ${ styles.colors.mainYellow };
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon{
      display: none;
    }
  }
`

NavbarLogo.propTypes = {
  handleNavbar: PropTypes.func.isRequired
}

export default NavbarLogo

