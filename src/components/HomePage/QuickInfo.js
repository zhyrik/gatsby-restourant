import React from 'react'
import PropTypes from 'prop-types'

import { Section, Title } from '../../utils'

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
    </Section>
  )
}

QuickInfo.propTypes = {
 ex: PropTypes.func.isRequired
}

export default QuickInfo