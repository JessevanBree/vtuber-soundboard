import styled from 'styled-components'
import Filters from '../../data/filters.json'

export const FilterHeader = styled.h2`
  margin: 15px 0px 0px;
`

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 15px;
  padding-bottom: 10px;
  height: 100px;
  z-index: 1;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`

export const FilterBlock = styled.div`
  display: flex;
  height: 80px;
  width: 80px;
  margin: 5px;
  ${({ selectedChannel, filterType }) =>
    `filter: grayscale(${selectedChannel === filterType || selectedChannel === Filters.channels.ALL ? '0' : '1'});`
  }
  border-radius: 75px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  background-image: url(${props => `/images/${props.img}`});
  background-size: contain;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(1px 1px 10px ${({ theme }) => theme.colors.red});
  }
`

export const FilterTitle = styled.h4`
  margin: 0px;
`
