import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { CiMail } from "react-icons/ci";
const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact'>
    <h1>CONTACT ME</h1>
    <div className="contact-icon" 
    data-aos="zoom-in"
    data-aos-duration="1000"
    >
      <a href="#" className="items">
        <FaInstagram className='icons'/>
      </a>
      <a href="https://github.com/Sanjana-Ahlawat09"  className="items">
        <FaGithub className='icons'/>
      </a>
      <a href="https://www.linkedin.com/in/sanjana-ahlawat-16609a271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
       className="items">
        <CiLinkedin className='icons'/>
      </a>
      <a  href="https://leetcode.com/u/sanju_ahlawat/"  className="items">
        <SiLeetcode className='icons'/>
      </a>
      <a href="https://mail.google.com/mail/u/0/#inbox"  className="items">
        <CiMail className='icons'/>
      </a>
    </div>
    </div>
 </>
  )
}

export default Contact
