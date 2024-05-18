'use client'
import { useGSAP } from '@gsap/react';
import { Divider } from 'antd'
import React, { useRef } from 'react'
import {gsap} from 'gsap'

const AboutMe = () => {
  return (
    <div className='mt-10'>
         <Divider style={{height:'60px'}} orientation="left" orientationMargin="0">
      <p className='text-[#A6BBCC] text-[50px] class'>About Me</p>
    </Divider>
    <div className='px-10 text-base mt-10'>

    <p style={{wordSpacing:'3px'}}>
        
        Hey, I'm Borhan Alizadeh, and I've been navigating the programming realm for three years now.
        
        You'll often find me knee-deep in React.js and Next.js, meticulously ensuring that every pixel is in its place and every function runs seamlessly.
        
        As a Front-End Developer, I'm all about crafting user experiences that not only dazzle but also empower. I thrive on optimizing user interaction and refining interfaces to perfection.
        
        My knack for leveraging these technologies effectively enables me to whip up web applications that are not just robust and scalable but also visually captivating.
        
        Now, let's talk tech. I've got a diverse arsenal of front-end technologies under my belt, from the basics like HTML5, CSS3, and JavaScript/TypeScript, to the more intricate tools like ReduxToolkit, React Query, React-Router, and Axios for managing both client-side and server-side states. When it comes to UI design and data visualization, I'm fluent in Tailwind, React Bootstrap, MUI, and AntDesign. And let's not forget about those charting libraries – Recharts and HighChart? Yep, I've got those covered too.
        
        But it doesn't stop there. I've dabbled in a slew of other pertinent technologies beyond the realm of front-end development.
        
        I'm all about diving headfirst into projects that value innovation, user-centric design, and efficient engineering practices. It's where I feel most at home, using my skills and experience to make meaningful contributions.
        
        What sets me apart? It's my holistic perspective. I understand how front-end components fit into the bigger picture of web development, allowing me to tackle problems with clarity and insight.
            </p>
    </div>
    </div>
  )
}

export default AboutMe