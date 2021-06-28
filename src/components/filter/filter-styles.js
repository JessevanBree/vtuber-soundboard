import styled from 'styled-components'

export const FilterHeader = styled.h2`
  margin: 15px 0px 0px;
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 10px;
  height: 100px;

  border-radius: 5px;
  border: 2px solid black;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
`

export const FilterBlock = styled.div`
  margin: 5px;
  height: 80px;
  width: 80px;
  background-image: url(${props => `/images/${props.file}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

export const FilterTitle = styled.h4`

`
