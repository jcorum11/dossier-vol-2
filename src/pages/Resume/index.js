import styled from 'styled-components'
import SectionTitle from '../../components/SectionTitle'
import backgroundImage from './assets/sumaid-pal-singh-bakshi-YZS1ATCDifw-unsplash.jpg'
import { pink, green } from '../../variables'
import resumeImage from './assets/jacob-corum-resume-oct-2020.png'
import resumePdf from './assets/jacob-corum-resume-oct-2020.pdf'

const Resume = () => {
  return (
    <section id='resume'>
      <SectionTitle name='resume' />
      <Container>
        <TitleContainer>
          <Title>WANT TO HIRE ME?</Title>
        </TitleContainer>
        <ResumeContainer>
          <ResumeLink href={resumePdf}>
            <ResumeImage></ResumeImage>
          </ResumeLink>
          <DownloadLink href={resumePdf} download='jake-corums-resume'>download</DownloadLink>
        </ResumeContainer>
      </Container>
    </section>
  )
}

const Container = styled.section`
position: relative;
height: 100vh;
width: 100vw;
display: grid;
grid-template-columns: 50vw 50vw;
&::before {
  content: '';
  height: 100%;
  width: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  position: absolute;
  filter: grayscale(100%);
}
@media screen and (max-width: 768px) {
  display: block;
  height: 90vh;
}
`

const Title = styled.h1`
position: relative;
font-size: 11rem;
font-weight: 10;
text-align: center;
color: ${green};
margin: 0;
@media screen and (max-width: 768px) {
  font-size: 3rem;
}
`

const TitleContainer = styled.div`
padding: 0 3rem;
line-height: 17rem;
display: flex;
align-items: center;
@media screen and (max-width: 768px) {
  line-height: 4rem;
  padding: 2rem 4rem 0 4rem;
}
`

const ResumeLink = styled.a`
margin: 2rem;
@media screen and (max-width: 768px) {
  height: 10rem;
}
`

const ResumeImage = styled.div`
height: 75vh;
width: 100%;
position: relative;
background-image: url(${resumeImage});
background-size: cover;
background-position: center;
&:hover {
  top: -1rem;
  box-shadow: 0 1rem ${pink}
}
&:active {
  top: 0.5rem;
  box-shadow: 0 0.5rem ${pink}
}
@media screen and (max-width: 768px) {
  background-position: top;
  height: 20vh;
}
`

const DownloadLink = styled.a`
color: ${green};
text-decoration: none;
font-family: 'Beth Ellen', cursive;
display: block;
text-align: center;
font-size: 9rem;
line-height: 12rem;
position: relative;
&:hover {
  top: -1rem;
  text-shadow: 0 1rem ${pink};
}
&:active {
  top: -0.5rem;
  text-shadow: 0 0.5rem ${pink};
}
@media screen and (max-width: 768px) {
  font-size: 2rem;
  line-height: 6rem;
}
`

const ResumeContainer = styled.div`
position: relative;
margin: 2rem;
`

export default Resume
