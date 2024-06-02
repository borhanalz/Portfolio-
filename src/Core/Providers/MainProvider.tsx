import React, { FC } from 'react'
import { Ichildren } from '../Types/global'
import AntdConfigProvider from './AntdConfigProvider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainProvider:FC<Ichildren> = ({children}) => {
  return (
    <>
    <AntdConfigProvider>
    {children}
    </AntdConfigProvider>
    </>
  )
}

export default MainProvider