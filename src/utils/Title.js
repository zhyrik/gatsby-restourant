import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { styles } from '../utils'
/**
 * functional react component for sections title componnent
 * @function
 * @param {string} title 
 * @param {string} message
 * @returns {JSX.Element} - react component
 * @useIn - ./
 */
function Title({ title, message }) {
  return (
    <Wrap>
      <h3 className="message">{message}</h3>
      <h1 className="title" >{title}</h1>
      <div className="underline"></div>
    </Wrap>
  )
}

const Wrap = styled.div`
  text-align: center;
  .message {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: '0.3rem'})};
    font-size: 2rem;
    color: ${styles.colors.mainYellow};
  }
  .title{
    ${styles.letterSpacing({ spacing: '0.3rem'})};
    font-size: 2rem;
    text-transform: uppercase;
  }
  .underline{
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }
`

Title.propTypes = {
 title: PropTypes.string.isRequired,
 message: PropTypes.string
}
Title.defaultProps = {
  message: 'some message',
  title: 'our title'
}

export default Title