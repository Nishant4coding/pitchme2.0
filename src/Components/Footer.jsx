import React from 'react'
import red from '../Assets/red-logo.svg'
import pitchme from '../Assets/pitchme-b.png'
import twitter from '../Assets/Twitter.svg'
import insta from '../Assets/Instagram.svg'
import linkedin from '../Assets/linkedin.svg'
import mail from '../Assets/mail.svg'

function Footer() {
  return (
    <div className='flex flex-col items-center'>
      <img src={red} alt="" className='w-32 mb-5' />
      <div className=" text-center text-white text-3xl font-semibold font-Roboto">Contact Us</div>
      <div className='flex flex-row gap-10 mt-10 mb-5' >
        <img src={twitter} alt="" />
        <img src={insta} alt="" />
        <img src={linkedin} alt="" />
        <img src={mail} alt="" />
      </div>
      <img src={pitchme} alt="" />
    </div>
  )
}

export default Footer
