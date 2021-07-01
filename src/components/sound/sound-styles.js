import styled from 'styled-components'

export const SoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  margin: 5px;
  padding: 10px;
  border-radius: 25px;
  background-color: pink;
  cursor: pointer;
  
  &:hover {
    background-color: hotpink;
  }
`

export const SoundChannelImage = styled.img`
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: white;
  border-radius: 50px;
  border: 1px solid #ff8484;
`

export const SoundChannel = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`

export const SoundTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  flex: 1;
`

export const SoundChannelTitle = styled.h4`
  margin: 0px;
`

export const SoundTitle = styled.h3`
  margin: 0px;
`

export const SoundSourceText = styled.p`
  margin: 0px;
`


  // ${props => props.img && 
  //   `background-image: url('/images/${props.img}');
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   background-size: contain;
  // `};