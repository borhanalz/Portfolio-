import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { FC, useState } from 'react'
import { FaGithub } from "react-icons/fa";

import { Button, Dropdown} from 'antd';
import type { MenuProps } from 'antd';
import LangSwitch from '../UI/LangSwitch';

const Header = () => {
   const t = useTranslations('Header');
   
  return (
    <header className='p-4'>
        <div className='grid grid-cols-3'>
            <div className='text-left mt-2'>
               <h1 className='text-3xl font-bold'>Borhan Alizadeh</h1> 
            </div>
            <div className='mt-2 flex justify-evenly'>
               <p>{t('Home')}</p><p>{t('About')}</p><p>{t('Works')}</p>
            </div>
            <div className='text-right flex justify-end gap-5'>
               <LangSwitch/>
               <FaGithub size={40} className='inline-block'/> 
            </div>
        </div>
    </header>
  )
}

export default Header