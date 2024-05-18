import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import { BsGithub, BsWhatsapp } from 'react-icons/bs'
import { CgInstagram } from 'react-icons/cg'
import { CiLinkedin } from 'react-icons/ci'

const Footer = () => {
  return (
    <footer className='border-t-2 pt-4 border-gray-400'>
        <div className='flex justify-between'>
            <div>
            <div className='border p-3 inline-block'>
                <h1>Borhan Alizadeh</h1>
            </div>
            <div className='mt-3'>
                <p className='text-gray-400'><BiCopyright className='inline-block'/> Designed By Borhan Alizadeh</p>
            </div>
            </div>
            <div>
                <div className='flex justify-between space-x-4 p-3'><p>Home</p><p>About</p><p>Works</p></div>
                <div className='flex justify-around mt-3'><CgInstagram/><BsWhatsapp/><CiLinkedin/><BsGithub/></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer