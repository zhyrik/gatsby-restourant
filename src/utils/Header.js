import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import defaultImg from '../images/bcg/homeBcg.jpeg'

/**
 * functional react component for HEADER template (background img && text center)
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 * @useIn - ../pages/index.js
 */
function HomeHeader ({ img, children }) {
  return (
    <IndexHeader img={img}>
      {children}
    </IndexHeader>
  )
}
/**
 * same conponent but diferent height 
 */
function PageHeader ({ img, children }) {
  return (
    <PagesHeader img={img}>
      {children}
    </PagesHeader>
  )
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 71px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PagesHeader = styled(IndexHeader)`
  min-height: 60vh;
`
HomeHeader.propTypes = {
  img: PropTypes.any.isRequired,
  children: PropTypes.node
 }
 HomeHeader.defaultProps = {
   img: defaultImg
 }
 
 PageHeader.propTypes = {
   img: PropTypes.any.isRequired,
   children: PropTypes.node
  }
  PageHeader.defaultProps = {
    img: defaultImg
  }

export { HomeHeader, PageHeader}
