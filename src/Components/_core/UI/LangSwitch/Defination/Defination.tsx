'use client'
import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';

const Defination = () => {
    useGSAP(()=>{
        gsap.from('.definationDiv', { duration: 1, x: 200, opacity: 0.5 });
    })
  return (
    <div className="definationDiv font-extrabold text-2xl lg:text-7xl space-y-10 my-32">
    <h1 className="text-customColors-primaryTwo">Hello, im Borhan Alizadeh</h1>
    <h2>Front-End Developer Based In Iran</h2>
  </div>
  )
}

export default Defination