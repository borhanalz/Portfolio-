import { Divider, Drawer } from 'antd'
import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

interface IMobileNavMenu{
  homeText:string,
  aboutText:string,
  works:string,
  menuStatus:boolean,
  setMenuStatus:(type:boolean)=>void
}
const headerStyle:any = {
  header: { backgroundColor: '#221F1F' }
}
const MobileNavMenu:FC<IMobileNavMenu> = ({setMenuStatus,homeText,menuStatus,aboutText,works}) => {
  return (
    <Drawer onClose={()=>setMenuStatus(false)}   style={headerStyle}
    open={menuStatus}>
        <div className='h-full w-full bg-primaryOne text-right space-y-5 px-4 text-lg'>
          <p>{homeText}</p><p>{aboutText}</p><p>{works}</p>
        </div>
    </Drawer>
  )
}

export default MobileNavMenu