import React, { Component } from 'react'
import * as Styled from './sound-styles'

export default class Sound extends Component {
  constructor(props) {
    super(props)
    if(process.browser) {
      this.audio = new Audio(`/sounds/${this.props.name}`)
    }
  }
  
  
  playAudio = () => {
    this.audio && this.audio.play()
  }

  render() {
    const { id, source } = this.props

    return (
      <>
        <Styled.SoundContainer id={id} onClick={this.playAudio}>
          <Styled.SoundTitle>{id}</Styled.SoundTitle>
        </Styled.SoundContainer>
        {/* {source.url && <a href={source.url} target="_blank">Source</a>} */}
      </>
    )
  }
}
