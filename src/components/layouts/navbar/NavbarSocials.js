import React, { useState } from 'react'
import styled from 'styled-components'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

import { styles } from '../../../utils'

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 * @useIn - ./
 */
function FileName() {
  const [icons, setIcons] = useState([
    {
      id: 1,
      icon: <FaFacebook className="icon facebook-icon" />,
      path: 'https://www.facebook.com/'
    },
    {
      id: 2,
      icon: <FaInstagram className="icon instagram-icon" />,
      path: 'https://www.instagram.com/?hl=en'
    },
    {
      id: 3,
      icon: <FaTwitter className="icon twitter-icon" />,
      path: 'https://twitter.com/?lang=en'
    }
  ])

  return (
    <Wrapper>
      {
        icons.map(item => <a htef={item.path} key={item.id} target="_blank">{item.icon}</a>)
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .icon{
    font-size: 1.6rem;
    cursor: pointer;
    ${styles.transDefault}
  }
  .icon:hover{
    color: ${styles.colors.mainYellow}
  }
  .facebook-icon{
    color: #3b579b;
  }
  .twitter-icon{
    color: #3ab7f0;
  }
  .instagram-icon{
    color: #da5f53;
  }

  display: none;
  @media(min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`
export default FileName