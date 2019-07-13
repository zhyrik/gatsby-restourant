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
      img_2: file(relativePath: { eq: "homeGallery/img-2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img_3: file(relativePath: { eq: "homeGallery/img-3.jpeg" }) {
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
      <Wrapper>
        <div className="item item1">
          <Img fluid={data.img_1.childImageSharp.fluid} />
          <p className="info">awesome piza</p>
        </div>
        <div className="item item1">
          <Img fluid={data.img_2.childImageSharp.fluid} />
          <p className="info">awesome piza</p>
        </div>
        <div className="item item1">
          <Img fluid={data.img_3.childImageSharp.fluid} />
          <p className="info">awesome piza</p>
        </div>
      </Wrapper>
    </Section>
  )
}

const Wrapper = styled.div`

`

export default Galary