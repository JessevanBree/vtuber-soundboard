import React from 'react'
import * as Styled from './filter-styles' 

const channels = [
  {
    name: 'All',
    img: 'icon.png',
    filterType: "ALL"
  },
  {
    name: 'Moco',
    img: 'moco.jpg',
    filterType: "MOCO"
  },
  {
    name: 'Usada Pekora',
    img: 'pekora.jpg',
    filterType: "PEKORA"
  }
]

function Filter({changeFilter}) {
  return (
    <>
      <Styled.FilterHeader>Filter</Styled.FilterHeader>
      <Styled.FilterContainer>
        { channels.map((channel, i) => <Styled.FilterBlock 
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
