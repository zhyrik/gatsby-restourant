import React from 'react'
import PropTypes from 'prop-types'

import { Section, Title, SectionButton } from '../../utils'

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 * @useIn - ./
 */
function QuickInfo({ ex }) {
  return (
    <Section>
      <Title message="some message" title="title"></Title>
      <SectionButton>about</SectionButton>
    </Section>
  )
}

QuickInfo.propTypes = {
 ex: PropTypes.func.isRequired
}

export default QuickInfo