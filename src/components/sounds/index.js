import React from 'react'
import * as Styled from './sounds-styles'
import Sound from '../sound'
import { useTranslation } from 'next-i18next'

export default function Sounds({ sounds }) {
  const { t } = useTranslation()
  let categorizedSounds = {}
  if (sounds) {
    sounds.forEach(sound => {
      if (categorizedSounds[sound.source.channel]) {
        categorizedSounds[sound.source.channel].push({ ...sound })
      } else {
        categorizedSounds[sound.source.channel] = [{ ...sound }]
      }
    })
  }
  const csKeys = Object.keys(categorizedSounds)

  return categorizedSounds ? (
    <Styled.ChannelsContainer>
      {
        csKeys.map((channel) => {
          const sounds = categorizedSounds[channel]
          return (
            <Styled.ChannelContainer key={`channel_sounds_${channel}`}>
              {csKeys.length > 1 && <Styled.ChannelTitle>{t(`sounds:channels:${channel}`)}</Styled.ChannelTitle>}
              <Styled.SoundsContainer key={`channel_sounds_${channel}`}>
                {sounds.map(sound => <Sound key={`sound_${sound.id}`} {...sound} />)}
              </Styled.SoundsContainer>
            </Styled.ChannelContainer>
          )
        })
      }
    </Styled.ChannelsContainer>
  ) : (
    <p>{t('noResults')}</p>
  )
}
