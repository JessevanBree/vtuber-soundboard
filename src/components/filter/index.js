import React from 'react'
import * as Styled from './filter-styles'
import Channels from '../../data/channels.json'

function Filter({ changeFilter, selectedChannel }) {
  return (
    <>
      <Styled.FiltersContainer>
        {Channels.map((channel, i) => (
          <Styled.FilterContainer onClick={() => changeFilter(channel.filterType)} key={`channel.name_${i}`}>
            <Styled.FilterBlock
              img={channel.img}
              filterType={channel.filterType}
              selectedChannel={selectedChannel}
            >
            </Styled.FilterBlock>
            <Styled.FilterTitle>{channel.name}</Styled.FilterTitle>
          </Styled.FilterContainer>)
        )}
      </Styled.FiltersContainer>
    </>
  )
}

export default Filter
