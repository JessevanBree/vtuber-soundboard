import React from 'react'
import * as Styled from './filter-styles'
import { CHANNEL_FILTERS } from '../../data/channels'
import { useTranslation } from 'next-i18next'

function Filter({ changeFilter, selectedChannel }) {
  const { t } = useTranslation()
  
  return (
    <>
      <Styled.FiltersContainer>
        {CHANNEL_FILTERS.map((channel, i) => (
          <Styled.FilterContainer onClick={() => changeFilter(channel.filterType)} key={`channel.name_${i}`}>
            <Styled.FilterBlock
              img={channel.img}
              filterType={channel.filterType}
              selectedChannel={selectedChannel}
            >
            </Styled.FilterBlock>
            <Styled.FilterTitle>{t(`sounds:channels:${channel.filterType}`)}</Styled.FilterTitle>
          </Styled.FilterContainer>)
        )}
      </Styled.FiltersContainer>
    </>
  )
}

export default Filter
