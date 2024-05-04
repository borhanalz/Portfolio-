import { Ichildren } from 'Core/Types/global'
import React, { FC } from 'react'

const Container:FC<Ichildren> = ({children}) => {
  return (
    <div className='container mx-auto'>
        {children}
    </div>
  )
}

export default Container