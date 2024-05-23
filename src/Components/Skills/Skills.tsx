import { Divider } from 'antd'
import React from 'react'

const Skills = () => {
  return (
    <div className="my-20">
    <p className="text-3xl text-center opacity-45 md:text-[40px] text-[#A6BBCC]">
      Skills
    </p>
    <div className='text-2xl text-gray-300 grid mt-10 grid-cols-3'>
      <p className='text-right mx-2'>React.js</p><Divider className='bg-customColors-primaryTwo'/><p className='mx-2'>JavaScript</p>
      <p className='text-right mx-2'>Redux</p><Divider className='bg-customColors-primaryTwo'/><p className='mx-2'>ReactQuery</p>
      <p className='text-right mx-2'>Bootstrap</p><Divider className='bg-customColors-primaryTwo'/><p className='mx-2'>Tailwind</p>
      <p className='text-right mx-2'>Git</p><Divider className='bg-customColors-primaryTwo'/><p className='mx-2'>GitHub</p>
      <p className='text-right mx-2'>TypeScript</p><Divider className='bg-customColors-primaryTwo'/><p className='mx-2'>JavaScript</p>
      <p className='text-right mx-2'>AntDesign</p><Divider className='bg-customColors-primaryTwo'/><p className='mx-2'>Material UI</p>
      <p className='text-right mx-2'>Jquery</p><Divider className='bg-customColors-primaryTwo'/><p className='mx-2'>HTML</p>
      <p className='text-right mx-2'>Sass</p><Divider className='bg-customColors-primaryTwo'/><p className='mx-2'>Css</p>

    </div>
  </div>
  )
}

export default Skills