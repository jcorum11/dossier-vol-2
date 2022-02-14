import { useState, Fragment } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { IoMenu } from 'react-icons/io5'
import { FaTimes } from 'react-icons/fa'
import { colors } from '../../variables'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(undefined)
  const [mobileButtonVisible, setMobileButtonVisible] = useState(false)
  let timeoutId
  const delayedHideButtons = () => {
    setMenuOpen(false)
    timeoutId = setTimeout(() => setMobileButtonVisible(false), 1000)
  }
  const showButtons = () => {
    setMenuOpen(true)
    setMobileButtonVisible(true)
  }
  return (
    <Navbar slideDown={menuOpen}>
      {!menuOpen && <StyledIoMenu data-testid='nav-button-hamburger' onClick={() => showButtons()} />}
      {menuOpen && <StyledFaTimes data-testid='nav-button-times' onClick={() => delayedHideButtons()} />}
      <Container >
        <ButtonContainer desktopButtonVisible={menuOpen} mobileButtonVisible={mobileButtonVisible}><Button href='#about'>About Me</Button></ButtonContainer>
        <ButtonContainer desktopButtonVisible={menuOpen} mobileButtonVisible={mobileButtonVisible}><Button href='#projects'>Projects</Button></ButtonContainer>
        <ButtonContainer desktopButtonVisible={menuOpen} mobileButtonVisible={mobileButtonVisible}><Button href='#resume'>Resume</Button></ButtonContainer>
        <ButtonContainer desktopButtonVisible={menuOpen} mobileButtonVisible={mobileButtonVisible}><Button href='#contact'>Contact Me</Button></ButtonContainer>
      </Container>
    </Navbar >
  )
}

const slideDown = keyframes`
from {
  height: 5rem;
}
to {
  height: 22.5rem;
}
`

const slideUp = keyframes`
from {
  height: 22.5rem;
}
to {
  height: 5rem;
}
`

const slideDownAnimation = css`
animation: 1s ${slideDown};
`

const slideUpAnimation = css`
animation: 1s ${slideUp};
`

const Navbar = styled.nav`
display: grid;
grid-template-columns: repeat(3, 1fr);
background-color: ${colors.blue};
position: relative;
z-index: 1;
height: 11rem;
overflow: hidden;
@media screen and (max-width: 768px) {
  display: block;
  ${props => !props.slideDown ? 'height: 5rem;' : 'height: 22.5rem;'}
  ${props => !props.slideDown && props.slideDown !== undefined && slideUpAnimation}
  ${props => props.slideDown && slideDownAnimation}
}
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
@media screen and (max-width: 768px) {
  width: 80%;
  &:active{
    top: 0;
    box-shadow: none;
  }
  &:hover {
    top: 0rem;
    box-shadow: none;
  }
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
@media screen and (max-width: 768px) {
  font-size: 5rem;
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
@media screen and (max-width: 768px) {
  font-size: 5rem;
}
`

const Container = styled.div`
display: flex;
justify-content: space-around;
@media screen and (max-width: 768px) {
  display: block;
}
`

const ButtonContainer = styled.div`
align-items: center;
display: ${props => !props.desktopButtonVisible ? 'none' : 'flex'};
@media screen and (max-width: 768px) {
  display: ${props => !props.mobileButtonVisible ? 'none' : 'flex'};
}
`

export default Nav
