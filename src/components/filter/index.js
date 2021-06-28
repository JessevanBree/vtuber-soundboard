import React from 'react'
import * as Styled from './filter-styles' 

const channels = [
  {
    name: 'Moco',
    file: 'moco.jpg'
  },
  {
    name: 'Usada Pekora',
    file: 'pekora.jpg'
  }
]

function Filter() {
  return (
    <>
      <Styled.FilterHeader>Filter</Styled.FilterHeader>
      <Styled.FilterContainer>
        { channels.map((channel, i) => <Styled.FilterBlock key={`channel.name_${i}`} file={channel.file}>
          <Styled.FilterTitle>{channel.name}</Styled.FilterTitle>
        </Styled.FilterBlock>)}
      </Styled.FilterContainer>
    </>
  )
}

export default Filter
