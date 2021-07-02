import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Styled from './header-styles'

function Header({ t }) {
  const router = useRouter()
  return (
    <Styled.HeaderContainer>
      <Link href='/' locale={router.locale === 'en' ? 'jp' : 'en'}> 
        <Styled.LanguageFlags src={`/images/${router.locale === 'en' ? 'jp' : 'en'}.png`} />
      </Link>
      <Styled.HeaderTitle>
        {t('title')}
      </Styled.HeaderTitle>
    </Styled.HeaderContainer>
  )
}

export default Header
