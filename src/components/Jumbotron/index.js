import styled from 'styled-components'
import image from './IMG_0379.jpg'

function Hero() {
  return (
    <Container>
      <Jumbotron></Jumbotron>
    </Container>
  )
}

const Jumbotron = styled.div`
background-image: url(${image});
background-size: cover;
height: 50vh;
background-position: center 30%;
border-radius: 1rem;
margin: 0 0 3rem 0;
box-shadow: 5px 5px 3px black;
`

const Container = styled.div`
grid-column: 3;
`

export default Hero
