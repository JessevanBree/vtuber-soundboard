import React from 'react'
import { useTranslation } from 'next-i18next'
import * as Styled from './sounds-styles'
import Sound from '../sound'

export default function index({ sounds }) {
  const { t } = useTranslation('common')

  return sounds ? (
    <Styled.SoundsContainer>
      {
        sounds.map(sound => <Sound key={`sound_${sound.id}`} {...sound}/>)
      }
    </Styled.SoundsContainer>
  ) : (
    <p>ERROR</p>
  )
}
