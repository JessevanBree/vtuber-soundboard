import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
  max-height: 100px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightblue};
  background-position: center;
  background-repeat: no-repeat;
`

export const HeaderTitle = styled.h1`

`
