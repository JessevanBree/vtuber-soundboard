import React from 'react'
import * as Styled from '../header/header-styles' 

function Header({t}) {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderTitle>
        {t('title')}
      </Styled.HeaderTitle>
    </Styled.HeaderContainer>
  )
}

export default Header
