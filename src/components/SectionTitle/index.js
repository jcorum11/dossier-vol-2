import React from 'react'
import styled from 'styled-components'
import { colors } from '../../variables'
import { string } from 'prop-types'

const SectionTitle = ({ name = '' }) => {
  return (
    <Title data-testid={name}>{name.toUpperCase()}</Title>
  )
}

const Title = styled.h1`
margin: 0;
text-align: center;
font-size: 10rem;
color: ${colors.pink};
background-color: ${colors.blue};
letter-spacing: 1rem;
scroll-snap-align: start;
@media screen and (max-width: 786px) {
  font-size: 2rem;
}
`

SectionTitle.propTypes = {
  name: string
}

export default SectionTitle
