import React, { Component } from 'react'
import { withTranslation } from 'next-i18next'

import * as Styled from './sound-styles'

class Sound extends Component {
  constructor(props) {
    super(props)
    if (process.browser) {
      this.audio = new Audio(`/sounds/${this.props.name}`)
    }
  }


  playAudio = () => {
    this.audio && this.audio.play()
  }

  render() {
    const { id, source } = this.props
    const { t } = this.props

    return (
      <>
        <Styled.SoundContainer id={id} onClick={this.playAudio}>
          {/* {source.channel && (<a href={source.channel} target="_blank">{source.channel}</a>)} */}
          <Styled.SoundChannel href={source.url || "#"} target="_blank" >
            <Styled.SoundChannelImage src={`/images/${source.img || 'yt.svg'}`} alt="channel image" />
            <Styled.SoundSourceText onClick={(e) => { e.stopPropagation(); }}>{t('source')}</Styled.SoundSourceText>
          </Styled.SoundChannel>
          <Styled.SoundTextContainer>
            <Styled.SoundChannelTitle>{t(`sounds:channels:${source.channel}`)}</Styled.SoundChannelTitle>
            <Styled.SoundTitle>{t(`sounds:titles:${id}`)}</Styled.SoundTitle>
            {/* {source.url && (<a href={source.url} target="_blank">Source</a>)} */}
          </Styled.SoundTextContainer>
        </Styled.SoundContainer>
      </>
    )
  }
}

export default withTranslation()(Sound)