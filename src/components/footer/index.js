import React from 'react'
import * as Styled from './footer-styles' 

function Footer({t}) {
  return (
    <Styled.FooterContainer>
      <Styled.FooterText>
        {t('disclaimer')}
      </Styled.FooterText>
    </Styled.FooterContainer>
  )
}

export default Footer
