import React, { FC } from 'react'
import { Ichildren } from '../Types/global'
import { ConfigProvider } from 'antd'

const AntdConfigProvider:FC<Ichildren> = ({children}) => {
  return (
    <ConfigProvider
     theme={{
        token:{fontFamily:'morraba'}
     }}
    >
        {children}
    </ConfigProvider>
  )
}

export default AntdConfigProvider