import React, { FC } from 'react'
import { Ichildren } from '../global'
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