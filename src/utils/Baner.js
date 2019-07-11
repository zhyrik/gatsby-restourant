import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { styles } from '../utils'

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 * @useIn - ../pages/index.js
 * @useIn - ../pages/about.js
 * @useIn - ../pages/menu.js
 * @useIn - ../pages/contact.js
 */
function Baner ({ title, subtitle, children }) {
  return (
    <BanerWrapper>
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      {children}
    </BanerWrapper>
  )
}

const BanerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  color: ${styles.colors.mainWhite};
  .title {
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: '0.7rem'})}
  }
  .subtitle {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: '0.2rem'})};
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`

Baner.propTypes = {
 title: PropTypes.string.isRequired,
 subtitle: PropTypes.string.isRequired,
 children: PropTypes.node
}
Baner.defaultProps = {
  title: 'default title',
}

export { Baner }