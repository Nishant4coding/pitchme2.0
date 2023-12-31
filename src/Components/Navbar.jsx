import React from 'react'
import logo from '../Assets/logo.svg'
import ecell from '../Assets/ecell-logo.svg'

function Navbar() {
  return (
    <div className='mb-10'>
      <div className='pl-5 pr-5'>
        <div className='flex flex-row justify-between' >
            <img src={logo} alt="pitchme" className='w-80' />
            <img src={ecell} alt="ecell" className='w-40'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
