import { useDispatch } from 'react-redux'
import { setSelectedTab } from '../../store/navigationSlice'
import styled from 'styled-components'

const Nav = () => {
  const dispatch = useDispatch()
  return (
    <Navbar>
      <LogoButton onClick={() => dispatch(setSelectedTab('about'))}>Jacob Corum</LogoButton>
      <div>
        <Button data-testid='about' onClick={() => dispatch(setSelectedTab('about'))}>About Me</Button>
        <Button data-testid='projects' onClick={() => dispatch(setSelectedTab('projects'))}>Projects</Button>
        <Button data-testid='resume' onClick={() => dispatch(setSelectedTab('resume'))}>Resume</Button>
        <Button data-testid='contact' onClick={() => dispatch(setSelectedTab('contact'))}>Contact Me</Button>
      </div>
    </Navbar>
  );
}

const Navbar = styled.nav`
display: flex;
justify-content: space-between;
`

const Button = styled.button`
padding: 1rem;
margin: 0.5rem 0 0.5rem 1rem;
`

const LogoButton = styled(Button)`
margin-left: 0;
`

export default Nav;
