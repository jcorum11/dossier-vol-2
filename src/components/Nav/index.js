import { useState, Fragment } from 'react'
import styled from 'styled-components'
import { IoMenu } from 'react-icons/io5'
import { FaTimes } from 'react-icons/fa'
import { colors } from '../../variables'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Navbar>
      {!menuOpen && <StyledIoMenu onClick={() => setMenuOpen(true)} />}
      {menuOpen && <StyledFaTimes onClick={() => setMenuOpen(false)} />}
      <Container>
        {menuOpen && (
          <Fragment>
            <ButtonContainer><Button data-testid='about' href='#about'>About Me</Button></ButtonContainer>
            <ButtonContainer><Button data-testid='projects' href='#projects'>Projects</Button></ButtonContainer>
            <ButtonContainer><Button data-testid='resume' href='#resume'>Resume</Button></ButtonContainer>
            <ButtonContainer><Button data-testid='contact' href='#contact'>Contact Me</Button></ButtonContainer>
          </Fragment>
        )}
      </Container>
    </Navbar>
  )
}

const Navbar = styled.nav`
display: grid;
grid-template-columns: repeat(3, 1fr);
background-color: ${colors.blue};
position: relative;
z-index: 1;
height: 11rem;
`

const Button = styled.a`
position: relative;
padding: 1rem;
margin: 0.5rem 0 0.5rem 1rem;
text-decoration: none;
color: ${colors.green};
background-color: ${colors.pink};
border-radius: 10px;
&:hover {
  top: -0.5rem;
  box-shadow: 0 0.5rem grey;
}
&:active {
  top: -0.25rem;
  box-shadow: 0 0.25rem grey;
}
`

const StyledIoMenu = styled(IoMenu)`
color: ${colors.pink};
font-size: 11rem;
cursor: pointer;
position: relative;
&:hover {
  top: -0.5rem;
  filter: drop-shadow(0 0.5rem 0 grey);
}
&:active {
  top: -0.25rem;
  filter: drop-shadow(0 0.25rem 0 grey);
}
`

const StyledFaTimes = styled(FaTimes)`
color: ${colors.pink};
font-size: 11rem;
cursor: pointer;
position: relative;
&:hover {
  top: -0.5rem;
  filter: drop-shadow(0 0.5rem 0 grey);
}
&:active {
  top: -0.25rem;
  filter: drop-shadow(0 0.25rem 0 grey);
}
`

const Container = styled.div`
display: flex;
justify-content: space-around;
`

const ButtonContainer = styled.div`
display: flex;
align-items: center;
`

export default Nav
