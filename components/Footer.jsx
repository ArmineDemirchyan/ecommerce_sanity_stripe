import Link from 'next/link'
import React from 'react'
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 .ARM Headphones All rights reserved</p>
      <p className="icons">
        <Link href="https://github.com/ArmineDemirchyan" target="_blank"><AiFillGithub/></Link>
        <Link href="https://www.linkedin.com/in/armine-demirchyan/" target="_blank"><AiFillLinkedin/></Link>
        
      </p>
    </div>
  )
}

export default Footer