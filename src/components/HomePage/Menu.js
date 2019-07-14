import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Product from './Product'
import { Title, Section } from '../../utils'

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 * @useIn - ./pages/index.js
 */
function Menu() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      products:allContentfulRestourant {
        edges {
          node {
            image {
              fixed(width: 100) {
                ...GatsbyContentfulFixed_tracedSVG
              }
            }
            title
            price
            ingridient
            id
          }
        }
      }
    }
  `)
  return (
    <Section>
      <Title title="feature items" message="little taste" />
      <WrappProducts>
        {data.products.edges.map(({ node }) => (
          <Product key={node.id} product={node} />
        ))}
      </WrappProducts>
    </Section>
  )
}

const WrappProducts = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default Menu