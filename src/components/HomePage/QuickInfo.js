import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Section, Title, SectionButton } from '../../utils'
import { styles } from '../../utils'

/**
 * functional react component for quik section (home page)
 * @function
 * @returns {JSX.Element} - react component
 * @useIn - ./pages/index.js
 */
function QuickInfo() {
  return (
    <Section>
      <Title message="some message" title="title"></Title>
      <Wrapper>
        <p className="text">
        You can use the node createPages API to pull unstructured data directly into Gatsby sites rather than through GraphQL and source plugins. This is a great choice for small sites, while GraphQL and source plugins can help save time with more complex sites.Import useStaticQuery and graphql from gatsby in order to use the hook query the data.In the start of a stateless functional component, assign a variable to the value of useStaticQuery with your graphql query passed as an argument.In the JSX code returned from your component, you can reference that variable to handle the returned data.
        </p>
        <Link to="/about/" style={{textDecoration: 'none'}}>
          <SectionButton>about</SectionButton>
        </Link>
      </Wrapper>
    </Section>
  )
}

const Wrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text{
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default QuickInfo