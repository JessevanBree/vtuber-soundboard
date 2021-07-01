import React from 'react'
import * as Styled from './filter-styles' 
import Channels from '../../data/channels.json'

function Filter({changeFilter}) {
  return (
    <>
      <Styled.FilterHeader>Filter</Styled.FilterHeader>
      <Styled.FilterContainer>
        { Channels.map((channel, i) => <Styled.FilterBlock 
          key={`channel.name_${i}`} 
          img={channel.img} 
          onClick={() => changeFilter(channel.filterType)}
        >
          <Styled.FilterTitle>{channel.name}</Styled.FilterTitle>
        </Styled.FilterBlock>)}
      </Styled.FilterContainer>
    </>
  )
}

export default Filter
