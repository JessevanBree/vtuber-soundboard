import styled from 'styled-components'

export const BodyContainer = styled.div`
  z-index: 1;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 25px 50px;

  @media (max-width:961px)  { 
    margin: 25px 0px;
  }
`

export const LanguageFlags = styled.img`
  position: absolute;
  top: 70px;
  width: 50px;
  height: 33px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.grey};

  &:hover {
    filter: drop-shadow(1px 1px 10px ${({ theme }) => theme.colors.white});
    width: 54px;
    height: 35px;
  }

  @media (max-width:961px)  { 
    top: 70px;
  }
`
