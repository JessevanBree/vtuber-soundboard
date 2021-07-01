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
  margin-top: 10px;
  height: 100px;
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
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 75px;
  background-image: url(${props => `/images/${props.img}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(1px 1px 5px black);
  }
`

export const FilterTitle = styled.h4`
  margin: 0px;
`
