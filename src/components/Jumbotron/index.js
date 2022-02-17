import React from 'react'
import styled from 'styled-components'
import backgroundImage from './assets/solen-feyissa-rK2bkFf6KJ8-unsplash.webp'
import nameImage from './assets/Untitled_Artwork.webp'

function Jumbotron() {
  return (
    <Hero><Name></Name></Hero>
  )
}

const Hero = styled.div`
width: 100vw;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
&::before {
  content: '';
  background-image: url(${backgroundImage});
  filter: grayscale(100%);
  background-size: cover;
  height: 100%;
  width: 100%;
  background-position: center;
  position: absolute;
}
`

const Name = styled.div`
background-image: url(${nameImage});
background-size: cover;
background-position: center;
height: 100vh;
width: 100vw;
position: relative;
@media screen and (max-width: 768px), (min-width: 1020px) and (max-width: 1440px) {
  height: 40vh;
}
@media screen and (min-width: 1439px) {
  background-position: center top 30%;
}
`

export default Jumbotron
