import { lazy } from 'react'
import styled from 'styled-components'
import { green, pink } from '../../variables'
import backgroundImage from './assets/david-dvoracek-mwnBGQhka18-unsplash.jpg'

const SectionTitle = lazy(() => import('../../components/SectionTitle'))

const Contact = () => {
  return (
    <Section id='contact'>
      <SectionTitle name='contact' />
      <Container>
        <SocialContainer>
          <LinkContainer>
            <Link href="href='https://www.linkedin.com/in/jacob-corum-full-stack-development/'">
              <SocialText>LinkedIn</SocialText>
            </Link>
          </LinkContainer>
          <LinkContainer>
            <Link href='https://github.com/jcorum11'>
              <SocialText>Github</SocialText>
            </Link>
          </LinkContainer>
        </SocialContainer>
        <InfoContainer>
          <Email href='mailto: jacob.w.corum@gmail.com'>jacob.w.corum@gmail.com</Email>
          <PhoneNumber href='tel: 801-814-3191'>801-814-3191</PhoneNumber>
        </InfoContainer>
      </Container>
    </Section>
  )
}

const InfoText = styled.a`
display: block;
position: relative;
text-decoration: none;
color: ${green};
&:hover {
  top: -1rem;
  text-shadow: 0 1rem ${pink};
}
&:active {
  top: -0.5rem;
  text-shadow: 0 0.5rem ${pink}
}
`

const Email = styled(InfoText)`

`

const PhoneNumber = styled(InfoText)`

`

const Container = styled.section`
position: relative;
width: 100vw;
height: 75vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
}
`

const InfoContainer = styled.div`
position: relative;
grid-row: 2;
margin: 0 auto;
text-align: center;
font-size: 4rem;
font-weight: lighter;
@media screen and (max-width: 768px) {
  font-size: 1rem;
}
`

const LinkContainer = styled.div`
position: relative;
background-color: ${pink};
border-radius: 10px;
padding: 0.5rem;
margin: 1rem;
text-decoration: none;
&:hover {
  top: -1rem;
  box-shadow: 0 1rem ${green};
}
&:active {
  top: -0.5rem;
  box-shadow: 0 0.5rem ${green};
}
`

const SocialText = styled.p`
position: relative;
margin: 0;
font-size: 4rem;
color: ${green};
font-family: 'Beth Ellen', cursive;
@media screen and (max-width: 768px) {
  font-size: 1rem;
}
`

const SocialContainer = styled.div`
display: flex;
`

const Link = styled.a`
text-decoration: none;
`

const Section = styled.section`
scroll-snap-align: start;
`

export default Contact
