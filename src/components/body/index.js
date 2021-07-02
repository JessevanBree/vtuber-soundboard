import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { withTheme } from 'styled-components'

import Sounds from '../sounds'
import Filter from '../filter'
import Paws from './paws'
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

  compareChannels = (prevSound, nextSound) => {
    if (prevSound.name < nextSound.name) return -1
    if (prevSound.name > nextSound.name) return 1
    return 0
  }

  render() {
    const { t, router, theme: { colors } } = this.props
    const filteredList = SoundList.sort(this.compareChannels).filter(sound => sound.source.channel.includes(this.state.selectedChannel))

    return (
      <Styled.BodyContainer>
        <Filter
          changeFilter={this.changeFilter}
          selectedChannel={this.state.selectedChannel}
        />
        <Sounds sounds={filteredList} />
        {/* <Circle width={155} height={155} bgColor={colors.grey} top="100px" left="85px" radius="5px"/> */}
        <Paws colors={colors} />
        <Link href='/' locale={router.locale === 'en' ? 'jp' : 'en'} passHref>
          <Styled.LanguageFlags src={`/images/${router.locale === 'en' ? 'jp' : 'en'}.png`} />
        </Link>
      </Styled.BodyContainer>
    )
  }
}

export default withRouter(withTheme(Body))

