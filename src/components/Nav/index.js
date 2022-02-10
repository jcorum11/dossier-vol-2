import { useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedTab } from '../../store/navigationSlice'
import styled from 'styled-components'
import { IoMenu } from 'react-icons/io5'
import { colors } from '../../variables'

const Nav = () => {
  const dispatch = useDispatch()
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuClick = () => {
    if (!menuOpen) {
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
    }
  }
  return (
    <Navbar>
      <IoMenu style={menuIcon} onClick={handleMenuClick} />
      <div>
        {menuOpen && (
          <Fragment>
            <Button data-testid='about' onClick={() => dispatch(setSelectedTab('about'))}>About Me</Button>
            <Button data-testid='projects' onClick={() => dispatch(setSelectedTab('projects'))}>Projects</Button>
            <Button data-testid='resume' onClick={() => dispatch(setSelectedTab('resume'))}>Resume</Button>
            <Button data-testid='contact' onClick={() => dispatch(setSelectedTab('contact'))}>Contact Me</Button>
          </Fragment>
        )}
      </div>
    </Navbar>
  )
}

const Navbar = styled.nav`
display: flex;
justify-content: space-between;
background-color: ${colors.blue};
`

const Button = styled.button`
padding: 1rem;
margin: 0.5rem 0 0.5rem 1rem;
`

const menuIcon = {
  color: `${colors.pink}`,
  fontSize: '4rem',
  cursor: 'pointer',
}

export default Nav
