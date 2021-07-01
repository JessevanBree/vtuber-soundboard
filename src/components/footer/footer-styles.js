import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightblue};
  background-position: center;
  background-repeat: no-repeat;
`

export const FooterText = styled.p`

`
