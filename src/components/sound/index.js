import React, { Component } from 'react'
import { withTranslation } from 'next-i18next'
import * as Styled from './sound-styles'

class Sound extends Component {
  state = {
    duration: null,
    playing: false
  }

  componentDidMount() {
    if (process.browser) {
      this.audio = new Audio(`/sounds/${this.props.name}`)

      this.audio.onloadedmetadata = () => {
        this.setState({duration: Math.round(this.audio.duration * 10) / 10 })
      }
      this.audio.onended = () => {
        this.setState({ playing: false })
      }
    }
  }

  playAudio = () => {
    if (!this.audio) return;
    if(this.state.playing) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.setState({ playing: false })
    } else {
      this.audio.play()
      this.setState({ playing: true })
    }
  }

  render() {
    const { id, source, t } = this.props
    const { duration, playing } = this.state

    return (
      <>
        <Styled.SoundContainer id={id} onClick={this.playAudio}>
          <Styled.SoundChannel>
            <Styled.SoundChannelImage src={`/images/${source.img || 'yt.svg'}`} alt="channel image" />
            <Styled.SoundSourceText
              onClick={(e) => { e.stopPropagation() }}
              href={source.url || "#"}
              target={source.url ? "_blank" : "_self"}
            >
              {source.url && t('source')}
            </Styled.SoundSourceText>
          </Styled.SoundChannel>
          <Styled.SoundTextContainer>
            <Styled.SoundChannelName>{t(`sounds:channels:${source.channel}`)}</Styled.SoundChannelName>
            <Styled.SoundTitle>{t(`sounds:titles:${id}`)}</Styled.SoundTitle>
            {duration && <Styled.SoundChannelDuration>{t('sounds:seconds', {seconds: duration})}</Styled.SoundChannelDuration>}
          </Styled.SoundTextContainer>
          {
            playing ? <Styled.SoundIsPlayingIcon src={`/images/stop.svg`} alt="stop icon"/> : <Styled.SoundIsPlayingIcon src={`/images/play.svg`} alt="play icon"/>
          }
        </Styled.SoundContainer>
      </>
    )
  }
}

export default withTranslation()(Sound)