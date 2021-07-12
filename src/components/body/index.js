import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { withTheme } from 'styled-components'

import Sounds from '../sounds'
import Filter from '../filter'
import Paws from './paws'
import * as Styled from './body-styles'

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

  render() {
    const { router, theme: { colors } } = this.props
    const { selectedChannel } = this.state
    return (
      <Styled.BodyContainer>
        <Filter
          changeFilter={this.changeFilter}
          selectedChannel={selectedChannel}
        />
        <Sounds selectedChannel={selectedChannel} />
        <Paws colors={colors} />
        <Link href='/' locale={router.locale === 'en' ? 'jp' : 'en'} passHref>
          <Styled.LanguageFlags src={`/images/${router.locale === 'en' ? 'jp' : 'en'}.webp`} />
        </Link>
      </Styled.BodyContainer>
    )
  }
}

export default withRouter(withTheme(Body))

