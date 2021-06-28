import React, {Component} from 'react'
import * as Styled from './body-styles'
import Sounds from '../sounds'
import Filter from '../filter'
import SoundList from '../../data/sounds.json'

const POSSIBLE_FILTERS = {
  ALL: "",
  MOCO: "MOCO",
  PEKORA: "PEKORA"
}

export default class Body extends Component {
  state = {
    selectedFilter: POSSIBLE_FILTERS.ALL
  }

  changeFilter = (filter) => {
    this.setState({
      selectedFilter: POSSIBLE_FILTERS[filter] || POSSIBLE_FILTERS.ALL
    })
  }

  render() {
    const { t } = this.props
    const filteredList = SoundList.filter(sound => sound.source.channel.includes(this.state.selectedFilter))

    return (
      <Styled.BodyContainer>
        <Filter changeFilter={this.changeFilter}/>
        <h1>{t('title')}</h1>
        <Sounds sounds={filteredList} />
      </Styled.BodyContainer>
    )
  }
}

