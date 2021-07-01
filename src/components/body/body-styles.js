import styled from 'styled-components'

export const BodyContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.white};
`