'use client'
import React, { FC, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import LangSwitch from '../../UI/LangSwitch/LangSwitch';
import { useWindowSize } from 'usehooks-ts';
import MobileNavMenu from './MobileNavMenu';
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import SkillsSlider from 'Components/SkillsSlider/SkillsSlider';
import useCuWindowSize from 'Core/Hooks/useCuWindowSize';
import Image from 'next/image';
import AlzLogo from 'Assets/Images/alzLogo.png'
interface Iheader {
   homeText:string,
   aboutText:string,
   works:string
}

const Header:FC<Iheader> = ({homeText,aboutText,works}) => {
    const {windowSize}=useCuWindowSize();
   const [MobileNavStatus, setMobileNavStatus] = useState(false);
   
  return (
   <>
    <header className='p-4 md:p-8'>
        <div className={`grid ${windowSize.width>1100?'grid-cols-3':'grid-cols-2'}`}>
            <div className='text-left mt-0'>
               <h1 className='text-lg md:text-3xl font-bold'>Borhan Alizadeh</h1> 
            </div>
            {windowSize.width>1100&&<div className='mt-2 flex justify-evenly'>
               <p>{homeText}</p><p>{aboutText}</p><p>{works}</p><p>Experiences</p><p>Blog</p>
            </div>}
            {windowSize.width>1100?<div className='text-right flex justify-end gap-5'>
               <LangSwitch/>
               <a target='_blank' href="https://github.com/borhanalz"><FaGithub size={40} className='inline-block'/></a> 
            </div>:
            <div className='text-right'>
               <HiOutlineBars3CenterLeft onClick={()=>setMobileNavStatus(true)} className='border inline-block p-1 rounded-lg' size={35}/>
            </div>
            }
        </div>
    </header>
    <MobileNavMenu setMenuStatus={setMobileNavStatus} menuStatus={MobileNavStatus} aboutText={aboutText} homeText={homeText} works={works}/>
   </>
  )
}

export default Header