import styled from 'styled-components'

export const BodyContainer = styled.div`
  z-index: 1;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width:961px)  { 
    margin: 0px 50px;
  }
`