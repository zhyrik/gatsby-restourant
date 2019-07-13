import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { styles, Section } from '../../utils'

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 * @useIn - ./
 */
function Galary() {
  const data = useStaticQuery(graphql`
    query {
      img_1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Section>
      <Img fluid={data.img_1.childImageSharp.fluid} />
    </Section>
  )
}

export default Galary