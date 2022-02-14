import styled from 'styled-components'
import backgroundImage from './assets/solen-feyissa-rK2bkFf6KJ8-unsplash.jpg'
import nameImage from './assets/Untitled_Artwork.png'

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
`

export default Jumbotron
