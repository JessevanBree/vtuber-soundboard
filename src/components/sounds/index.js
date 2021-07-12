import React from 'react'
import { useTranslation } from 'next-i18next'
import SoundsPerChannel from '../../data/sounds'
import {CHANNELS} from '../../data/channels'
import * as Styled from './sounds-styles'
import Sound from '../sound'


export default function Sounds({ selectedChannel }) {
  const { t } = useTranslation()
  const channels = CHANNELS.filter(({filterType}) => selectedChannel ? selectedChannel === filterType : true).map((channel) => channel.filterType)

  return SoundsPerChannel ? (
    <Styled.ChannelsContainer>
      {
        channels.map((channel) => {
          const sounds = SoundsPerChannel[channel]
          return (
            <Styled.ChannelContainer key={`channel_sounds_${channel}`}>
              {channels.length > 1 && <Styled.ChannelTitle>{t(`sounds:channels:${channel}`)}</Styled.ChannelTitle>}
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
