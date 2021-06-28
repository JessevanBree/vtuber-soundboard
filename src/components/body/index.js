import React from 'react'
import * as Styled from './body-styles'
import Sounds from '../sounds'
import Filter from '../filter'
import SoundList from '../../data/sounds.json'

function Body({ t }) {
  return (
    <Styled.BodyContainer>
      <Filter />
      <h1>{t('title')}</h1>
      <Sounds sounds={SoundList} />
    </Styled.BodyContainer>
  )
}

export default Body
