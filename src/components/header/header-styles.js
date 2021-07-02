import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
  height: 100px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightblue};
  background-position: center;
  background-repeat: no-repeat;
`

export const HeaderTitle = styled.h1`

`

export const LanguageFlags = styled.img`
  position: absolute;
  left: 25px;
  width: 50px;
  height: 33px;

  &:hover {
    filter: drop-shadow(1px 1px 10px ${({ theme }) => theme.colors.white});
    width: 52px;
    height: 34px;
  }
`
