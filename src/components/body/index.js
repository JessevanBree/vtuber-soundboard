import React, {Component} from 'react'
import { withTranslation } from 'next-i18next'
import * as Styled from './body-styles'

import Sounds from '../sounds'
import Filter from '../filter'

import SoundList from '../../data/sounds.json'
import Filters from '../../data/filters.json'

class Body extends Component {
  state = {
    selectedChannel: Filters.channels.ALL
  }

  changeFilter = (filter) => {
    this.setState({
      selectedChannel: Filters.channels[filter] || Filters.channels.ALL
    })
  }

  compareChannels = ( prevSound, nextSound ) => {
    const prevSoundTranslation = this.props.t(`sounds:channels:${prevSound.source.channel}`)
    const nextSoundTranslation = this.props.t(`sounds:channels:${nextSound.source.channel}`)
    if (prevSoundTranslation < nextSoundTranslation ) return -1
    if (prevSoundTranslation > nextSoundTranslation ) return 1
    return 0
  }

  render() {
    const { t } = this.props
    const filteredList = SoundList.sort(this.compareChannels).filter(sound => sound.source.channel.includes(this.state.selectedChannel))

    return (
      <Styled.BodyContainer>
        <Filter changeFilter={this.changeFilter}/>
        <h1>{t('title')}</h1>
        <Sounds sounds={filteredList} />
      </Styled.BodyContainer>
    )
  }
}

export default Body

