'use client'
import { Button, Input, Modal } from 'antd'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import path from 'path'
import React from 'react'

const CooperationModal = () => {
const searchParam = useSearchParams();
const modalStatus = searchParam.get('modal');

  return (
    <Modal onCancel={()=>{
        window.location.href=window.location.pathname
    }} open={Boolean(modalStatus)} footer={null}>
        <div className='space-y-5 mt-10'>
        <Input className='h-10' placeholder='Cooperation Type'/>
        <Input className='h-10' placeholder='Email'/>
        <Input className='h-10' placeholder='PhoneNumber'/>
        </div>
<div className='text-center mt-10'>
<Button>Send</Button>
</div>
    </Modal>
  )
}

export default CooperationModal