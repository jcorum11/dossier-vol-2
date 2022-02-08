import styled from 'styled-components'
import backgroundImage from './solen-feyissa-rK2bkFf6KJ8-unsplash.jpg'
import nameImage from './Untitled_Artwork.png'

function Jumbotron() {
  return (
    <Container>
      <Hero><Name></Name></Hero>
    </Container>
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

const Container = styled.div`
grid-column: 3;
`

const Name = styled.div`
background-image: url(${nameImage});
background-size: cover;
background-position: center;
height: 100vh;
width: 130vw;
position: relative;
`

export default Jumbotron
