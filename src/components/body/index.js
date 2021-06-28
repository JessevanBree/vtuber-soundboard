import React from 'react'
import * as Styled from './body-styles'
import Sounds from '../sounds'
import SoundList from '../../data/sounds.json'

function Body({ t }) {
  return (
    <Styled.BodyContainer>
      <h1>{t('title')}</h1>
      <Sounds sounds={SoundList} />
    </Styled.BodyContainer>
  )
}

export default Body
