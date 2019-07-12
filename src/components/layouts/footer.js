import React, { useState } from 'react'
import styled from 'styled-components'

import { styles } from '../../utils'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

/**
 * functional react component for  Footer component
 * @function
 * @returns {JSX.Element} - react component
 * @useIn - ./layout.js
 */
function Footer() {
  const [icons, setIcons] = useState([
    {
      id: 1,
      icon: <FaFacebook className="icon facebook-icon" />,
      path: 'https://www.facebook.com'
    },
    {
      id: 2,
      icon: <FaInstagram className="icon instagram-icon" />,
      path: 'https://www.instagram.com'
    },
    {
      id: 3,
      icon: <FaTwitter className="icon twitter-icon" />,
      path: 'https://www.twitter.com'
    },
  ])

  return (
    <Wrapper>
      <div className="title">eatery</div>
      <div className="icons">
        {icons.map(item => <a href={item.path} key={item.id} target="_blank" rel="noopener noreferrer">{item.icon}</a>)}
      </div>
      <p className="copyright">copyright &copy; 2019 eatery</p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons{
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon{
    color: ${styles.colors.mainWhite};
    font-size: 1.8rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .copyright{
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title{
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem;
    font-size: 1.2rem;
    ${styles.border({ color: `${styles.colors.mainYellow}`})};
  }
`

export default Footer