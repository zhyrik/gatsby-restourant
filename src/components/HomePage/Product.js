import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { styles } from '../../utils'

/**
 * functional react component for Product menu
 * @function
 * @param {object} product - contenful data 
 * @returns {JSX.Element} - react component
 * @useIn - ./Menu.js
 */
function Product({ product }) {
  return (
    <Wrapper>
      <Img fixed={product.image.fixed} className="img" />
      <div className="text">
        <div className="product-content">
          <h3 className="name">{product.title}</h3>
          <h3 className="price">{product.price}$</h3>
        </div>
        <p className="info">{product.ingridient}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
  .img{
    border-radius: 0.5rem;
  }
  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  h3{
    color: ${styles.colors.mainYellow};
    margin-top:0.3rem;
    margin-bottom: 0;
  }
  .info{
    margin-top:0.2rem;
    word-spacing: 0.2rem;
    text-transform: lowercase;
  }
`

Product.propTypes = {
 product: PropTypes.object.isRequired
}

export default Product