import React from 'react'
import PropTypes from 'prop-types'

function Tweet({
  title, desc, imageURL,
  Container, Title, Description, Image
}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      <Image src={imageURL}></Image>
    </Container>
  )
}

Tweet.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  Container: PropTypes.instanceOf(Element).isRequired,
  Title: PropTypes.instanceOf(Element).isRequired,
  Description: PropTypes.instanceOf(Element).isRequired,
  Image: PropTypes.instanceOf(Element).isRequired
}

export default Tweet