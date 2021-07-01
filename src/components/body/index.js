import React, {Component} from 'react'
import { withTheme } from 'styled-components'

import Sounds from '../sounds'
import Filter from '../filter'
import Circle from '../circle'
import * as Styled from './body-styles'

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
    if (prevSound.name < nextSound.name ) return -1
    if (prevSound.name > nextSound.name ) return 1
    return 0
  }

  render() {
    const { t, theme:{ colors } } = this.props
    const filteredList = SoundList.sort(this.compareChannels).filter(sound => sound.source.channel.includes(this.state.selectedChannel))

    return (
      <Styled.BodyContainer>
        <Filter 
          changeFilter={this.changeFilter}
          selectedChannel={this.state.selectedChannel}
        />
        <h1>{t('title')}</h1>
        <Sounds sounds={filteredList} />
        <Circle width={135} height={155} bgColor={colors.grey} bottom="15px" right="85px" />

        <Circle width={50} height={65} bgColor={colors.grey} bottom="135px" right="230px" rotation="-25deg" />
        <Circle width={50} height={75} bgColor={colors.grey} bottom="185px" right="165px" rotation="-10deg" />
        <Circle width={50} height={75} bgColor={colors.grey} bottom="185px" right="95px" rotation="10deg" />
        <Circle width={50} height={65} bgColor={colors.grey} bottom="135px" right="20px" rotation="25deg"/>

      </Styled.BodyContainer>
    )
  }
}

export default withTheme(Body)

