import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { styles, Section } from '../../utils'

/**
 * functional react component for ...
 * @function
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
        <div className="item item-1">
          <Img fluid={data.img_1.childImageSharp.fluid} />
          <p className="info">awesome piza</p>
        </div>
        <div className="item item-2">
          <Img fluid={data.img_2.childImageSharp.fluid} />
          <p className="info">awesome piza</p>
        </div>
        <div className="item item-3">
          <Img fluid={data.img_3.childImageSharp.fluid} />
          <p className="info">awesome piza</p>
        </div>
      </Wrapper>
    </Section>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item{
    position: relative;
  }
  .info{
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper{
      height: 100%;
    }
    grid-template-areas:
    "one one two two"
    "one one three three";
  }
  .item-1{
    grid-area: one;
  }
  .item-2{
    grid-area: two;
  }
  .item-3{
    grid-area: three;
  }
`

export default Galary