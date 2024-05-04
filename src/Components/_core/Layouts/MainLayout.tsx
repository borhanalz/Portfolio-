import { Ichildren } from 'Core/Types/global'
import React, { FC } from 'react'
import Container from './Container/Container'
import Header from './Header/Header'
import { useTranslations } from 'next-intl'

const MainLayout:FC<Ichildren> = ({children}) => {
    const t = useTranslations('Header');
  return (
    <>
    <Header homeText={t('Home')} aboutText={t('About')} works={t('Works')}/>
    <Container>
        {children}
    </Container>
    </>
  )
}

export default MainLayout