import styled from 'styled-components'
import rolodeckBackground from './assets/mick-haupt-OQrZQ80eNM4-unsplash.jpg'
import { colors } from '../../variables'
import { Fragment } from 'react'

const Project = ({ title, description, href, first = false }) => {
  return (
    <Fragment>
      {!first && <Spacer />}
      <ProjectContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectLink href={href}>link</ProjectLink>
      </ProjectContainer>
    </Fragment>
  )
}

const ProjectContainer = styled.div`
width: 100vw;
height: 75vh;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&::before {
  content: '';
  width: 100%;
  height: 100%;
  background-image: url(${rolodeckBackground});
  background-size: cover;
  background-position: center;
  position: absolute;
  filter: grayscale(100%);
}
`

const ProjectTitle = styled.h1`
margin: 0;
position: relative;
font-family: 'Comforter', cursive;
color: ${colors.whiteTransparent};
font-size: 20rem;
z-index: 1;
`

const ProjectLink = styled.a`
position: relative;
top: -10rem;
border: none;
background-color: ${colors.pink};
color: ${colors.green};
font-family: 'Beth Ellen', cursive;
font-size: 3rem;
line-height: 4rem;
padding: 0 1rem;
border-radius: 10px;
z-index: 2;
text-decoration: none;
cursor: pointer;
&:hover {
  top: -10.5rem;
  box-shadow: 0 0.5rem ${colors.blue};
}
&:active {
  top: -10.25rem;
  box-shadow: 0 0.25rem ${colors.blue};
}
`

const ProjectDescription = styled.p`
position: relative;
color: ${colors.green};
font-size: 2rem;
margin: 0 4rem 2rem 4rem;
top: -10rem;
text-align: center;
`

const Spacer = styled.div`
height: 10rem;
background-color: ${colors.blue};
`

export default Project
