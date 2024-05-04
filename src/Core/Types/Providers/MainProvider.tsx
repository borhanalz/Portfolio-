import React, { FC } from 'react'
import { Ichildren } from '../global'
import AntdConfigProvider from './AntdConfigProvider'

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