import React from 'react'
import * as Styled from './sounds-styles'
import Sound from '../sound'

export default function Sounds({ sounds }) {

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
