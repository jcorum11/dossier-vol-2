import styled from 'styled-components'
import { colors } from '../../variables'
import { Fragment } from 'react'

const Project = ({ projectDetails, first = false }) => {
  return (
    <Fragment>
      {!first && <Spacer />}
      <ProjectContainer image={projectDetails.img}>
        <ProjectTitle>{projectDetails.title}</ProjectTitle>
        <ProjectDescription>{projectDetails.description}</ProjectDescription>
        <ProjectLink href={projectDetails.href}>link</ProjectLink>
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
  background-image: url(${props => props.image});
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
@media screen and (max-width: 768px) {
  font-size: 5rem;
  text-align: center;
}
@media screen and (min-width: 1024px) and (max-width: 1440px) {
  font-size: 10rem;
}
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
@media screen and (max-width: 768px), (min-width: 1020px) and (max-width: 1440px) {
  top: 0;
}
`

const ProjectDescription = styled.p`
position: relative;
color: ${colors.green};
font-size: 2rem;
margin: 0 4rem 2rem 4rem;
top: -10rem;
text-align: center;
@media screen and (max-width: 768px) {
  font-size: 1rem;
  margin: 1rem;
  line-height: 2rem;
  top: 0;
}
@media screen and (min-width: 1024px) and (max-width: 1440px) {
  top: 0;
}
`

const Spacer = styled.div`
height: 10rem;
background-color: ${colors.blue};
@media screen and (max-width: 768px) {
  height: 3rem;
}
`

export default Project
