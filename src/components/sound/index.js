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
    const { id } = this.props

    return (
      <Styled.SoundContainer id={id}>
        <h2>{id}</h2>
        <button onClick={this.playAudio}>click</button>
      </Styled.SoundContainer>
    )
  }
}
